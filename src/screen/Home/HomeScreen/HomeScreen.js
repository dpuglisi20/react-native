import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Center, VStack, Button, Text, Box, ScrollView} from 'native-base';
import { LogBox } from 'react-native';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  //Da finire 
//https://youtu.be/M4WNSjTWFDo 
  const pages = [
    {
      id: 1,
      name: 'Assets',
      icon: 'thermometer-full',
    },
    {
      id: 2,
      name: 'Kpi',
      icon: 'line-chart',
    },
    {
      id: 3,
      name: 'Alarm',
      icon: 'bullhorn',
    },
    {
      id: 4,
      name: 'Event',
      icon: 'calendar-o',
    },
    {
      id: 5,
      name: 'Webcam',
      icon: 'video-camera',
    },
    {
      id: 6,
      name: 'Maintenance',
      icon: 'wrench',
    },
    {
      id: 7,
      name: 'Datasheet',
      icon: 'newspaper-o',
    },
    {
      id: 8,
      name: 'Help and Feedback',
      icon: 'comments',
    },
  ];

  const navigation = useNavigation();

  //-- PROFILE --//
  const onProfilePressed = () => {
    navigation.navigate('Profile');
  };

  //-- LOGOUT --//
  const onLogoutPressed = () => {
    navigation.navigate('SignIn');
  };

  const handlePagePress = id => {
    switch (id) {
      //-- ASSET --//
      case 1:
        navigation.navigate('SmartDeviceControl');
        break;

      //-- KPI --//
      case 2:
        navigation.navigate('DeviceData');
        break;

      //-- ALARM --//
      case 3:
        navigation.navigate('AlarmStatus');
        break;

      //-- EVENT --//
      case 4:
        navigation.navigate('CalendarPage');
        break;

      //-- WEBCAM --//
      case 5:
        navigation.navigate('CameraStatus');
        break;

      //-- MAINTENANCE --//
      case 6:
        navigation.navigate('Maintenance');
        break;

      //-- DATASHEET --//
      case 7:
        navigation.navigate('FileStatus');
        break;

      //-- HELP AND FEEDBACK --//
      case 8:
        navigation.navigate('HelpAndFeedback');
        break;

      default:
        break;
    }
  };

  const renderButtons = pages => {
    const rows = Math.ceil(pages.length / 2);
    const buttonRows = [];

    for (let i = 0; i < rows; i++) {
      const start = i * 2;
      const end = start + 2;
      const rowButtons = pages.slice(start, end);

      buttonRows.push(
        <VStack space={3} mt="10" style={styles.buttonRow}>
          {rowButtons.map(page => (
            <TouchableOpacity
              key={page.id}
              style={styles.buttonWrapper}
              onPress={() => handlePagePress(page.id)}>
              <Icon
              paddingVertical={15}
                alignSelf="center"
                name={page.icon}
                size={90}
                color="#4287f5"
              />
              <Text style={styles.pageName}>{page.name}</Text>
            </TouchableOpacity>
          ))}
        </VStack>,
      );
    }
    return buttonRows;
  };

  return (
     <ScrollView w={['400', '800']} h="80">
      <Center w="100%">
        <View>{renderButtons(pages)}</View>
        
        <VStack space={4} mt="150">
        
        </VStack>
      </Center>
    </ScrollView> 
  );
};

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageName: {
    paddingHorizontal: 7,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 13,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    //backgroundColor: 'green',
  },
  buttonWrapper: {
    height: 160,
    width: '48%', // Larghezza del bottone (48% per lasciare spazio tra i bottoni)
    marginBottom: -70, // Spazio tra le righe
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
