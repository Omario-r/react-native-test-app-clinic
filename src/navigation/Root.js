import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from '../screens/Initial';
import DoctorForm from '../screens/DoctorForm/DoctorForm';

const RootSwitchNavigator = createAppContainer(createStackNavigator(
  {
    Initial,
    DoctorForm,
  },
  {
    initialRouteName: 'Initial',
  }
));

export default RootSwitchNavigator;
