import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Center, Heading, VStack, Text, Box, View} from 'native-base';
import Pie from 'react-native-pie';
import {StyleSheet} from 'react-native';

const SmartDevice2 = () => {
  const [deviceStatus, setDeviceStatus] = useState('on');
  const [deviceTemperature, setDeviceTemperature] = useState(20);
  const [color, setColor] = useState('green');

  const toggleDeviceStatus = () => {
    const newStatus = deviceStatus === 'off' ? 'on' : 'off';
    setDeviceStatus(newStatus);
    if (newStatus == 'off') {
      setColor('red');
    } else setColor('green');
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
      <Box py="24" w="xl" maxW="full">
        <VStack space={4} mt="0">
          <Heading
            size="2xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            marginLeft={-12}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Thermostat 2
          </Heading>
          <Icon
            name={'circle'}
            size={30}
            color={color}
            paddingStart={310}
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
            The device temperature is:
          </Heading>
          <VStack space={4} mt="3">
            <Text style={{alignSelf: 'center', fontFamily: 'Roboto-Light'}}>
              0 °C
            </Text>
            <View
              style={{
                //flexDirection: 'row',
                //height:500,
                alignItems: 'center',
              }}>
              <Pie
                radius={120}
                innerRadius={105}
                sections={[
                  {
                    percentage: deviceTemperature,
                    color: '#4287f5',
                  },
                ]}
                backgroundColor="#ddd"
              />
              <View style={styles.gauge}>
                <Text style={styles.gaugeText}> {deviceTemperature}</Text>
                <Text style={styles.text}> °C</Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginVertical: -50,
                  textAlign: 'right',
                  marginRight: 30,
                  fontFamily: 'Roboto-Light',
                }}>
                25 °C
              </Text>
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginVertical: 80,
                  fontFamily: 'Roboto-Light',
                }}>
                50 °C
              </Text>
            </View>
          </VStack>

          <VStack
            space={'xl'}
            mt="-9"
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => decreaseTemperature()}
              style={{
                backgroundColor: 'white',
                //padding: 14,
                width: '16%',
                height: '36%',

                borderRadius: 100,
                marginStart: 55,
                justifyContent: 'center',

                //marginBottom: 20,
              }}>
              <Icon
                name={'minus'}
                size={30}
                color="#5593f6"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => increaseTemperature()}
              style={{
                backgroundColor: 'white',

                width: '16%',
                height: '36%',
                borderRadius: 100,
                marginEnd: 55,

                justifyContent: 'center',
                //marginBottom: 20,
              }}>
              <Icon
                name={'plus'}
                size={30}
                color="#5593f6"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </VStack>
          <VStack mt="-24">
            <TouchableOpacity
              onPress={() => toggleDeviceStatus()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 20,
                alignSelf: 'center',
                width: '90%',
                height: '27%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                //marginBottom: -200,
                //marginTop: -15,
              }}>
              <Icon
                name={'power-off'}
                size={20}
                color={'white'}
                style={{
                  width: '10%',
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                {deviceStatus === 'on' ? 'Turn Off' : 'Turn On'}
              </Text>
            </TouchableOpacity>
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  gauge: {
    //position: 'absolute',
    //width:180,
    marginTop: -140,
    alignItems: 'center',
    //justifyContent:'center',

    flexDirection: 'row',
  },
  gaugeText: {
    paddingTop: 20,
    //backgroundColor:'red',
    color: '#000',
    fontSize: 40,
    //height:50,
    fontFamily: 'Roboto-Black',
  },
  text: {
    paddingTop: 9,
    color: 'grey',
    fontSize: 20,
    //height:50,
    fontFamily: 'Roboto-Regular',
  },
});

export default SmartDevice2;
