import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Text, List, ListItem, Container, Content, Tabs, Tab, TabHeading, Button, Icon } from 'native-base';

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
})

export default MainScreen;
