import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Center, Heading, VStack, Button, Text, Box} from 'native-base';

const SmartDeviceControl = () => {
  const [deviceStatus, setDeviceStatus] = useState('on');
  const [deviceTemperature, setDeviceTemperature] = useState(20);

  const toggleDeviceStatus = () => {
    const newStatus = deviceStatus === 'off' ? 'on' : 'off';
    setDeviceStatus(newStatus);
    // Simula l'invio della richiesta API per aggiornare lo stato del dispositivo
    simulateDeviceAPIRequest({
      status: newStatus,
      temperature: deviceTemperature,
    });
  };

  const increaseTemperature = () => {
    const newTemperature = deviceTemperature + 1;
    setDeviceTemperature(newTemperature);
    // Simula l'invio della richiesta API per aggiornare la temperatura del dispositivo
    simulateDeviceAPIRequest({
      status: deviceStatus,
      temperature: newTemperature,
    });
  };

  const decreaseTemperature = () => {
    const newTemperature = deviceTemperature - 1;
    setDeviceTemperature(newTemperature);
    // Simula l'invio della richiesta API per aggiornare la temperatura del dispositivo
    simulateDeviceAPIRequest({
      status: deviceStatus,
      temperature: newTemperature,
    });
  };

  const simulateDeviceAPIRequest = data => {
    // Simula la chiamata API con un timeout per simulare il tempo di risposta
    setTimeout(() => {
      // Simula il salvataggio dei dati aggiornati nel backend
      console.log('Dati aggiornati:', data);
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
            Smart device 2
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
            Device state: {deviceStatus}
          </Heading>
          <TouchableOpacity>
            <Button
              onPress={() => toggleDeviceStatus()}
              mt="5"
              colorScheme="indigo">
              {deviceStatus === 'on' ? 'Off' : 'On'}
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
            The device temperature is:
          </Heading>
          <Heading
            size="md"
            mt="1"
            fontWeight="600"
            alignSelf={'center'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}>
            {deviceTemperature}°C
          </Heading>
          <TouchableOpacity>
            <Button
              onPress={() => increaseTemperature()}
              mt="5"
              colorScheme="indigo">
              <Icon
                style={styles.arrowContainer}
                name={'arrow-up'}
                size={20}
                color="#000"
              />
              Increase temperature
            </Button>
          </TouchableOpacity>

          <TouchableOpacity>
            <Button
              onPress={() => decreaseTemperature()}
              mt="5"
              colorScheme="indigo">
              Decrease temperature
              <Icon
                style={styles.arrowContainer}
                name={'arrow-down'}
                size={20}
                color="#000"
              />
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = {
  arrowContainer: {
    alignSelf: 'center',
  },
};

export default SmartDeviceControl;
