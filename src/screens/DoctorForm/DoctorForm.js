import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import { Formik,  Field, Form, withFormik } from 'formik';
import {Text, List, ListItem, Container, Content, Tabs, Tab, TabHeading, Button, Toast } from 'native-base';

import Input from './Components/InputText';
import Picker from './Components/PickerText';
import { getSpecialisations, addDoctor, removeDoctor } from '../../dal/fetch';

const doctorInintFields = {
  name: '',
  specialisation_id: '',
  medical_facility_name: '',
  medical_facility_address: '',
  medical_facility_latitude: '',
  medical_facility_longitude: '',
  reception_phone_number: '',
  work_phone: '',
  mobile_phone: '',
  email: '',
};


class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        spec: [],
        doctor: props.navigation.getParam('doctor', null),
    };
  }

  static navigationOptions = ({ navigation }) => {
    const doctor = navigation.getParam('doctor', null);
    return  {
      title: doctor ? 'Редактировать врача' : 'Добавить врача',
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
    };
  };

  componentDidMount() {
    getSpecialisations().then(({ data }) => this.setState({ spec: data }));
  }

  submit = (values) => {
    const { navigation } = this.props;
    addDoctor(values)
    .then(() => {
      navigation.navigate('Inintial');
    });
  }

  removeDoctor = () => {
    const { doctor } = this.state;
    const { navigation } = this.props;
    removeDoctor(doctor.id)
    .then(() => {
      navigation.goBack();
    });
  }

  render() {
    const { spec, doctor } = this.state;
    if (doctor) {
       doctor.specialisation_id = parseInt(doctor.specialisation_id, 10);
    }

    return (
      <Container>
        <ScrollView style={styles.container}>
            <Formik
              initialValues={doctor || doctorInintFields}
              onSubmit={this.submit}
              enableReinitialize
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
                      onChange={handleChange('reception_phone_number')}
                      value={values.reception_phone_number}
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
                {!!doctor &&
                <View style={styles.delButton}>
                  <Button
                    rounded
                    bordered
                    danger
                    style={{ justifyContent: 'center' }}
                    onPress={this.removeDoctor}
                  >
                    <Text>Удалить врача</Text>
                  </Button>
                </View>}
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
  delButton: {
    marginVertical: 20,
    paddingHorizontal: 60,
  }
});


export default DoctorForm;
