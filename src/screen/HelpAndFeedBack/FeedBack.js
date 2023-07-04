import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Center, Heading, VStack, Button, Box} from 'native-base';

const Feedback = () => {
  const [feedback, setFeedback] = useState({});

  const navigation = useNavigation();
  const handleRating = (item, value) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [item]: value,
    }));
  };

  //-- GO ON PERSONAL FEEDBACK --//
  const onPersonalFeedBackPressed = () => {
    navigation.navigate('PersonalFeedBack');
  };

  const handleSend = () => {
    navigation.navigate('Menu');
    console.log(feedback);
  };

  //-- HERE YOU CAN CHANGE ITEMS.NAME --//
  const items = [
    {id: 1, name: 'Voce 1'},
    {id: 2, name: 'Voce 2'},
    {id: 3, name: 'Voce 3'},
    {id: 4, name: 'Voce 4'},
    {id: 5, name: 'Voce 5'},
  ];

  return (
    <>
      <Center w="100%">
        <Box safeArea p="2" py="12">
        <Heading
              size="2xl"
              fontWeight="light"
              fontFamily={'Roboto-BoldItalic'}
              //color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
               FEEDBACK
            </Heading>
        </Box>
      </Center>
      <View style={styles.container}>
        {items.map(item => (
          <VStack mt="-2" key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map(value => (
                <TouchableOpacity
                  key={value}
                  onPress={() => handleRating(item.id, value)}>
                  <Icon
                    name={value <= feedback[item.id] ? 'star' : 'star-o'}
                    size={30}
                    color="#FFD700"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </VStack>
        ))}
      </View>

      <View style={styles.container2}>
        <VStack space={3} mt="-3">
         
          <TouchableOpacity
             onPress={() => handleSend()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 15,
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                //marginBottom: -50,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                 Send Feedback
              </Text>
            </TouchableOpacity>
          <Heading
            alignSelf={'center'}   
            marginTop={30} 
            py="5"
            size="2xl"
            fontWeight="700"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Or
          </Heading>
          <TouchableOpacity
            onPress={() => onPersonalFeedBackPressed()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 15,
                width: '100%',
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: -20,
              }}>
                 <FontAwesome name="pencil" color={'white'} size={20}  style={{padding:2,
                width: '12%',
              }}/>
              <Text
                style={{
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: 'Roboto-MediumItalic',
                }}>
                   Write your Feedback
              </Text>
            </TouchableOpacity>
         
        </VStack>
      </View>
    </>
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  starsContainer: {
    flexDirection: 'row',
  },
};

export default Feedback;
