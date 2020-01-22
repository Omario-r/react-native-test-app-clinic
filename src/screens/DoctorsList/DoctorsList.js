import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Doctor from './Components/Doctor';
import { getDoctorsList } from '../../dal/fetch';

class DoctorsList extends Component {
  state = {
  }

  componentDidMount() {
    getDoctorsList()
    .then(({ data }) => this.setState({ doctors: data }))  
  }

  render() {
    const { doctors = [] } = this.state;
    console.log("Doc>>>", doctors)
    return (
      <ScrollView style={styles.container}>
        {doctors.map(doctor => (
          <View key={doctor.id}>
            <Doctor doctor={doctor}/>
          </View>
        ))}
      </ScrollView>
  )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default DoctorsList;
