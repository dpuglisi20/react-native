import React, {useContext, useState} from 'react';
import {
  AddIcon,
  FlatList,
  IconButton,
  Modal,
  useColorMode,
  VStack,
  Center,
  Heading,
  FormControl,
  Input,
  Button,
  Box,
} from 'native-base';

import {styles} from './styles';
import {FormModal, TaskCard} from '../../components';
import {GlobalContext} from '../../screen/Maintenance/GlobalState';

const initialState = {id: null, text: '', completed: false};

const TaskList = () => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState(initialState);
  const {colorMode} = useColorMode();
  const [isUpdating, setIsUpdating] = useState(false);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const {addTask, updateTask, removeTask, taskList, isPermitted} =
    useContext(GlobalContext);

  const iconBg = colorMode === 'dark' ? '#E3F2F9' : '#003F5E';

  const handleCloseModal = () => {
    setModal(false);
    setTask(initialState);
  };

  const handleTask = inputValue => {
    const taskId = task.id ? task.id : Date.now();
    setTask({id: taskId, text: inputValue, completed: false});
  };
  const handleAddTask = () => {
    isUpdating ? updateTask(task) : addTask(task);
    handleCloseModal();
    //console.log(task);
    setIsUpdating(false);
  };
  const handleCompletedItem = item => {
    const newStatus = !item.completed;
    //const taskId = task.id;
    const updatedItem = {...item, completed: newStatus};
    updateTask(updatedItem);
    if (newStatus) {
      setIsVisibleModal(true);
      //handleDeleteTask(item.id)
    }
    //handleDeleteTask(taskId);
    
  };
  const handleTaskCardPressed = item => {
    setIsUpdating(true);
    setTask(item);

    setModal(true);
  };


  return (
    <Center w="100%">
      <Box safeArea p="2" py="30" w="90%" maxW="300">
        <Heading
          size="2xl"
          fontWeight="600"
          color="coolGray.800"
          alignSelf="center"
          _dark={{
            color: 'warmGray.50',
          }}>
          Daily Task
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="lg">
          To do list:
        </Heading>
        <VStack space={3} mt="5">
          <IconButton
            rounded="full"
            size="md"
            bg={iconBg}
            variant="solid"
            icon={<AddIcon />}
            onPress={() => setModal(true)}
          />

          {/*  DOVREBBE SCORRERE MA A ME NON LO FA */}
          <FlatList
            data={taskList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TaskCard
                id={item.id}
                item={item}
                setTask={setTask}
                setModal={setModal}
                handleCompletedItem={handleCompletedItem}
                handleTaskCardPressed={handleTaskCardPressed}
               // handleDeleteTask={handleDeleteTask}
                handleCloseModal={handleCloseModal}
              />
            )}
          />

          <Modal isOpen={modal} onClose={handleCloseModal} size="lg">
            <FormModal
              task={task}
              handleTask={handleTask}
              handleAddTask={handleAddTask}
            />
          </Modal>
        </VStack>
      </Box>
    </Center>
  );
};

export default TaskList;
