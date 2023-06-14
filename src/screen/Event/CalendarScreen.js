import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Modal, Button } from 'native-base';

const CalendarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState({});

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addEvent = (date) => {
    setModalVisible(true);
    setStartDate(date);
    setEndDate(date);
  };

  const saveEvent = () => {
    const updatedEvents = { ...events };
    const eventDates = getEventDates(startDate, endDate);

    eventDates.forEach((date) => {
      const event = { title, startDate, endDate };

      if (updatedEvents[date]) {
        updatedEvents[date].push(event);
      } else {
        updatedEvents[date] = [event];
      }
    });

    setEvents(updatedEvents);
    setModalVisible(false);
    setTitle('');
    setStartDate('');
    setEndDate('');
  };

  const getEventDates = (start, end) => {
    const eventDates = [];
    let currentDate = new Date(start);
    const stopDate = new Date(end);

    while (currentDate <= stopDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      eventDates.push(dateString);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return eventDates;
  };

  const deleteEvent = (date, index) => {
    const updatedEvents = { ...events };
    updatedEvents[date].splice(index, 1);

    if (updatedEvents[date].length === 0) {
      delete updatedEvents[date];
    }

    setEvents(updatedEvents);
  };

  const renderItem = (item) => {
    return (
      <View>
        {item.map((event, index) => (
          <View key={index}>
            <Text>{event.title}</Text>
            <Text>{event.startDate} - {event.endDate}</Text>
            <Button onPress={() => console.log('Edit event')}>
              <Text>Edit</Text>
            </Button>
            <Button onPress={() => deleteEvent(item.date, index)}>
              <Text>Delete</Text>
            </Button>
          </View>
        ))}
      </View>
    );
  };

  const renderDay = (day, item) => {
    return (
      <View>
        <Text>{day.dateString}</Text>
        {item && renderItem(item)}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.Header>Add Event</Modal.Header>
          <Modal.Body>
            <Text>Title:</Text>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <Text>Start Date:</Text>
            <TextInput
              value={startDate}
              onChangeText={(text) => setStartDate(text)}
            />
            <Text>End Date:</Text>
            <TextInput
              value={endDate}
              onChangeText={(text) => setEndDate(text)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={saveEvent}>
              <Text>Save</Text>
            </Button>
            <Button onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Agenda items={events} renderDay={renderDay} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          backgroundColor: 'blue',
          borderRadius: 8,
          padding: 8,
        }}
        onPress={() => addEvent(new Date().toISOString().split('T')[0])}
      >
        <Text style={{ color: 'white' }}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalendarScreen;
