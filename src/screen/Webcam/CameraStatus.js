import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Center,
  Box,
  VStack,
  Heading,
  AddIcon,
  IconButton,
  Modal,
  Button,
  FlatList,
} from 'native-base';
import {CameraModal} from '../../components';
import {GlobalContext} from './GlobalState';
import CameraCard from './CameraCard';

const initialState = {
  id: null,
  name: '',
};

//-- QUESTA VARIABILE MI SERVE PER AGGIUNGERE LE ALTRE CAM --//
    //-- PARTE DA 4 PERCHE' NE HO MESSE 3 DI DEFAULT --//
var i = 4;

const CameraStatus = () => {
  const navigation = useNavigation();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cam, setCam] = useState(initialState);
  const [isUpdating, setIsUpdating] = useState(false);
  const [idData, setIdData] = useState(0);

  const {addCam, updateCam, CamList, firstRender} = useContext(GlobalContext);

  useEffect(() => {
    handleFirstRender();
  }, []);

  const handleFirstRender = () => {
    firstRender();
  };

  const onGoBackPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const handleOpenModal = () => {
    setIsVisibleModal(true);
  };

  const handleCam = inputValue => {
    const CamId = cam.id ? cam.id : i;
    setCam({id: CamId, name: inputValue});

    i++;
  };

  const handleAddCamera = () => {
    addCam(cam);
    handleCloseModal();
    setIsUpdating(false);
  };

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setCam(initialState);
  };

  //-- USEFUL FOR CAM REMOVAL --//
  /* 
  useEffect(() => {
    if (idData != 0)
      //navigation.navigate('CameraData', {idData: idData, item: cam});
      console.log('cam in cameraStatus ', cam)
      
  }, [idData]);
 */

  async function handleCameraPress(item) {

    for (let i = 1; i <= CamList.length; i++) {
      if (item.id == i) {
        setIdData(i);
        navigation.navigate('CameraData', {idData: item.id, item: item});
        //console.log('CameraData: ', item.id, ' -- item: ', item);
      }
    }
  }

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

          <IconButton
            colorScheme="indigo"
            rounded="full"
            size="md"
            variant="solid"
            icon={<AddIcon />}
            onPress={() => handleOpenModal()}
          />

          <FlatList
            data={CamList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CameraCard
                id={item.id}
                item={item}
                setCam={setCam}
                handleCameraPress={handleCameraPress}
                handleCloseModal={handleCloseModal}
              />
            )}
          />
          <TouchableOpacity>
            <Button
              onPress={() => onGoBackPressed()}
              mt="10"
              colorScheme="indigo">
              Go Back
            </Button>
          </TouchableOpacity>
        </VStack>

        <Modal isOpen={isVisibleModal} onClose={handleCloseModal} size="lg">
          <CameraModal
            cam={cam}
            handleCam={handleCam}
            handleAddCamera={handleAddCamera}
          />
        </Modal>
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
