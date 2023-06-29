import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

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
import FileStatus from '../screen/Datasheet/FileStatus';
import AlarmStatus from '../screen/Alarms/AlarmStatus';
import CameraStatus from '../screen/Webcam/CameraStatus';
import HelpAndFeedback from '../screen/HelpAndFeedBack/HelpAndFeedback';
import AgendaPage from '../screen/Event/AgendaPage';



const Drawer = createDrawerNavigator();

const Menu = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        
        headerShown: true,
        drawerActiveBackgroundColor: '#4287f5',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerLabelStyle: {marginLeft: -20, fontSize: 15},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //title: '',
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="HelpAndFeedback"
        component={HelpAndFeedback}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="SmartDeviceControl"
        component={SmartDeviceControl}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="DeviceData"
        component={DeviceData}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="Maintenance"
        component={Maintenance}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="AgendaPage"
        component={AgendaPage}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="FileStatus"
        component={FileStatus}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="AlarmStatus"
        component={AlarmStatus}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen
        name="CameraStatus"
        component={CameraStatus}
        options={{
          title: '',
          //headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Menu;
