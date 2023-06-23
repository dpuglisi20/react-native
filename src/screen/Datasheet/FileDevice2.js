import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading, VStack, Button, Box} from 'native-base';

const FileDevice2 = () => {
    const device = {
        id: 2,
        name: 'Device 2',
        category: 'Category A',
        status: 'On',
        degrees: 22, 
      };
      const navigation = useNavigation();

      const onGoBackPressed = () => {
        navigation.navigate('Menu');
      };
    
      return (
        <Center w="100%" >
          <Box safeArea p="2" py="40" w="90%" maxW="300" >
            <Heading
              size="2xl"
              alignSelf={'center'}
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              DEVICE 2
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
                ID: {device.id}
              </Heading>
              <Heading
                mt="4"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="md">
                NAME: {device.name}
              </Heading>
              <Heading
                mt="4"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="md">
                CATEGORY: {device.category}
              </Heading>
              <Heading
                mt="4"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="md">
                STATUS: {device.status}
              </Heading>
              <Heading
                mt="4"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="md">
                DEGREES: {device.degrees}
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
        </Center>
      );
    };
    
export default FileDevice2
