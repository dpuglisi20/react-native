import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer/CustomDrawer';

import HomeScreen from '../screen/Home/HomeScreen/HomeScreen';
import Profile from '../screen/Profile/Profile';
import Settings from '../screen/Home/Settings';
import Notifications from '../screen/Notifications/Notifications';

import {Center, VStack, Button, Text, Box, ScrollView} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Maintenance from '../screen/Maintenance/Maintenance';
import SmartDeviceControl from '../screen/Assets/SmartDeviceControl';
import DeviceData from '../screen/Kpi/DeviceData';
import CalendarPage from '../screen/Event/CalendarPage';
import FileStatus from '../screen/Datasheet/FileStatus';
import AlarmStatus from '../screen/Alarms/AlarmStatus';
import CameraStatus from '../screen/Webcam/CameraStatus';
import HelpAndFeedback from '../screen/HelpAndFeedBack/HelpAndFeedback';

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#4287f5',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',

        drawerLabelStyle: {marginLeft: -20, fontSize: 15},
      }}>
      <Drawer.Screen
        name= "Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
       <Drawer.Screen
        name= "HelpAndFeedback"
        component={HelpAndFeedback}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications} 
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}    
      />
       <Drawer.Screen
        name="SmartDeviceControl"
        component={SmartDeviceControl}
      />
       <Drawer.Screen
        name="DeviceData"
        component={DeviceData}
      />
       <Drawer.Screen
        name="Maintenance"
        component={Maintenance}
      />
     
        <Drawer.Screen
        name="CalendarPage"
        component={CalendarPage}
      />
         <Drawer.Screen
        name="FileStatus"
        component={FileStatus}
      />
        <Drawer.Screen
        name="AlarmStatus"
        component={AlarmStatus}
      />
        <Drawer.Screen
        name="CameraStatus"
        component={CameraStatus}
      />
    </Drawer.Navigator>
  );
};

export default Menu;
