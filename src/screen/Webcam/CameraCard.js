import React, {useContext, useState} from 'react';
import {GlobalContext} from './GlobalState';
import {Text} from 'react-native';

import {HStack, Pressable} from 'native-base';

const CameraDevices = props => {
  const {removeCam} = useContext(GlobalContext);

  const bgColor = 'white';

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const {item, handleCameraPress} = props;

  //-- FOR NOW IT IS NOT USED BUT IT COULD BE USED FOR CANCELLATION IN THE FUTURE --//
  const handleDeleteCam = id => {
    removeCam(id);
    setIsVisibleModal(false);
  };

  return (
    <Pressable onPress={() => handleCameraPress(item)}>
      <HStack
        flexWrap={'wrap'}
        py={5}
        rounded="xl"
        px={5}
        bg={bgColor}
        mb={4}
        justifyContent="center"
        alignItems="center">
        <HStack space={2} alignItems="center" maxW={'100%'}>
          <Text>{item.name}</Text>
        </HStack>

        {/* TOGLIERE I COMMENTI PER RIMETTERE BOTTONE ELIMINA CAM MA POI GESTIRE LA VISUALIZZAZIONE 
        IN CAMERASTATUS PERCHE' SI SBALLANO GLI INDICI DURANTE LA CANCELLAZIONE DI UNA CAM*/}

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

export default CameraDevices;
