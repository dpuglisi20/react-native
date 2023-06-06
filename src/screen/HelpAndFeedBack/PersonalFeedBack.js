import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import HelpAndFeedback from './HelpAndFeedback';

import {Center, Heading, VStack, Button, Box, TextArea} from 'native-base';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  const handleSend = () => {
    // Qui posso inserire la logica per inviare il feedback
    navigation.navigate('HelpAndFeedBack');
    console.log('Message:', message, '| Stars:', rating);
  };

  const handleRating = value => {
    setRating(value);
  };
  const handleSubmit = () => {
    // Salvare il feedback o inviarlo al server
    //console.log(FeedbackForm);
    console.warn('Thanks for your feedback');
    navigation.navigate('HelpAndFeedBack');
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
          _dark={{
            bg: 'coolGray.800',
            _hover: {
              bg: 'coolGray.900',
            },
            _focus: {
              bg: 'coolGray.900:alpha.70',
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
  container: {
    flex: 1,
    padding: 20,
    margin: 15,
  },

  container2: {
    flex: 2,
    padding: 20,
    margin: 15,
    top: 60,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputMessage: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 25,
    marginBottom: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
    alignSelf: 'center',
  },

  ratingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default FeedbackForm;
