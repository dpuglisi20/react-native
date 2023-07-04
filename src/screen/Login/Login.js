import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';

import LoginImg from '../../../assets/login.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from '../../components/InputField/InputField';

import {
  Center,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  Box,
} from 'native-base';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //-- VALIDATE USER --//
    navigation.navigate('Menu');
  };

  //-- FORGOT PASSWORD --//
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  //-- PER IL MOMENTO NON IN USO --/
  //-- REGISTRATION --//
  /*
    const onSignUpPressed = () => {
        console.warn("Sign Up");
    }
    */
  return (
    <>
      <Center w="100%">
        <Box safeArea p="2" py="16" w="90%" maxW="300">
          <VStack space={1}>
            <Heading
              size="2xl"
              fontWeight="light"
              fontFamily={'Roboto-BoldItalic'}
              //color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'BacasimeAntique-Regular'}
              color="coolGray.600"
              fontWeight="500"
              size="sm">
              Login to continue!
            </Heading>
          </VStack>
          <VStack
            space={1}
            mt="-10"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LoginImg
              width={300}
              height={300}
              style={{transform: [{rotate: '-5deg'}]}}
            />
          </VStack>
        </Box>
      </Center>

      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <VStack space={1} mt="-32">
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}></View>
            <Text> </Text>

            <Text
              style={{
                fontFamily: 'Roboto-MediumItalic',
                fontSize: 28,
                fontWeight: '600',
                color: '#333',
                marginBottom: 30,
              }}>
              Login
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}>
              <MaterialIcons
                name="person-outline"
                size={27}
                color="#666"
                style={{marginRight: 5}}
              />
              <TextInput
                fontFamily={'Roboto-BoldItalic'}
                placeholder="Username"
                style={{flex: 1, paddingVertical: 0}}></TextInput>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginBottom: 25,
              }}>
              <Ionicons
                name="ios-lock-closed-outline"
                size={25}
                color="#666"
                style={{marginRight: 5}}
              />
              <TextInput
                fontFamily={'Roboto-BoldItalic'}
                placeholder="Password"
                style={{flex: 1, paddingVertical: 0}}
                secureTextEntry={true}></TextInput>

              <TouchableOpacity onPress={onForgotPasswordPressed}>
                <Text
                  style={{
                    color: '#AD40AF',
                    fontFamily: 'Roboto-BoldItalic',
                    fontWeight: '800',
                  }}>
                  Forgot?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Menu')}
              style={{
                backgroundColor: '#AD40AF',
                padding: 20,
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 50,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </VStack>
      </SafeAreaView>
    </>
  );
};

export default Login;
