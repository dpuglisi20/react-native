import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading, VStack, Box} from 'native-base';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.log('The new password is: ', newPassword);
    navigation.navigate('Login');
  };

  return (
    <Center w="100%">
      <Box p="2" py="20" w="90%" maxW="400">
        <VStack space={1} mt="32">
          <Heading
            size="2xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            marginBottom={30}
            //color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Reset your password
          </Heading>

          <CustomInput placeholder="Code" value={code} setValue={setCode} />

          <CustomInput
            placeholder="Enter your new password"
            value={newPassword}
            setValue={setNewPassword}
          />

          <TouchableOpacity
            onPress={onSubmitPressed}
            style={{
              backgroundColor: '#AD40AF',
              padding: 20,
              width: '90%',
              borderRadius: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 30,
              marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Roboto-MediumItalic',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});

export default NewPasswordScreen;
