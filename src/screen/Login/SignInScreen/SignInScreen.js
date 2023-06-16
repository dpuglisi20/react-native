import React, {useState} from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import CustomInput from '../../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';

import {
  Center,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  Box,
} from 'native-base';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //-- VALIDATE USER --//
    navigation.navigate('HomeScreen');
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
    <Center w="100%">
      <Box safeArea p="2" py="40" w="90%" maxW="300">
        <Heading
          size="2xl"
          fontWeight="600"
          color="coolGray.800"
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
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <CustomInput value={username} setValue={setUsername} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <CustomInput
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              type="password"
            />
            <Link
              onPress={() => onForgotPasswordPressed()}
              _text={{
                fontSize: 'sm',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <TouchableOpacity>
            <Button
              onPress={() => onSignInPressed()}
              mt="2"
              colorScheme="indigo">
              Sign in
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignInScreen;
