import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
import VideoPlayer from 'react-native-video-player'
import { FlatList, ScrollView } from 'native-base';


const CameraDevices = () => {

    data=[{
        id: 1,
        name: 'https://youtu.be/vDCOgKis4eI',
        name_1: 'Camera 1',
        time:'10',
    }
   

    ]
  return (
    <SafeAreaView>
        <FlatList data={data}
        keyExtractor={(item,index)=>'${index}'}
        renderItem={({item,index})=>{
return(
    <ScrollView style={{marginTop:10}}>
 <View style={{alignItems:'center'}}>
    <Text style={styles.title}>{item.name_1}</Text>
 </View>
            <VideoPlayer video={{uri:item.name}}  
            autoplay={false} 
            defaultMuted = {true} 
            videoWidth={1500}
        videoHeight ={1000}
        thumbnail={require('../../../assets/images/Cam.jpg')}
        />
        
    </ScrollView>

)

        }} />
        </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title:{
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

export default CameraDevices;
