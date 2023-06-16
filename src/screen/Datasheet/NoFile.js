import {Center, Heading, VStack, Button, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

const NoFile = () => {
  const navigation = useNavigation();

  const onGoBackPressed = () => {
    navigation.navigate('FileStatus');
  };

  return (
    <Center w="100%">
      <Box safeArea py="40" w="100%" maxW="300">
        <VStack space={4} mt="20">
          <Heading
            size="4xl"
            alignSelf={'center'}
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            NO FILE FOUND!
          </Heading>

          <TouchableOpacity>
            <Button
              onPress={() => onGoBackPressed()}
              mt="10"
              colorScheme="indigo">
              Go Back
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default NoFile;
