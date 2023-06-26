import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Center, Heading, VStack, Button, Text, Box} from 'native-base';

const SmartDeviceControl = () => {
  const [deviceStatus, setDeviceStatus] = useState('off');
  const [deviceTemperature, setDeviceTemperature] = useState(20);

  const toggleDeviceStatus = () => {
    const newStatus = deviceStatus === 'off' ? 'on' : 'off';
    setDeviceStatus(newStatus);
    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE DEVICE STATE --//
    simulateDeviceAPIRequest({
      status: newStatus,
      temperature: deviceTemperature,
    });
  };

  const increaseTemperature = () => {
    const newTemperature = deviceTemperature + 1;
    setDeviceTemperature(newTemperature);
    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE TEMPERATURE OF THE DEVICE --//
    simulateDeviceAPIRequest({
      status: deviceStatus,
      temperature: newTemperature,
    });
  };

  const decreaseTemperature = () => {
    const newTemperature = deviceTemperature - 1;
    setDeviceTemperature(newTemperature);
    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE TEMPERATURE OF THE DEVICE --//
    simulateDeviceAPIRequest({
      status: deviceStatus,
      temperature: newTemperature,
    });
  };

  //-- SIMULATE THE API CALL WITH A TIMEOUT TO SIMULATE THE RESPONSE TIME --//
  const simulateDeviceAPIRequest = data => {
    setTimeout(() => {
      console.log('Dati aggiornati:', data);
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
            Smart device 1
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

          <TouchableOpacity
               onPress={() => toggleDeviceStatus()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 15,
                width: '100%',
                height: '10%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                {deviceStatus === 'on' ? 'Off' : 'On'}
              </Text>
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

          <TouchableOpacity
               onPress={() => increaseTemperature()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 17,
                width: '100%',
                height: '12%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                 <Icon
                name={'arrow-up'}
                size={20}
                color="white"
              />
              <Text
                style={{
                  paddingEnd: 25,
                  paddingStart: 25,
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                  Increase temperature
              </Text>
              <Icon
                name={'arrow-up'}
                size={20}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity
                   onPress={() => decreaseTemperature()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 17,
                width: '100%',
                height: '12%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                <Icon
                name={'arrow-down'}
                size={20}
                color="white"
              />
              <Text
                style={{
                  paddingEnd: 25,
                  paddingStart: 25,
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                  Increase temperature
              </Text>
              <Icon
                name={'arrow-down'}
                size={20}
                color="white"
              />
            </TouchableOpacity>

        </VStack>
      </Box>
    </Center>
  );
};

const styles = {
 
};

export default SmartDeviceControl;
