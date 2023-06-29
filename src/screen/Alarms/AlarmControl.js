import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Center, Heading, VStack, Button, Box, Progress} from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import IconAw from 'react-native-vector-icons/FontAwesome';

const AlarmControl = () => {
  const [alarmStatus, setAlarmStatus] = useState('Armed');
  const [activationCount, setActivationCount] = useState(1);
  const [color, setColor] = useState('#009900');
  const [icon, setIcon] = useState('shield-check');
  const [app, setApp] = useState(1);

  /*  const toggleAlarmStatus = id => {
    const newStatus = alarmStatus === 'Armed' ? 'Disarmed' : 'Armed';
    setAlarmStatus(newStatus);
    if (newStatus == 'Armed') {
      setColor('green');
      setIcon('shield-check')
    } else {setColor('red');
    setIcon('shield-x')
  }
    incrementActivationCount();
    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE ALARM STATE --//
    simulateAlarmAPIRequest(newStatus);
  }; */
  const toggleAlarmStatus = id => {
    if (app != id) {
      if (id == 1) {
        setColor('#009900');
        setIcon('shield-check');
        setApp(id);
        incrementCount();
        setAlarmStatus('Armed');
      } else {
        setColor('#cc0000');
        setIcon('shield-x');
        setApp(id);
        setAlarmStatus('Disarmed');
      }
    } else {
      console.log('Status already set to', alarmStatus);
    }

    //-- SIMULATE SENDING THE API REQUEST TO UPDATE THE ALARM STATE --//
    //simulateAlarmAPIRequest(newStatus);
  };

  const incrementCount = () => {
    setActivationCount(prevCount => prevCount + 1);
  };

  //-- SIMULATE THE API CALL WITH A TIMEOUT TO SIMULATE THE RESPONSE TIME --//
  const simulateAlarmAPIRequest = status => {
    setTimeout(() => {
      console.log('Stato allarme aggiornato:', status);
    }, 1000);
    //-- INCREASE THIS TIME TO INCREASE THE SIMULATED WAIT TIME --//
  };

  return (
    <Center w="100%">
      <Box safeArea py="24" w="90%" maxW="300">
        <VStack space={4} mt="5">
          <Heading
            size="2xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            marginLeft={-10}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Alarm 1 status
          </Heading>
          <Icon
            name={icon}
            size={30}
            color={color}
            paddingStart={270}
            marginTop={-53}
          />
          <Heading
            size="md"
            mt="5"
            fontWeight="600"
            alignSelf={'center'}
            fontFamily={'Roboto-MediumItalic'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}>
            Alarm state:
          </Heading>
          <Heading
            size="xl"
            fontWeight="600"
            alignSelf={'center'}
            fontFamily={'Roboto-BoldItalic'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}>
            {alarmStatus}
          </Heading>
          <VStack mt="7">
            <Progress colorScheme="green" value={activationCount} mx="1" />
          </VStack>
          <VStack
            mt="3"
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => toggleAlarmStatus(1)}
              style={{
                //backgroundColor: '#AD40AF',
                padding: 20,
                alignSelf: 'center',
                width: '45%',
                height: '70%',
                borderRadius: 10,
                borderColor: '#0a51c2',
                borderWidth: 2,
                justifyContent: 'center',
                //marginBottom: -200,
                //marginTop: -15,
              }}>
              <Icon
                name={'shield-check'}
                size={40}
                color={'#009900'}
                style={{
                  alignSelf: 'center',
                  marginTop: -50,
                }}
              />
              <Text
                style={{
                  paddingTop: 10,
                  marginBottom: -50,
                  fontSize: 18,
                  alignSelf: 'center',
                  color: '#000',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                Armed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleAlarmStatus(0)}
              style={{
                //backgroundColor: '#AD40AF',
                padding: 20,
                alignSelf: 'center',
                width: '45%',
                height: '70%',
                borderRadius: 10,
                borderColor: '#0a51c2',
                borderWidth: 2,
                justifyContent: 'center',
                //marginBottom: -200,
                //marginTop: -15,
              }}>
              <Icon
                name={'shield-x'}
                size={40}
                color={'#cc0000'}
                style={{
                  alignSelf: 'center',
                  marginTop: -50,
                }}
              />
              <Text
                style={{
                  paddingTop: 10,
                  marginBottom: -50,
                  fontSize: 18,
                  alignSelf: 'center',
                  color: '#000',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                Disarmed
              </Text>
            </TouchableOpacity>
          </VStack>
          <Heading
            size="2xl"
            fontWeight="600"
            alignSelf={'center'}
            fontFamily={'Roboto-Black'}
            color="coolGray.900"
            _dark={{
              color: 'warmGray.500',
            }}>
            {activationCount}
          </Heading>
          <Heading
            size="md"
            mt="-3"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.500',
            }}>
            Number of activations
          </Heading>
        </VStack>
      </Box>
    </Center>
  );
};

export default AlarmControl;
