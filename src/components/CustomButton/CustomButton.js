import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        //styles['container_${type}']  //NON CAPISCO PERCHE' NON VADA
        styles['container_PRIMARY'],
        styles['text'],
      ]}>
        <Text 
            style={[
                styles.text, 
                styles['text_${type}'],
            ]}>
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 30,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
