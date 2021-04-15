/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// import TestHome from './src/screens/TestHome'
// import AcademiesScreen from './src/screens/AcademiesScreen'
// import UserProfileScreen from './src/screens/UserProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './src/navigation/tabs'
// import RootStackScreen from './src/RootStackScreen'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native'; 


const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

export default App;
