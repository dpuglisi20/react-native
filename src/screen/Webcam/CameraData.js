import React, {useContext, useState, useEffect, useCallback} from 'react';
import {GlobalContext} from './GlobalState';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {FlatList, ScrollView} from 'native-base';

const initialState = {
  id: null,
  name: '',
};

let data = [
  {
    id: 1,
    name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 2,
    name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 3,
    name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
];

const CameraData = ({route}) => {
  const [data, setData] = useState({id: null, name: ''});
  const {idData, item} = route.params;
  //const {item} = props;
  const {updateCam, removeCam} = useContext(GlobalContext);
  console.log('item ', item);
  //console.log('id data ', idData);
  // console.log('itemid ',item.id);
  console.log('idData 1:', idData);


  // DA FINIRE QUESTO! DOVREMMO RICHIAMARE QUESTO METODO DENTRO UNA FUNZIONE MA NON SAPPIAMO DOVE CHIAMARLA
  //const
  // setData({id: idData, name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'})

  const sceltaId = item => {
    switch (item.id) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <ScrollView style={{marginTop: 10}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>Camera {item.id}</Text>
              </View>
              <VideoPlayer
                video={{uri: item.name}}
                autoplay={false}
                defaultMuted={true}
                videoWidth={1500}
                videoHeight={1000}
                thumbnail={require('../../../assets/images/Cam.jpg')}
              />
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
});

export default CameraData;
