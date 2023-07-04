import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading, VStack, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Center w="100%">
      <Box p="2" py="20" w="90%" maxW="400">
        <View style={styles.root}>
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
          </VStack>

          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />

          <TouchableOpacity
            onPress={onSendPressed}
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
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </Box>
    </Center>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});
