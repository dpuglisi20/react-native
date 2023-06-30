import {Center, Heading, VStack, Button, Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FolderImm from '../../../assets/folder.svg';

const NoFile = () => {
  const navigation = useNavigation();

  const onGoBackPressed = () => {
    navigation.navigate('FileStatus');
  };

  return (
    <Center w="100%">
      <Box safeArea py="1" w="90%" maxW="400">
        <VStack space={4} mt="20">
        <FolderImm
              width={250}
              height={250}
              alignSelf={'center'}
              style={{transform: [{rotate: '-5deg'}]}}
            />
          <Heading
            size="2xl"
            alignSelf={'center'}
            fontFamily={'Roboto-BoldItalic'}
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            NO FILE FOUND!
          </Heading>
          <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              alignSelf={'center'}
              fontFamily={'BacasimeAntique-Regular'}
              color="coolGray.600"
              fontWeight="500"
              size="lg">
             Let's start adding documents!
            </Heading>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Menu')}
              style={{
                alignSelf:'center',
                backgroundColor: '#AD40AF',
                padding: 20,
                width: '90%',
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
                 <MaterialIcons
                name="file-upload"
                size={27}
                color="white"
                style={{marginRight: 10}}
              />
              <Text
                style={{
                  paddingTop:4,
                  fontSize: 20,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                Upload
              </Text>
            </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default NoFile;
