import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Text, Box} from 'native-base';

const AlarmStatusPage = () => {
  const navigation = useNavigation();

 /*  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  }; */

  const [alarmStates, setAlarmStates] = useState([
    {id: 1, name: 'Alarm 1', status: 'Active'},
    {id: 2, name: 'Alarm 2', status: 'Idle'},
    {id: 3, name: 'Alarm 3', status: 'Active'},
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
      <Box safeArea py="40" w="90%" maxW="300">
        <VStack space={4} mt="5">
          <Heading
            size="2xl"
            fontWeight="600"
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
                <Text style={styles.alarmStatus}>{alarm.status}</Text>
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
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  alarmName: {
    fontSize: 16,
  },
  alarmStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4287f5',
  },
});

export default AlarmStatusPage;
