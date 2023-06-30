import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Center, VStack, Button, Text, Box, ScrollView} from 'native-base';
import {LogBox} from 'react-native';

const CategorySelectorCam = ({ categories, onSelectCategory }) => {

  return (
<VStack space={3} mt="10" style={styles.buttonRow}>
          {categories.map(category => (
            <TouchableOpacity
            style={styles.buttonWrapper}
            key={category.id}
            title={category.name}
            onPress={() => onSelectCategory(category.id)}>     
              <Text style={styles.pageName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </VStack>
  );
};
const styles = StyleSheet.create({

  pageName: {
    fontFamily: 'Roboto-MediumItalic',
    //fontStyle: 'italic',
    //paddingHorizontal: 10,
    fontSize: 16,
    //fontWeight: 'bold',
    //marginTop: 13,
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  buttonWrapper: {
    height: 20,
    width: '25%', // Larghezza del bottone (48% per lasciare spazio tra i bottoni)
 
  },
});
export default CategorySelectorCam;
