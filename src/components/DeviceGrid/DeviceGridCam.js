import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Center,
  Heading,
  View,
  Button,
  VStack,
  Text,
  Box,
  ScrollView,
  Switch,
} from 'native-base';

const DeviceGridCam = props => {
  const {cam, onPressDevice} = props;

  const navigation = useNavigation();

  const handleDevicePress = id => {
    switch (id) {
      case 1:
        navigation.navigate('SmartDevice');
        //console.log('Redirect to Device 1');
        break;
      case 2:
        navigation.navigate('SmartDevice2');
        //console.log('Redirect to Device 2');
        break;
      case 3:
        // navigation.navigate('SmartDevice3');
        console.log('initialize the device first');
        break;
      case 4:
        navigation.navigate('SpeakerDevice');
        console.log('initialize the device first');
        break;
      case 5:
        console.log('initialize the device first');
        break;
      case 6:
        navigation.navigate('SmartDevice3');
        break;
      default:
        break;
    }
  };

  const renderCam = ({item}) => {
    return (
      <VStack space={3} mt="10" style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => handleDevicePress(item.id)}>
          <Icon
            alignSelf="flex-start"
            paddingVertical={10}
            paddingHorizontal={20}
            name={'stop'}
            size={35}
            color={'grey'}
          />
          <Text style={styles.deviceName}>{item.name}</Text>
        </TouchableOpacity>
      </VStack>
    );
  };

  return (
    <FlatGrid itemDimension={120} data={cam} renderItem={renderCam} />
  );
};
const styles = StyleSheet.create({

  switch: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    marginBottom: -30,
  },
  deviceName: {
    fontFamily: 'Roboto-BoldItalic',
    //fontStyle: 'italic',

    paddingHorizontal: 10,
    fontSize: 16,
    //fontWeight: 'bold',
    marginTop: -5,
  },

  deviceDescription: {
    fontFamily: 'Roboto-LightItalic',
    paddingHorizontal: 10,
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingLeft: -10,
    paddingRight: -10,
    //backgroundColor: 'green',
  },
  buttonWrapper: {
    height: 120,
    width: '100%', // Larghezza del bottone (48% per lasciare spazio tra i bottoni)
    marginBottom: -70, // Spazio tra le righe
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});

export default DeviceGridCam;
