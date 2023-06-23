import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Box, TextArea} from 'native-base';

const Help = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleSend = () => {
   //-- I CAN PUT LOGIC HERE TO SEND A HELP REQUEST --//
    console.warn('Thanks for your help request');
    navigation.navigate('Menu');
    console.log('Object:', subject);
    console.log('Message:', message);
  };

  return (
    <Center w="100%">
      <Box safeArea py="40" w="90%" maxW="300">
        <Heading
          size="2xl"
          fontWeight="700"
          color="coolGray.800"
          alignSelf="center"
          _dark={{
            color: 'warmGray.50',
          }}>
          HELP
        </Heading>
        <VStack space={3} mt="5">
        <TextArea
          value={subject}
          onChangeText={setSubject}
          shadow={3}
          h={50}
          size={45}
          placeholder="Insert your Object"
          w="300"
          _light={{
            placeholderTextColor: 'trueGray.700',
            bg: 'coolGray.100',
            _hover: {
              bg: 'coolGray.200',
            },
            _focus: {
              bg: 'coolGray.200:alpha.70',
            },
          }}
        />
        <TextArea
          value={message}
          onChangeText={setMessage}
          shadow={3}
          h={150}
          size={45}
          maxLength={600}
          placeholder="Insert your Message"
          w="300"
          _light={{
            placeholderTextColor: 'trueGray.700',
            bg: 'coolGray.100',
            _hover: {
              bg: 'coolGray.200',
            },
            _focus: {
              bg: 'coolGray.200:alpha.70',
            },
          }}
        />
       
          <TouchableOpacity>
            <Button onPress={() => handleSend()} mt="10" colorScheme="indigo">
              Send Help request
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default Help;
