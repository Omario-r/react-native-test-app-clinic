import React from 'react';
import {
  View,
} from 'react-native';
import {Text, Container, Tabs, Tab, Button } from 'native-base';

import DoctorsList from './DoctorsList/DoctorsList';


const MainScreen = () => {
  return (
    <Container>
      <Tabs scrollWithoutAnimation>
        <Tab heading="Список врачей">
          <DoctorsList/>
        </Tab>
        <Tab heading="Архив врачей">
          <Text>Archive</Text>
        </Tab>
      </Tabs>
    </Container>
  );
};

MainScreen.navigationOptions = ({ navigation }) => ({
  title: 'Мои врачи',
  headerRight: () => (
    <View style={{ paddingRight: 10 }}>
      <Button
        transparent
        small
        onPress={() => navigation.navigate('DoctorForm')}
      >
        <Text style={{ fontSize: 26 }}>+</Text>
      </Button>
    </View>
  ),
});

export default MainScreen;
