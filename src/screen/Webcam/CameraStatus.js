import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Center, Heading, VStack, Button, Text, Box} from 'native-base';

const CameraStatus = () => {
  const onGoBackPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const [CameraStates, setCameraStates] = useState([
    {id: 1, name: 'Camera 1'},
    {id: 2, name: 'Camera 2'},
    {id: 3, name: 'Camera 3'},
  ]);
  const navigation = useNavigation();

  const handleCameraPress = id => {
    // Esegui l'azione desiderata quando viene premuto una camera
    // In questo esempio, siamo solo reindirizzati a una pagina specifica associata a ciascuno stato
    switch (id) {
      case 1:
        // Reindirizza a una pagina specifica per l'allarme 1
        navigation.navigate('CameraDevices');
        console.log('Redirect to Camera 1');
        break;
      case 2:
        // Reindirizza a una pagina specifica per l'allarme 2
        navigation.navigate('CameraDevices');
        console.log('Redirect to Camera 2');
        break;
      case 3:
        // Reindirizza a una pagina specifica per l'allarme 3
        navigation.navigate('CameraDevices');
        console.log('Redirect to Camera 3');
        break;
      default:
        break;
    }
  };

  return (
    <Center w="100%">
      <Box safeArea py="40" w="90%" maxW="300">
        <VStack space={4} mt="5">
          <Heading
            size="2xl"
            fontWeight="600"
            alignSelf={'center'}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            WEBCAM STATES
          </Heading>
          <VStack space={3} mt="10">
            {CameraStates.map(Webcam => (
              <TouchableOpacity
                key={Webcam.id}
                style={styles.WebcamItem}
                onPress={() => handleCameraPress(Webcam.id)}>
                <Text style={styles.WebcamName}>{Webcam.name}</Text>
              </TouchableOpacity>
            ))}
          </VStack>
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

const styles = StyleSheet.create({
  WebcamItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    backgroundColor: '#fff',
  },

  WebcamName: {
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default CameraStatus;
