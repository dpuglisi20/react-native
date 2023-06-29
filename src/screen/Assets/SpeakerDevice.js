import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Center,
  Heading,
  VStack,
  Text,
  Box,
  View,
  Spinner,
  Slider,
} from 'native-base';
import Pie from 'react-native-pie';
import {StyleSheet} from 'react-native';

const SpeakerDevice = () => {
  const [startStatus, setStartStatus] = useState('pause');
  const [onChangeValue, setOnChangeValue] = React.useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(70);

  //const [color, setColor] = useState('green');

  const toggleStartStatus = () => {
    const newStatus = startStatus === 'pause' ? 'play' : 'pause';
    setStartStatus(newStatus);
  };

  return (
    <Center w="100%">
      <Box py="24" w="xl" maxW="full">
        <VStack space={4} mt="0">
          <Heading
            size="xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            // marginLeft={-10}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Google Nest Audio
          </Heading>
          {/* <Icon
            name={'circle'}
            size={30}
            color={color}
            paddingStart={330}
            marginTop={-50}
          /> */}
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
            Now Playing
            {/*  <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
            Connetting
            </Heading> */}
          </Heading>
          <VStack space={4} mt="3">
            <View
              style={{
                //flexDirection: 'row',
                //height:500,
                alignItems: 'center',
              }}>
              <VStack space={4} mt="20" alignItems="center" w="75%" maxW="300">
                <Slider
                  defaultValue={70}
                  colorScheme="cyan"
                  onChange={v => {
                    setOnChangeValue(Math.floor(v));
                  }}
                  onChangeEnd={v => {
                    v && setOnChangeEndValue(Math.floor(v));
                  }}>
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
                </Slider>
              </VStack>

              <View style={styles.gauge}>
                <Text style={styles.gaugeText}>{onChangeValue} %</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginVertical: -20,
                  fontFamily: 'Roboto-Regular',
                }}>
                Volume
              </Text>
            </View>
          </VStack>

          <VStack
            space={'xl'}
            mt="20"
            style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                //backgroundColor: 'white',
                //padding: 14,
                width: '10%',
                height: '40%',

                borderRadius: 100,
                // marginStart: 55,
                justifyContent: 'center',

                //marginBottom: 20,
              }}>
              <Icon
                name={'step-backward'}
                size={30}
                color="black"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleStartStatus()}
              style={{
                //backgroundColor: 'white',

                width: '10%',
                height: '40%',
                borderRadius: 100,
                //marginEnd: 55,

                justifyContent: 'center',
                //marginBottom: 20,
              }}>
              <Icon
                name={startStatus}
                size={30}
                color="black"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                //backgroundColor: 'white',

                width: '10%',
                height: '40%',
                borderRadius: 100,
                // marginEnd: 55,

                justifyContent: 'center',
                //marginBottom: 20,
              }}>
              <Icon
                name={'step-forward'}
                size={30}
                color="black"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </VStack>
          {/* <VStack mt="-24">
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
            </VStack> */}
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  gauge: {
    //position: 'absolute',
    //width:180,
    //marginTop: -140,
    alignItems: 'center',
    //justifyContent:'center',

    flexDirection: 'row',
  },
  gaugeText: {
    paddingTop: 20,
    //backgroundColor: 'red',
    color: '#000',
    fontSize: 35,
    //height: 50,
    fontFamily: 'Roboto-Medium',
  },
});

export default SpeakerDevice;
