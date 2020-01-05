import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import  TEST from './pages/styled';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Dashboard,
    Profile,
    TEST,
  }),
);

export default Routes;