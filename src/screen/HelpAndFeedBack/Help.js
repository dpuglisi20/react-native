import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Center,
  Heading,
  VStack,
  Button,
  Box,
  TextArea,
  View,
} from 'native-base';

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
      <Box safeArea py="32" w="90%" maxW="300">
        <Heading
          size="2xl"
          color="coolGray.800"
          fontFamily="Roboto-Medium"
          alignSelf="center"
          _dark={{
            color: 'warmGray.50',
          }}>
          You got a problem?
        </Heading>
        <VStack space={3} mt="10">
          <View style={styles.action}>
            <FontAwesome name="cube" color={'#4287f5'} size={20} />
            <TextInput
            
              placeholder="Object"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput, styles.bottomDrawerSection]}
            />
          </View>
          <TextArea
            value={message}
            onChangeText={setMessage}
            shadow={3}
            h={150}
            size={45}
            maxLength={600}
            placeholder="Message"
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
        </VStack>
        <VStack space={3} mt="16">
          <TouchableOpacity
            onPress={() => handleSend()}
            style={{
              backgroundColor: '#AD40AF',
              padding: 17,
              width: '100%',
              height: 55,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <FontAwesome
              name="send"
              color={'white'}
              size={20}
              style={{
                width: '12%',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff',
                fontFamily: 'Roboto-MediumItalic',
              }}>
              Send Help request
            </Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default Help;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 0,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 15,
    color: '#05375a',
  },
});
