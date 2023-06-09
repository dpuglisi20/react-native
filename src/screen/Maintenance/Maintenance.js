import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TaskList } from '../../containers';
import { HighQualitySharp } from '@mui/icons-material';
//import { Divider, StatusBar } from 'native-base'


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* 
IMPORTANTE FINIRE DI CAPIRE COME FUNZIONA QUESTO! CI SONO QUASI
REP: https://github.com/Monisankarnath/RN-TodoListApp-Nativebase/commit/d245a22d4ee48d7dfb09bb64779d9a9e9597b15c#diff-9b5b5955d0e684e7904f3fc143e07aaa11b7e7c3b36d10985c4aff2554940cbfR10
https://www.youtube.com/watch?v=mDg7SDWjx1U */


const Maintenance = () => {
  
  return (
    <SafeAreaView>
      <TaskList />
    </SafeAreaView>
  )
};

export default Maintenance

const styles = StyleSheet.create({

    container:{
        flex: 1,
      },  
});

