import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <TouchableOpacity style={[styles.button]}>
    <Pressable 
      onPress={onPress}
 >
        <View style={styles.row}>
       
      
        </View>
        <Text 
            style={[
                styles.text, 
                styles['text_${type}'],
            ]}>
            {text}
        </Text>
    </Pressable>
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
    width: '50%',

    padding: 20,
    marginVertical: 10,

    alignItems: 'center',
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  container_PRIMARY: {
    backgroundColor: 'red',
    
  },

  text: {
    fontWeight: 'bold',
    color: 'black',
  },

  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
   
    backgroundColor: 'oldlace',

    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',

    width: '50%',

    padding: 20,
    marginVertical: 10,

  
    borderRadius: 50,
  },

});

export default CustomButton;
