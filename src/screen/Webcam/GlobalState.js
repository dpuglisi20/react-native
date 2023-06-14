import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalCameras = props => {
  const [CamList, setCamList] = useState([]);
  
  //Adesso è statico, se si vuole rendere dinamico bisogna capire come assegnare id in modo casuale 
  const Cameras = [
    {id: 1, name: 'Camera 1'},
    {id: 2, name: 'Camera 2'},
    {id: 3, name: 'Camera 3'},
  ];

  //actions

  const firstRender = () => {
    setCamList(Cameras);
    //console.log('camera = ' ,Cameras);
  };

  const addCam = cam => {
    setCamList([...CamList, cam]);

    console.log(CamList);
  };

  const removeCam = id => {
    const newCamList = CamList.filter(cam => cam.id !== id);
    setCamList(newCamList);
  };

  const updateCam = cam => {
    const newCamList = CamList.map(prevCam =>
        cam.id === prevCam.id ? cam : prevCam,
    );
    //console.log(newTaskList);
    setCamList(newCamList);
  };

  const contextValue = {
    CamList,
    firstRender,
    addCam,
    removeCam,
    updateCam,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};
