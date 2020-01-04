import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Dashboard,
    Profile,
  }),
);

export default Routes;