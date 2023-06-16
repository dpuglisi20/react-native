import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {Center, Heading, VStack, Button, Box} from 'native-base';

const AlarmControl = () => {
  const [alarmStatus, setAlarmStatus] = useState('inactive');
  const [activationCount, setActivationCount] = useState(0);

  const toggleAlarmStatus = () => {
    const newStatus = alarmStatus === 'active' ? 'inactive' : 'active';
    setAlarmStatus(newStatus);

    incrementActivationCount();
    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE ALARM STATE --//
    simulateAlarmAPIRequest(newStatus);
  };

  const incrementActivationCount = (
    newStatus = alarmStatus === 'active'
      ? setActivationCount(prevCount => prevCount + 0)
      : setActivationCount(prevCount => prevCount + 1),
  ) => {};

  //-- SIMULATE THE API CALL WITH A TIMEOUT TO SIMULATE THE RESPONSE TIME --//
  const simulateAlarmAPIRequest = status => {
    setTimeout(() => {
      console.log('Stato allarme aggiornato:', status);
    }, 1000);
    //-- INCREASE THIS TIME TO INCREASE THE SIMULATED WAIT TIME --//
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
            Alarm 2
          </Heading>
          <Heading
            mt="4"
            alignSelf={'center'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}
            fontWeight="medium"
            size="md">
            Alarm state: {alarmStatus}
          </Heading>

          <TouchableOpacity>
            <Button
              onPress={() => toggleAlarmStatus()}
              mt="5"
              colorScheme="indigo">
              {alarmStatus === 'active' ? 'Deactivate' : 'Active'}
            </Button>
          </TouchableOpacity>

          <Heading
            size="md"
            mt="5"
            fontWeight="600"
            alignSelf={'center'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}>
            Number of activations: {activationCount}
          </Heading>
        </VStack>
      </Box>
    </Center>
  );
};

export default AlarmControl;
