import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {Center, Heading, VStack, Button, Box} from 'native-base';

const AlarmControl = () => {
  const [alarmStatus, setAlarmStatus] = useState('active');
  const [activationCount, setActivationCount] = useState(1);

  const toggleAlarmStatus = () => {
    const newStatus = alarmStatus === 'active' ? 'inactive' : 'active';
    setAlarmStatus(newStatus);

    incrementActivationCount();
    // Simula l'invio della richiesta API per aggiornare lo stato dell'allarme
    simulateAlarmAPIRequest(newStatus);
  };

  const incrementActivationCount = (
    newStatus = alarmStatus === 'active'
      ? setActivationCount(prevCount => prevCount + 0)
      : setActivationCount(prevCount => prevCount + 1),
  ) => {
    //setActivationCount((prevCount) => prevCount + 1);
  };

  const simulateAlarmAPIRequest = status => {
    // Simula la chiamata API con un timeout per simulare il tempo di risposta
    setTimeout(() => {
      // Simula il salvataggio dello stato dell'allarme nel backend
      console.log('Stato allarme aggiornato:', status);
    }, 1000);
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
            Alarm 1
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
