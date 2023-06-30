import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export const GlobalCameras = props => {
  const [CamList, setCamList] = useState([]);

  //-- THESE FIRST 4 ARE STATIC --//
  const Cameras = [
    {
      id: 1,
      name: 'Camera 1',
      image: 'Cam.jpg',
      link: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Bedroom',
      icon:'video',
    },
    {
      id: 2,
      name: 'Camera 2',
      image: 'Cam.jpg',
      link: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Living room',
      icon:'video',
    },
    {
      id: 3,
      name: 'Camera 3',
      image: 'Cam.jpg',
      link: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Bath room',
      icon:'video',
    },
    {
      id: 4,
      name: 'Camera 4',
      image: 'Cam.jpg',
      link: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      category: 'Kitchen',
      icon:'video',
    },
  ];

  //-- USEFUL METHOD TO INITIALLY RENDER THE 3 DEFAULT CAMERAS --//
  const firstRender = () => {
    setCamList(Cameras);
  };

  const addCam = cam => {
    setCamList([...CamList, cam]);
  };

  const removeCam = id => {
    const newCamList = CamList.filter(cam => cam.id !== id);
    setCamList(newCamList);
  };

  const updateCam = cam => {
    const newCamList = CamList.map(prevCam =>
      cam.id === prevCam.id ? cam : prevCam,
    );
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
