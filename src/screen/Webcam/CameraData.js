import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from './GlobalState';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {FlatList, ScrollView} from 'native-base';

//-- NOT CURRENTLY IN USE --//
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
  const {updateCam, removeCam} = useContext(GlobalContext);
  //console.log('item ', item);
  //console.log('item.id:', idData);

  useEffect(() => {
    setRender(true);
    setCam({
      id: idData,
      name: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    });
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
                 frameQuality={1080}
                  
                  autoplay={true}
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
        <Text>NO CAMERA</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 33,
    //fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
});

export default CameraData;
