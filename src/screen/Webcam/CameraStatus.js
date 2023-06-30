import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
  HStack,
  ScrollView,
} from 'native-base';
import {CameraModal} from '../../components';
import {GlobalContext} from './GlobalState';
import CameraCard from './CameraCard';
import CamImg from '../../../assets/cam.svg';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialState = {
  id: null,
  name: '',
  image: 'Cam.jpg',
  category: '',
  icon:'video',
};

//-- QUESTA VARIABILE MI SERVE PER AGGIUNGERE LE ALTRE CAM --//
//-- PARTE DA 4 PERCHE' NE HO MESSE 4 DI DEFAULT --//
var i = 5;

const CameraStatus = () => {
  const navigation = useNavigation();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cam, setCam] = useState(initialState);
  const [isUpdating, setIsUpdating] = useState(false);
  const [idData, setIdData] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('1');
  const {addCam, updateCam, CamList, firstRender} = useContext(GlobalContext);

  useEffect(() => {
    handleFirstRender();
  }, []);

  const handleFirstRender = () => {
    firstRender();
  };

  /* const onGoBackPressed = () => {
    navigation.navigate('Menu');
  }; */

  const handleOpenModal = () => {
    setIsVisibleModal(true);
  };

  const handleCam = inputValue => {
    const CamId = cam.id ? cam.id : i;
    setCam({id: CamId, name: inputValue, icon:initialState.icon});

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

  const handleCategorySelect = categoryId => {
    console.log(categoryId);
    setSelectedCategory(categoryId);
  };

  const getCamByCategory = () => {
    const CamByCategory = {
      1: [CamList[0], CamList[1], CamList[5]],
      2: [CamList[2]],
      3: [CamList[3]],
      4: [CamList[4]],
    };
    return CamByCategory[selectedCategory] || [];
  };

  const categories = [
    {id: 1, name: 'Bedroom', icon: 'bed'},
    {id: 2, name: 'Living room', icon: 'sofa-single'},
    {id: 3, name: 'Bath room', icon: 'bathtub'},
    {id: 4, name: 'Kitchen', icon: 'food'},
  ];

  async function handleCameraPress(item) {
    for (let i = 1; i <= CamList.length; i++) {
      if (item.id == i) {
        setIdData(i);
        navigation.navigate('CameraData', {idData: item.id, item: item});
        //console.log('CameraData: ', item.id, ' -- item: ', item);
      }
    }
  }

  const renderCategory = ({item}) => {
    return (
      <VStack space={'lg'} mt="1" style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => handleCategorySelect(item.id)}>
          <Icon
            alignSelf="flex-start"
            paddingVertical={15}
            paddingHorizontal={20}
            name={item.icon}
            size={25}
            color={'#4287f5'}
          />
          <Text style={styles.deviceName}>{item.name}</Text>
        </TouchableOpacity>
      </VStack>
    );
  };

  return (
     <ScrollView>
    <Center w="100%">
      <Box py="1" w="90%" maxW="400">
        <VStack space={'lg'} mt="5">
          <HStack>
            <Heading
              size="xl"
              fontWeight="600"
              //marginRight={20}
              marginTop={-32}
              marginLeft={2}
              fontFamily={'Roboto-BoldItalic'}
              alignSelf={'center'}
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}>
              WEBCAM STATES
            </Heading>

            <CamImg
              width={200}
              height={200}
              style={{marginLeft: -10, marginTop: -50}}
            />
          </HStack>

          <FlatGrid
            marginTop={-80}
            itemDimension={120}
            data={categories}
            renderItem={renderCategory}
          />
          <HStack style={{justifyContent: 'space-around'}}>
            <Heading
              _dark={{
                color: 'warmGray.400',
              }}
              fontFamily={'Roboto-MediumItalic'}
              color="coolGray.600"
              fontWeight="500"
              alignSelf={'center'}
              // marginTop={-5}
              //marginBottom={-2}
              size="md">
              Quick view
            </Heading>
            <TouchableOpacity
              onPress={() => handleOpenModal()}
              style={{
                backgroundColor: '#AD40AF',
                padding: 5,
                width: '20%',
                borderRadius: 10,

                //flexDirection: 'row',
                justifyContent: 'center',
                //marginBottom: -20,
              }}>
              <Icon
                name={'plus'}
                size={40}
                color="white"
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </HStack>
          <FlatGrid
            itemDimension={170}
            data={CamList}
            devices={getCamByCategory()}
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
          {/* <FlatList
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
          /> */}
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
    </ScrollView>
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

  deviceName: {
    fontFamily: 'Roboto-BoldItalic',

    justifyContent: 'center',

    alignSelf: 'center',
    //paddingHorizontal: 10,
    fontSize: 16,
  },

  buttonRow: {
    marginBottom: 50,
    marginTop: 0,
  },
  buttonWrapper: {
    flexDirection: 'row',
    height: 55,
    width: '100%', // Larghezza del bottone (48% per lasciare spazio tra i bottoni)
    marginBottom: -50, // Spazio tra le righe
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});

export default CameraStatus;
