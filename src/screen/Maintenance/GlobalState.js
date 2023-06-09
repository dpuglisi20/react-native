import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = props => {
  const [taskList, setTaskList] = useState([]);
  const [isPermitted, setIsPermitted] = useState();
  //actions
  const addTask = task => {
    setTaskList([...taskList, task]);
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
    addTask,
    removeTask,
    updateTask,
    isPermitted,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
 {props.children}
    </GlobalContext.Provider>
  );
};
