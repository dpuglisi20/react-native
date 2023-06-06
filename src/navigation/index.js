import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screen/Login/SignInScreen';
import ForgotPasswordScreen from '../screen/Login/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/Login/NewPasswordScreen';
import HomeScreen from '../screen/Home/HomeScreen/HomeScreen';
import Profile from '../screen/Profile';
import HelpAndFeedBack from '../screen/HelpAndFeedBack/HelpAndFeedback';
import FeedBack from '../screen/HelpAndFeedBack/FeedBack';
import PersonalFeedBack from '../screen/HelpAndFeedBack/PersonalFeedBack';
import Help from '../screen/HelpAndFeedBack/Help';
import SmartDeviceControl from '../screen/Assets/SmartDeviceControl';
import SmartDevice from '../screen/Assets/SmartDevice';
import SmartDevice2 from '../screen/Assets/SmartDevice2';
import AlarmControl from '../screen/Alarms/AlarmControl';
import AlarmControl2 from '../screen/Alarms/AlarmControl2';
import AlarmStatus from '../screen/Alarms/AlarmStatus';
import CalendarPage from '../screen/Event/CalendarPage';
import CameraDevices from '../screen/Webcam/CameraDevices';
import CameraStatus from '../screen/Webcam/CameraStatus';
import DeviceData from '../screen/Kpi/DeviceData';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='SignIn' component={SignInScreen}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
      <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='HelpAndFeedBack' component={HelpAndFeedBack}/>
      <Stack.Screen name='FeedBack' component={FeedBack}/>
      <Stack.Screen name='PersonalFeedBack' component={PersonalFeedBack}/>
      <Stack.Screen name='Help' component={Help}/>
      <Stack.Screen name='SmartDeviceControl' component={SmartDeviceControl}/>
      <Stack.Screen name='SmartDevice' component={SmartDevice}/>
      <Stack.Screen name='SmartDevice2' component={SmartDevice2}/>
      <Stack.Screen name='AlarmStatus' component={AlarmStatus}/>
      <Stack.Screen name='AlarmControl' component={AlarmControl}/>
      <Stack.Screen name='AlarmControl2' component={AlarmControl2}/>
      <Stack.Screen name='CalendarPage' component={CalendarPage}/>
      <Stack.Screen name='CameraDevices' component={CameraDevices}/>
      <Stack.Screen name='CameraStatus' component={CameraStatus}/>
      <Stack.Screen name='DeviceData' component={DeviceData}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;