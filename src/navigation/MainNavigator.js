import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from '../screens/HomeScreens';
import FlexBoxScreen from '../screens/FlexBoxScreens';
import TextInputScreen from '../screens/TextInputScreens';
import OneScreen from '../screens/OneScreen';
import TwoScreen from '../screens/TwoScreen';
import ThirdScreen from '../screens/ThreeScreen';
import FourScreen from '../screens/FourScreen';

const MainNavigator = createStackNavigator(
    {
    Home:HomeScreen,
    Flex:{
        screen:FlexBoxScreen
    },
    TextInput:TextInputScreen,
    One:OneScreen,
    Two:TwoScreen,
    Three:ThirdScreen,
    Four:FourScreen
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Business Search'
      }
}
); 



export default createAppContainer(MainNavigator);