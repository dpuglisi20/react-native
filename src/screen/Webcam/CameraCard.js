import React, {useContext, useState} from 'react';
import {GlobalContext} from './GlobalState';
import {
  Text,
  StyleSheet,
} from 'react-native';

import {
  HStack,
  Pressable,
  useColorMode,
} from 'native-base';

const initialState = {
  id: null,
  name: '',
};

const CameraDevices = props => {
  const {updateCam, removeCam} = useContext(GlobalContext);

  const {colorMode} = useColorMode();
  const [color, setColor] = useState('red');
  const bgColor = colorMode === 'dark' ? 'primary.800' : 'primary.200';

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const {item, handleCameraPress} = props;

//PER ORA NON E' UTILIZZATO
  const handleDeleteCam = id => {
    removeCam(id);
    setIsVisibleModal(false);
  };

  return (
    <Pressable onPress={() => handleCameraPress(item)}>
      {/* {console.log('item: -> ', item)} */}
      <HStack
        flexWrap={'wrap'}
        py={5}
        rounded="xl"
        px={5}
        bg={bgColor}
        mb={4}
        justifyContent="space-between"
        alignItems="center">
        <HStack space={2} alignItems="center" maxW={'100%'}>
        <Text >{item.name}</Text> 
        </HStack>

        {/* TOGLIERE I COMMENTI PER RIMETTERE BOTTONE MA POI GESTIRE LA VISUALIZZAZIONE IN CAMERA STATUS PERCHE' SI SBALLANO GLI INDICI*/}

       {/*  <IconButton
          rounded="full"
          variant="outline"
          size={8}
          justifyContent="center"
          alignItems="center"
          _icon={{size: '4'}}
          icon={<CloseIcon />}
          onPress={() => handleDeleteCam(item.id)}
        /> */}
        
      </HStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  cameraDevice: {
    height: 60,
    borderRadius: 8,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cameraName: {
    fontSize: 18,
    color: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default CameraDevices;
