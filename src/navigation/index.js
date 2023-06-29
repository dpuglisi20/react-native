import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screen/Login/Login';
import SignInScreen from '../screen/Login/SignInScreen';
import ForgotPasswordScreen from '../screen/Login/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/Login/NewPasswordScreen';
import HomeScreen from '../screen/Home/HomeScreen/HomeScreen';
import Profile from '../screen/Profile';
import EditProfile from '../screen/Profile/EditProfile';
import HelpAndFeedback from '../screen/HelpAndFeedBack/HelpAndFeedback';
import FeedBack from '../screen/HelpAndFeedBack/FeedBack';
import PersonalFeedBack from '../screen/HelpAndFeedBack/PersonalFeedBack';
import Help from '../screen/HelpAndFeedBack/Help';
import SmartDeviceControl from '../screen/Assets/SmartDeviceControl';
import SmartDevice from '../screen/Assets/SmartDevice';
import SmartDevice2 from '../screen/Assets/SmartDevice2';
import SmartDevice3 from '../screen/Assets/SmartDevice3';
import SpeakerDevice from '../screen/Assets/SpeakerDevice';
import AlarmControl from '../screen/Alarms/AlarmControl';
import AlarmControl2 from '../screen/Alarms/AlarmControl2';
import AlarmStatus from '../screen/Alarms/AlarmStatus';
import CameraData from '../screen/Webcam/CameraData';
import CameraStatus from '../screen/Webcam/CameraStatus';
import DeviceData from '../screen/Kpi/DeviceData';
import Maintenance from '../screen/Maintenance/Maintenance';
import DocumentPickerComponent from '../screen/Datasheet/DocumentPickerComponent';
import FileStatus from '../screen/Datasheet/FileStatus';
import FileDevice1 from '../screen/Datasheet/FileDevice1';
import FileDevice2 from '../screen/Datasheet/FileDevice2';
import NoFile from '../screen/Datasheet/NoFile';
import Menu from '../utils/Menu';
import ShareMenu from '../screen/ShareWithFriends/ShareMenu/ShareMenu';
import AgendaPage from '../screen/Event/AgendaPage';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='SignIn' component={SignInScreen}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
      <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='HelpAndFeedback' component={HelpAndFeedback}/>
      <Stack.Screen name='FeedBack' component={FeedBack}/>
      <Stack.Screen name='PersonalFeedBack' component={PersonalFeedBack}/>
      <Stack.Screen name='Help' component={Help}/>
      <Stack.Screen name='SmartDeviceControl' component={SmartDeviceControl}/>
      <Stack.Screen name='SmartDevice' component={SmartDevice}/>
      <Stack.Screen name='SmartDevice2' component={SmartDevice2}/>
      <Stack.Screen name='SmartDevice3' component={SmartDevice3}/>
      <Stack.Screen name='SpeakerDevice' component={SpeakerDevice}/>
      <Stack.Screen name='AlarmStatus' component={AlarmStatus}/>
      <Stack.Screen name='AlarmControl' component={AlarmControl}/>
      <Stack.Screen name='AlarmControl2' component={AlarmControl2}/>
      <Stack.Screen name='CameraData' component={CameraData}/>
      <Stack.Screen name='CameraStatus' component={CameraStatus}/>
      <Stack.Screen name='DeviceData' component={DeviceData}/>
      <Stack.Screen name='Maintenance' component={Maintenance}/>
      <Stack.Screen name="DocumentPickerComponent" component={DocumentPickerComponent} />
      <Stack.Screen name="FileStatus" component={FileStatus} />
      <Stack.Screen name="FileDevice1" component={FileDevice1} />
      <Stack.Screen name="FileDevice2" component={FileDevice2} />
      <Stack.Screen name="NoFile" component={NoFile} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="ShareMenu" component={ShareMenu} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AgendaPage" component={AgendaPage} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;