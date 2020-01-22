import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from '../screens/Initial';

const RootSwitchNavigator = createAppContainer(createStackNavigator(
  {
    Initial,
  },
  {
    initialRouteName: 'Initial',
  }
));

export default RootSwitchNavigator;