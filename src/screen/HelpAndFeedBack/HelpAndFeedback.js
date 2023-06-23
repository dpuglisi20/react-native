import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Box} from 'native-base';

const HelpAndFeedback = () => {
  const navigation = useNavigation();

  const onFeedBackPressed = () => {
    navigation.navigate('FeedBack');
  };
  const onHelpPressed = () => {
    navigation.navigate('Help');
  };
  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="40" w="90%" maxW="300">
        <Heading
          size="2xl"
          fontWeight="700"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          HELP AND FEEDBACK
        </Heading>
        <Heading
          mt="4"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Select one of these!
        </Heading>

        <VStack space={3} mt="5">
          <TouchableOpacity>
            <Button onPress={() => onHelpPressed()} mt="5" colorScheme="indigo">
              Help
            </Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button
              onPress={() => onFeedBackPressed()}
              mt="10"
              colorScheme="indigo">
              Feedback
            </Button>
          </TouchableOpacity>
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

export default HelpAndFeedback;
