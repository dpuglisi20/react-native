import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Center, Heading, VStack, Button, Text, Box} from 'native-base';

const AlarmStatusPage = () => {
  const navigation = useNavigation();

  /*  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  }; */

  const [alarmStates, setAlarmStates] = useState([
    {
      id: 1,
      name: 'Alarm 1',
      status: 'Active',
      description: 'My Home Therm',
      icon: 'alarm-light-outline',
      color: '#5593f6',
    },
    {
      id: 2,
      name: 'Alarm 2',
      status: 'Idle',
      description: 'My Home Therm',
      icon: 'alarm-light',
      color: '#F44336',
    },
    {
      id: 3,
      name: 'Alarm 3',
      status: 'Not initialized',
      description: 'My Home Therm',
      icon: 'alarm-light-outline',
      color: '#5593f6',
    },
  ]);

  const handleAlarmPress = id => {
    switch (id) {
      case 1:
        navigation.navigate('AlarmControl');
        console.log('Redirect to Alarm 1');
        break;
      case 2:
        navigation.navigate('AlarmControl2');
        console.log('Redirect to Alarm 2');
        break;
      case 3:
        //navigation.navigate('AlarmControl3');
        // console.log('Redirect to Alarm 3');
        break;
      default:
        break;
    }
  };

  return (
    <Center w="100%">
      <Box safeArea py="20" w="90%" maxW="300">
        <VStack space={4} mt="5">
          <Heading
            size="2xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            ALARM STATES
          </Heading>
          <VStack space={3} mt="10">
            {alarmStates.map(alarm => (
              <TouchableOpacity
                key={alarm.id}
                style={styles.alarmItem}
                onPress={() => handleAlarmPress(alarm.id)}>
                <Text style={styles.alarmName}>{alarm.name}</Text>
                <Text style={styles.alarmStatus} color={alarm.color}>{alarm.status}</Text>
                <MaterialCommunityIcons
                  name={alarm.icon}
                  size={30}
                  color={alarm.color}
                  marginRight={10}
                />
              </TouchableOpacity>
            ))}
          </VStack>
          {/* <TouchableOpacity>
            <Button
              onPress={() => onGoBackPressed()}
              mt="10"
              colorScheme="indigo">
              Go Back
            </Button>
          </TouchableOpacity> */}
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  alarmName: {
    fontWeight:"light",
            fontFamily:'Roboto-BoldItalic',
            marginLeft:10,
    fontSize: 18,
  },
  alarmStatus: {
    
    fontSize: 16,
    fontWeight: 'bold',
    //color: '#4287f5',
  },
});

export default AlarmStatusPage;
