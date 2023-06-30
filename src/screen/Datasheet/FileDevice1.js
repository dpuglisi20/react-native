import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Center,
  Heading,
  VStack,
  Button,
  Box,
  View,
  Text,
  HStack,
} from 'native-base';
import ThermometerImg from '../../../assets/Thermometer.svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FileDevice1 = () => {
  const device = {
    id: 1,
    name: ' Thermostat 1',
    category: 'Thermo',
    status: 'Off',
    degrees: 20,
  };
  const navigation = useNavigation();

  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="20" w="90%" maxW="300">
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}}>
            <ThermometerImg width={100} height={100} />
          </TouchableOpacity>
        </View>
        <Heading
          size="2xl"
          alignSelf={'center'}
          fontWeight="600"
          fontFamily={'Roboto-MediumItalic'}
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Thermostat 1 File
        </Heading>

        <VStack space={3} mt="12">
          <View
            style={[
              styles.action,
              styles.textInput,
              styles.bottomDrawerSection,
            ]}>
            <FontAwesome
              name="id-card"
              color={'#4287f5'}
              paddingTop={2}
              paddingLeft={1}
              size={20}
            />
            <Heading
              paddingLeft={5}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Bold'}
              color="#AD40AF"
              fontWeight="medium"
              size="md">
              ID:
            </Heading>
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Medium'}
              color="coolGray.600"
              fontWeight="medium"
              size="md">
              {device.id}
            </Heading>
          </View>

          <View
            style={[
              styles.action,
              styles.textInput,
              styles.bottomDrawerSection,
            ]}>
            <FontAwesome
              name="user"
              color={'#4287f5'}
              paddingLeft={5}
              paddingTop={2}
              size={20}
            />
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Bold'}
              color="#AD40AF"
              fontWeight="medium"
              size="md">
              NAME:
            </Heading>
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Medium'}
              color="coolGray.600"
              fontWeight="medium"
              size="md">
              {device.name}
            </Heading>
          </View>

          <View
            style={[
              styles.action,
              styles.textInput,
              styles.bottomDrawerSection,
            ]}>
            <Icon
              name="category"
              color={'#4287f5'}
              paddingLeft={1}
              paddingTop={2}
              size={20}
            />
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Bold'}
              color="#AD40AF"
              fontWeight="medium"
              size="md">
              CATEGORY:
            </Heading>
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Medium'}
              color="coolGray.600"
              fontWeight="medium"
              size="md">
              {device.category}
            </Heading>
          </View>

          <View
            style={[
              styles.action,
              styles.textInput,
              styles.bottomDrawerSection,
            ]}>
            <FontAwesome
              name="power-off"
              color={'#4287f5'}
              paddingLeft={3}
              paddingTop={2}
              size={20}
            />
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Bold'}
              color="#AD40AF"
              fontWeight="medium"
              size="md">
              STATUS:
            </Heading>
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Medium'}
              color="coolGray.600"
              fontWeight="medium"
              size="md">
              {device.status}
            </Heading>
          </View>

          <View
            style={[
              styles.action,
              styles.textInput,
              styles.bottomDrawerSection,
            ]}>
            <FontAwesome
              name="thermometer"
              color={'#4287f5'}
              paddingTop={2}
              paddingLeft={6}
              size={20}
            />
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Bold'}
              color="#AD40AF"
              fontWeight="medium"
              size="md">
              DEGREES:
            </Heading>
            <Heading
              paddingLeft={5}
              paddingTop={-1}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-Medium'}
              color="coolGray.600"
              fontWeight="medium"
              size="md">
              {device.degrees}
            </Heading>
          </View>
        </VStack>
        <VStack space={3} mt="5"></VStack>
      </Box>
    </Center>
  );
};

export default FileDevice1;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 40,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 5,
  },

  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 5,
    color: '#05375a',
  },
});
