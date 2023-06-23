import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Box, TextArea} from 'native-base';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleSend = () => {
    //-- I CAN PUT LOGIC HERE TO SEND FEEDBACK --//
    navigation.navigate('Menu');
    console.log('Message:', message, '| Stars:', rating);
  };

  const handleRating = value => {
    setRating(value);
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
          YOUR FEEDBACK
        </Heading>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map(value => (
            <TouchableOpacity key={value} onPress={() => handleRating(value)}>
              <Icon
                name={value <= rating ? 'star' : 'star-o'}
                size={45}
                color="#FFD700"
              />
            </TouchableOpacity>
          ))}
        </View>

        <Box safeArea p="2" alignItems="center" w="100%">
          <TextArea
            value={message}
            onChangeText={setMessage}
            shadow={3}
            h={150}
            size={45}
            placeholder="Insert your feedback here"
            w="300"
            _light={{
              placeholderTextColor: 'trueGray.700',
              bg: 'coolGray.100',
              _hover: {
                bg: 'coolGray.200',
              },
              _focus: {
                bg: 'coolGray.200:alpha.70',
              },
            }}
          />
        </Box>
        <Heading
          mt="4"
          alignSelf="center"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Your feedback with {rating} stars
        </Heading>

        <VStack space={30} mt="10">
          <TouchableOpacity>
            <Button onPress={() => handleSend()} mt="1" colorScheme="indigo">
              Send Feedback
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = {
  starsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 25,
    marginBottom: 30,
    marginTop: 30,
  },
};

export default FeedbackForm;
