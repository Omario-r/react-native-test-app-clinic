import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import Doctor from './Components/Doctor';
import { getDoctorsList } from '../../dal/fetch';

class DoctorsList extends Component {
  state = {
  }

  componentDidMount() {
    this.feth();
  }

  feth = () => {
    getDoctorsList()
    .then(({ data }) => this.setState({ doctors: data }))  
  }

  render() {
    const { doctors = [] } = this.state;
    return (
      <ScrollView style={styles.container}>
        <NavigationEvents onDidFocus={this.feth} />
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
