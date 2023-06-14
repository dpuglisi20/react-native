import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalEvent = props => {
  
    const [eventList, setEventList] = useState([]);
  //actions
  const addEvent = event => {
    setEventList([...eventList, event]);

    //console.log(eventList);
  };

  const removeEvent = id => {
    const newEventList = eventList.filter(event => event.id !== id);
    setTaskList(newEventList);
  };

  const updateEvent = event => {
    const newEventList = eventList.map(prevEvent =>
        event.id === prevEvent.id ? event : prevEvent,
    );
    //console.log(newEventList);
    setTaskList(newEventList);
  };

  const contextValue = {
    eventList,
    addEvent,
    removeEvent,
    updateEvent,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
