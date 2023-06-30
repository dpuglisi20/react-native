import React, {useContext, useState} from 'react';
import {GlobalContext} from './GlobalState';
import {Text,TouchableOpacity} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {HStack,VStack, Pressable} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <TouchableOpacity onPress={() => handleCameraPress(item)}>
      <HStack
        flexWrap={'wrap'}
        py={4}
        rounded="xl"
        px={4}
        bg={bgColor}
        mb={4}
        justifyContent="center"
        alignItems="center"
        >
        <HStack space={'2xl'}  maxW={'100%'} style={{justifyContent:'space-around'}}>
        <Icon
            
            name={item.icon}
            size={30}
            color={'grey'}
          />
        {/* <VideoPlayer
                  video={{uri: item.link}}
                  autoplay={false}
                  defaultMuted={true}
                  videoHeight={500}
                  videoWidth={500}
                 
                  thumbnail={require('../../../assets/images/user.jpg')}
                /> */}
          <Text style={{fontFamily:'Roboto-BoldItalic', marginTop:2 ,fontSize:20}}>{item.name}</Text>
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
    </TouchableOpacity>
  );
};

export default CameraDevices;
