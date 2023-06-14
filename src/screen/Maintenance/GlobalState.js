import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = props => {
  const [taskList, setTaskList] = useState([]);
  
  //Adesso è statico, se si vuole rendere dinamico bisogna capire come assegnare id in modo casuale 
  const data = [
    {completed: false, id: 3636578365601, text: 'prova'},
    {completed: false, id: 1616522360109, text: 'task2'},
    {completed: false, id: 2636578469102, text: 'task3'},
  ];
  //actions

  const firstRender = () => {
    setTaskList(data);
    //console.log('prova = ' ,data);
  };

  const addTask = task => {
    setTaskList([...taskList, task]);

    console.log(taskList);
  };

  const removeTask = id => {
    const newTaskList = taskList.filter(task => task.id !== id);
    setTaskList(newTaskList);
  };

  const updateTask = task => {
    const newTaskList = taskList.map(prevTask =>
      task.id === prevTask.id ? task : prevTask,
    );
    //console.log(newTaskList);
    setTaskList(newTaskList);
  };

  const contextValue = {
    taskList,
    firstRender,
    addTask,
    removeTask,
    updateTask,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
