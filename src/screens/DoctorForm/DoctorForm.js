import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import { Formik,  Field, Form } from 'formik';
import {Text, List, ListItem, Container, Content, Tabs, Tab, TabHeading, Button } from 'native-base';

import Input from './Components/InputText';
import Picker from './Components/PickerText';
import { getSpecialisations, addDoctor } from '../../dal/fetch';

const doctorInintFields = {
  name: '',
  specialisation_id: '',
  medical_facility_name: '',
  medical_facility_address: '',
  medical_facility_latitude: '',
  medical_facility_longitude: '',
  reception_work_phone: '',
  work_phone: '',
  mobile_phone: '',
  email: '',
};


class DoctorForm extends Component {
  state = {
    spec: [],
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Добавить врача',
    headerRight: () => (
      <View style={{ paddingRight: 10 }}>
        <Button
          transparent
          small
          onPress={() => {
            navigation.submitForm();
            navigation.navigate('Initial');
          }}
        >
          <Text style={{ fontSize: 26 }}>v</Text>
        </Button>
      </View>
    ),
  })

  componentDidMount() {
    getSpecialisations().then(({ data }) => this.setState({ spec: data }));
  }

  submit = (values) => {
    // console.log('FORM>>>', values)
    addDoctor(values).then((r) => console.log('add', r))
  }

  render() {
    const { spec } = this.state;
    return (
      <Container>
        <ScrollView style={styles.container}>
            <Formik
              initialValues={doctorInintFields}
              onSubmit={this.submit}
            >
              {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              setFieldValue,
              isValid,
              }) => {
                this.props.navigation.submitForm = handleSubmit;
                return (
                  <View>
                    <Input
                      label="Имя"
                      onChange={handleChange('name')}
                      value={values.name}
                    />
                    <Picker
                      label="Специализация"
                      onChange={(v) => setFieldValue('specialisation_id', v)}
                      value={values.specialisation_id}
                      data={spec}
                    />
                    <Input
                      label="Медучереждение"
                      onChange={handleChange('medical_facility_name')}
                      value={values.medical_facility_name}
                    />
                    <Input
                      label="Адрес"
                      onChange={handleChange('medical_facility_address')}
                      value={values.medical_facility_address}
                    />
                    <Input
                      label="Телефон регистратуры"
                      onChange={handleChange('reception_work_phone')}
                      value={values.reception_work_phone}
                    />
                    <Input
                      label="Рабочий телефон"
                      onChange={handleChange('work_phone')}
                      value={values.work_phone}
                    />
                    <Input
                      label="Мобильный телефон"
                      onChange={handleChange('mobile_phone')}
                      value={values.mobile_phone}
                    />
                    <Input
                      label="Email"
                      onChange={handleChange('email')}
                      value={values.email}
                    />
                  </View>
                );
              }}
            </Formik>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom:40,
  },
});

export default DoctorForm;
