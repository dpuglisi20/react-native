import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Center,
  Heading,
  VStack,
  Button,
  Box,
} from 'native-base';

const Profile= () => {
  const user = {
    Username: 'example',
    Password: 'example',
    Email: 'mario@example.com',
  };

  const navigation = useNavigation();
  
  const onGoBackPressed = () => { 
    navigation.navigate('HomeScreen');
  };

  const onLogoutPressed = () => { 
    navigation.navigate('SignIn');
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="40" w="90%" maxW="300">
        <Heading
          size="2xl"
          alignSelf={'center'}
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          PROFILE
        </Heading>
        <VStack space={3} mt="2">
        <Heading
        mt="4"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="md">
        Username: {user.Username}
      </Heading>
      <Heading
        mt="4"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="md">
        Password: {user.Password}
      </Heading>
      <Heading
        mt="4"
        _dark={{
          color: 'warmGray.200',
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="md">
        Email: {user.Email}
      </Heading>
      </VStack>
      <VStack space={3} mt="5">
      <TouchableOpacity>
          <Button
            onPress={() => onGoBackPressed()}
            mt="5"
            colorScheme="indigo">
           Go Back
          </Button>
        </TouchableOpacity>
        </VStack>
        </Box>
        <Box safeArea p="2" py="10" w="90%" maxW="300">
        <TouchableOpacity>
          <Button
            onPress={() => onLogoutPressed()}
             mt="-70"
            colorScheme="indigo">
           LOGOUT
          </Button>
        </TouchableOpacity>
        </Box>
    </Center>
  );
};

export default Profile;
