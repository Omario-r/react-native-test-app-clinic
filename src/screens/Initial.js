import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Text, List, ListItem, Container, Content, Tabs, Tab, TabHeading } from 'native-base';

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
  )
}

MainScreen.navigationOptions = {
  title: 'Мои врачи',
}

export default MainScreen;
