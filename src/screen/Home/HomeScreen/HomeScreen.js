import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Center,
  Heading,
  VStack,
  Button,
  Text,
  Box,
  ScrollView,
} from 'native-base';

const HomeScreen = () => {
  const handleButtonPress = buttonText => {
    // Qui posso gestire l'azione del pulsante
    console.log('Pulsante premuto:', buttonText);
  };

  const navigation = useNavigation();

  //PROFILE
  const onProfilePressed = () => {
    navigation.navigate('Profile');
  };

  //HELP AND FEEDB
  const onHelpAndFeedPressed = () => {
    navigation.navigate('HelpAndFeedBack');
  };

  //ALARMS
  const onAlarmPressed = () => {
    navigation.navigate('AlarmStatus');
  };

  //EVENT
  const onEventPressed = () => {
    navigation.navigate('CalendarPage');
  };

  //ASSETS
  const onAssetsPressed = () => {
    navigation.navigate('SmartDeviceControl');
  };

  //WEBCAM
  const onWebcamPressed = () => {
    navigation.navigate('CameraStatus');
  };

  //KPI
  const onMaintenancePressed = () => {
    navigation.navigate('Maintenance');
  };

  //KPI
  const onKpiPressed = () => {
    navigation.navigate('DeviceData');
  };

  //LOGOUT
  const onLogoutPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <Center w="100%">
      <Box safeArea py="30" w="90%" maxW="300">
        <TouchableOpacity>
          <Button
            height={90}
            width={200}
            borderRadius={30}
            alignSelf="center"
            onPress={() => onProfilePressed()}
            colorScheme="indigo">
            <Text color={'white'} fontSize="2xl">
              PROFILE
            </Text>
          </Button>
        </TouchableOpacity>

        <VStack style={styles.row} space={3} mt="3">
          <TouchableOpacity>
            <Button
              height={100}
              borderRadius={30}
              width={170}
              marginLeft={-6}
              marginRight={3}
              onPress={() => onAssetsPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                ASSETS
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              height={100}
              borderRadius={30}
              width={170}
              onPress={() => onKpiPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                KPI
              </Text>
            </Button>
          </TouchableOpacity>
        </VStack>

        <VStack style={styles.row} space={3} mt="5">
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              marginLeft={-6}
              marginRight={3}
              onPress={() => onAlarmPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                ALARM
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              onPress={() => onEventPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                EVENT
              </Text>
            </Button>
          </TouchableOpacity>
        </VStack>

        <VStack style={styles.row} space={3} mt="5">
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              marginLeft={-6}
              marginRight={3}
              onPress={() => onWebcamPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                WEBCAM
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              onPress={() => onMaintenancePressed()}
              colorScheme="indigo">
              <Text color={'white'}>MAINTENANCE</Text>
            </Button>
          </TouchableOpacity>
        </VStack>

        <VStack style={styles.row} space={3} mt="5">
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              marginLeft={-6}
              marginRight={3}
              onPress={() => handleButtonPress()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="xl">
                DATASHEET
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              height={100}
              padding={30}
              borderRadius={30}
              width={170}
              onPress={() => onHelpAndFeedPressed()}
              colorScheme="indigo">
              <Text color={'white'}>HELP AND FEEDBACK</Text>
            </Button>
          </TouchableOpacity>
        </VStack>
        <VStack space={3} mt="3">
          <TouchableOpacity>
            <Button
              height={90}
              width={200}
              borderRadius={30}
              alignSelf="center"
              onPress={() => onLogoutPressed()}
              colorScheme="indigo">
              <Text color={'white'} fontSize="2xl">
                LOGOUT
              </Text>
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
