import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Box, TextArea, HStack} from 'native-base';

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
              fontWeight="light"
              fontFamily={'Roboto-BoldItalic'}
              //color="coolGray.800"
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
        <HStack>
        <Heading
              mt="4"
              alignSelf={'center'} 
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'BacasimeAntique-Regular'}
              color="coolGray.600"
              fontWeight="500"
              size="lg">
              Your feedback with 
            </Heading>
            <Heading
             justifyContent={'center'}
             marginTop={4}
             marginLeft={3}
             alignSelf={'center'} 
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'Roboto-BoldItalic'}
              color="coolGray.600"
              fontWeight="500"
              size="lg">
              {rating} 
            </Heading>
            <Heading
              mt="4"
              alignSelf={'center'} 
              marginLeft={3}
              _dark={{
                color: 'warmGray.200',
              }}
              fontFamily={'BacasimeAntique-Regular'}
              color="coolGray.600"
              fontWeight="500"
              size="lg">
             stars
            </Heading>
            </HStack>

        <VStack space={30} mt="10">
       
            <TouchableOpacity
           onPress={() => handleSend()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 15,
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: -20,
              }}>
                <Icon
              name="send"
              color={'white'}
              size={20}
              style={{
                width: '12%',
              }}
            />
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                  Send Feedback
              </Text>
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
