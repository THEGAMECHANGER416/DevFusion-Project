import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapsScreen from './Screens/maps_screen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ( ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              if (! focused) {
                return <Image source={require('./static/images/home-outline.png')} style={{height:30, width:30}}/>;
              }
              else {
                return <Image source={require('./static/images/home.png')} style={{height:30, width:30}}/>;
              }
            } else if (route.name === 'Maps') {
              if (! focused) {
                return <Image source={require('./static/images/map-outline.png')} style={{height:30, width:30}}/>;
              }
              else {
                return <Image source={require('./static/images/map.png')} style={{height:30, width:30}}/>;
            }
            }
          }),
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIconStyle: {
            marginTop: 5
          },
          tabBarLabelStyle: {
            marginBottom: 5
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Maps" component={MapsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 