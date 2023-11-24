import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/home_screen';
import SettingsScreen from './Screens/startup_screen';
import LoginScreen from './Screens/Login_screen'; // Updated component name to follow conventions
import Lets from './Screens/Lets';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppHome() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'HomeTab') {
              iconName = focused
                ? require('./static/images/home.png')
                : require('./static/images/home-outline.png');
            } else if (route.name === 'MapsTab') {
              iconName = focused
                ? require('./static/images/maps.png')
                : require('./static/images/maps-outline.png');
            }            
            return (
              <Image source={iconName} style={{ height: 20, width: 20 }}/>
            );
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            height: 50,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name="MapsTab" component={SettingsScreen} options={{tabBarLabel:'Maps'}}/>
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Lets" component={Lets} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={AppHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
