import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AcademiesScreen from '../screens/AcademiesScreen'
import TestHome from '../screens/TestHome'
import HomeScreen from '../screens/HomeScreen'
import SportCard from '../cards/SportCard'
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={TestHome}/>
      <HomeStack.Screen name="Academies" component={AcademiesScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen;