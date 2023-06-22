import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Profile from '../../Profile/Profile'
import {Center, VStack, Button, Text, Box, ScrollView} from 'native-base';

const Drawer = createDrawerNavigator();

const Menu = () => {

  return (
 
      <Drawer.Navigator>
        <Drawer.Screen 
        name= "Home"
        component={HomeScreen}
        />
     <Drawer.Screen 
        name= "Profile"
        component={Profile}
        />
    </Drawer.Navigator>
   
  );
};


export default Menu;
