import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
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
  const [cam, setCam] = useState({id: null, name: ''});
  const {idData, item} = route.params;
  const [render, setRender] = useState(false);
  //const {item} = props;
  const {updateCam, removeCam} = useContext(GlobalContext);
  //console.log('item ', item);
  //console.log('item.id:', idData);

  useEffect(() => {
    setRender(true);
    setCam({
      id: idData,
      name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    });

    //console.log('render ', render);
  }, []);

  let newArray = [cam];

  return (
    <SafeAreaView>
      {render ? (
        <FlatList
          data={newArray}
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
      ) : (
        <Text>Nessuna camera</Text>
      )}
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
