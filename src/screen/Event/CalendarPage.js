import React, {useContext, useEffect, useState} from 'react';

import {
  View,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  VStack,
  Center,
  Heading,
  Box,
} from 'react-native';

import {Calendar} from 'react-native-calendars';
import PushNotification from 'react-native-push-notification';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import AgendaComponent from '../../components/AgendaComponent';
import { GlobalContext } from './GlobalState';
import { Modal } from 'native-base';
import ModalEvent from '../../components/ModalEvent';

const initialState = { id: null , date: '', name: ''};


const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState('2023-06-10');
  const [selectedDay, setSelectedDay] = useState('');
  const [savedEvent, setSavedEvent] = useState([]);
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState(initialState);
  const [isUpdating, setIsUpdating] = useState(false);

  const {addEvent, updateEvent, eventList} = useContext(GlobalContext);


  const handleCloseModal = () => {
    setModal(false);
    setEvent(initialState);
    console.log('ciao')
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleEvent = inputValue => {
    const eventId = event.id ? event.id : Date.now();
    setEvent({id: eventId, date: Date().getDate(), name: inputValue});
  };

  const handleAddEvent = () => {
    isUpdating ? updateEvent(event) : addEvent(event);
    handleCloseModal();
    setIsUpdating(false);
  };
  const handleDatePress = date => {
    console.log(date);
    setSelectedDate(date.dateString);
    setSelectedDay(date.day);
  };

  const handleEventCardPressed = item => {
    setIsUpdating(true);
    setEvent(item);
    //setAdd(false);

    setModal(true);
   
  };

  const handleEventSave = () => {
    if (selectedDate) {
      // Qui puoi implementare la logica per salvare gli eventi associati alla data selezionata
      Alert.alert(
        'Evento Salvato',
        `Evento salvato per il giorno ${selectedDate}`,
      );
      setSavedEvent(selectedDate);
    } else {
      Alert.alert('Errore', "Seleziona una data per salvare l'evento");
    }
  };

  const handleSetReminder = () => {
    if (selectedDate) {
      // Qui puoi implementare la logica per impostare una notifica come promemoria per l'evento
      const eventDate = new Date(selectedDate);
      eventDate.setDate(eventDate.getDate() - 2); // Imposta la notifica 2 giorni prima dell'evento

      PushNotification.localNotificationSchedule({
        message: `Hai un evento imminente il giorno ${selectedDate}`,
        date: eventDate,
      });

      Alert.alert(
        'Promemoria Impostato',
        `Promemoria impostato per il giorno ${selectedDate}`,
      );
    } else {
      Alert.alert('Errore', 'Seleziona una data per impostare un promemoria');
    }
  };

  // ***********************************************************

  ///DA RISOLVERE QUESTO PROBLEMA
  // LINK VIDEO TUTORIAL: https://youtu.be/FfJ1j-uCnd4
  //TENENDO COMMENTATO VA MA NON FUNZIONA QUELLA COSA, DEVO CAPIRE COME FARLA FUNZIONARE!!

  //GUARDARE QUESTO LINK PER ANDARE AVANTI, CERCARE DI CAPIRE PERCHE' NON FUNZIONA MARKED SELECTED E ANDARE AVANTI
  //https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/

  // ***********************************************************

  /* useEffect(() => {
    requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []); */

  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
  };

  async function onDisplayNotification() {
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Scheduled event',
      body: 'Event confirmed for day ${selectedDate}', //capire come mostrare la variabile selectedDate
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const mark = {
    [selectedDate]: {selected: true},
    '2023-06-15': {marked: true},
    '2023-06-19': {marked: true},
    [savedEvent]: {marked: true},
  };

  return (
    <>
      <AgendaComponent
              selectedDate={selectedDate} />
 <FlatList
            data={eventList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
           /* renderItem={({item}) => (
               <AgendaComponent
              selectedDate={selectedDate}
                id={item.id}
                item={item}
                setEvent={setEvent}
                setModal={setModal}
                handleEventCardPressed={handleEventCardPressed}
                handleCloseModal={handleCloseModal}
              /> 
            )}*/
          />


{/* 
    <View style={styles.container}>
      <Text style={styles.heading}>Calendario</Text>

      <View>
        <Button
          title="Display Notification"
          onPress={() => onDisplayNotification()}
        />
      </View>

      <Calendar onDayPress={handleDatePress} markedDates={mark} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEventSave}>
          <Text style={styles.buttonText}>Salva Evento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSetReminder}>
          <Text style={styles.buttonText}>Imposta Promemoria</Text>
        </TouchableOpacity>
      </View>
    </View> */}


<Modal isOpen={modal} onClose={handleCloseModal} size="lg">
            <ModalEvent
              event={event}
              selectedDate={selectedDate}
              handleEvent={handleEvent}
              handleAddEvent={handleAddEvent}
            />
          </Modal>
</>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#4287f5',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CalendarPage;
