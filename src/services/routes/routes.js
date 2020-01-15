import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Showcase from '../../pages/home/Showcase';
import Welcome from '../../pages/welcome/welcome';

const AppNavigator = createStackNavigator(
  {
    Home: Welcome,
    Showcase: Showcase,
  },
  {
    initialRouteName: 'Home',
  },
);
export default createAppContainer(AppNavigator);
