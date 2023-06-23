import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading, VStack, Button, Box} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const user = {
    Username: 'John Doe',
    Password: 'johndoe15',
    Email: 'djohn@example.com',
  };

  const navigation = useNavigation();

  const onLogoutPressed = () => {
    navigation.navigate('Login');
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="30" w="90%" maxW="300">
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
        <VStack space={3} mt="10">
          <Image
            source={require('../../../assets/images/user-profile.jpg')}
            style={{
              height: 120,
              width: 120,
              borderRadius: 50,
              alignSelf: 'center',
            }}
          />
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
     
        <VStack space={4} mt="10" py="30" w="100%">
      <TouchableOpacity
        onPress={(onLogoutPressed)}
        style={{
          alignSelf: 'center',
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '80%',
          borderRadius: 5,
          flexDirection: 'row',
          paddingVertical: 20,
          marginBottom: 50,
          borderRadius: 10,
        }}>

        <Ionicons
          style={{
            paddingHorizontal: 10,
          }}
          name="exit-outline"
          size={22}
          color="#fff"></Ionicons>
          
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
      </VStack>
      </Box>
    </Center>
  );
};

export default Profile;
