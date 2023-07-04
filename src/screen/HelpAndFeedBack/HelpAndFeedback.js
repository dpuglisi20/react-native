import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Center, Heading, VStack, Button, Box, Text} from 'native-base';

const HelpAndFeedback = () => {
  const navigation = useNavigation();

  const onFeedBackPressed = () => {
    navigation.navigate('FeedBack');
  };
  const onHelpPressed = () => {
    navigation.navigate('Help');
  };

  return (
    <Center w="100%">
      <Box p="2" py="32" w="90%" maxW="400">
        <Heading
          size="2xl"
          alignSelf={'center'}
          fontFamily={'Roboto-BoldItalic'}
          //color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          HELP AND FEEDBACK
        </Heading>
        <Heading
          mt="3"
          alignSelf={'center'}
          _dark={{
            color: 'warmGray.200',
          }}
          fontFamily={'BacasimeAntique-Regular'}
          color="coolGray.600"
          fontWeight="500"
          size="lg">
          Select one of these!
        </Heading>

        <VStack space={3} mt="10">
          <TouchableOpacity
            onPress={() => onHelpPressed()}
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
            <MaterialCommunityIcons
              name={'help-box'}
              size={25}
              marginTop={-3}
              color={'white'}
              style={{
                width: '12%',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Roboto-MediumItalic',
              }}>
              Help
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onFeedBackPressed()}
            style={{
              backgroundColor: '#AD40AF',
              padding: 18,
              alignSelf: 'center',
              width: '90%',
              height: '27%',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              //marginBottom: -200,
              marginTop: 15,
            }}>
            <MaterialIcons
              name={'feedback'}
              size={25}
              color={'white'}
              style={{
                width: '12%',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Roboto-MediumItalic',
              }}>
              Feedback
            </Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default HelpAndFeedback;
