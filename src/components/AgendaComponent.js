import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import ModalEvent from './ModalEvent';



function AgendaComponent(props) {
    const {selectedDate, inputText} = props;

    const onGoBackPressed = () => {
        navigation.navigate('Menu');
      };

      
  return (
    <SafeAreaView style={styles.container}>
       
      <Agenda
       
        items={{
          '2023-06-01': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
          '2023-06-02': [{name: 'Writing'}],
          '2023-06-05': [{name: 'Coding'}],
          //[selectedDate]: [{name: 'Coding'}]
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
           
          </TouchableOpacity>
        )}
      />
        <ModalEvent selectedDate={selectedDate}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});

export default AgendaComponent;