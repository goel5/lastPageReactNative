// import 'react-native-gesture-handler';
import React from 'react';
import TestHome from '../src/screens/TestHome'
import AcademiesScreen from '../src/screens/AcademiesScreen'
// import UserProfileScreen from './src/screens/UserProfileScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='TestHome' component={TestHome}/>
        <RootStack.Screen name='AcademiesScreen' component={AcademiesScreen}/>
    </RootStack.Navigator>
);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });

export default RootStackScreen;
