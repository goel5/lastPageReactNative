import React from 'react'
import { StyleSheet } from 'react-native'
// import TestHome from '../screens/TestHome'
import HomeStackScreen from './HomeStackScreen'
// import HomeScreen from '../screens/HomeScreen'
import UserProfileScreen from '../screens/UserProfileScreen'
// import AcademiesScreen from '../screens/AcademiesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import AcademiesStackScreen from '../navigation/AcademiesStackScreen'
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                // shifting: true,
                style: { ...styles.tabContainer }
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home-outline" color={focused?'red':'black'} size={27} />
                    ),
                }} />
            <Tab.Screen
                name='User'
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="people-outline" color={focused?'red':'black'} 
                        size={27} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        elevation: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        // height: 70
    }
})
export default Tabs;