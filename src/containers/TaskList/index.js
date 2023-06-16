import React, {useContext, useEffect, useState} from 'react';
import {
  AddIcon,
  FlatList,
  IconButton,
  Modal,
  VStack,
  Center,
  Heading,
  Box,
} from 'native-base';

import {FormModal, TaskCard} from '../../components';
import {GlobalContext} from '../../screen/Maintenance/GlobalState';

const initialState = {id: null, text: '', completed: false};

const TaskList = () => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState(initialState);
  const [isUpdating, setIsUpdating] = useState(false);
  const [add, setAdd] = useState(true);

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const {addTask, updateTask, taskList, firstRender} =
    useContext(GlobalContext);

  //-- USEFUL METHOD TO INITIALLY RENDER THE 3 DEFAULT TASKS --//
  const handleFirstRender = () => {
    firstRender();
  };

  useEffect(() => {
    handleFirstRender();
  }, [1]);

  const handleCloseModal = () => {
    setModal(false);
    setTask(initialState);
  };

  const handleOpenModal = () => {
    setAdd(true);
    setModal(true);
  };

  const handleTask = inputValue => {
    const taskId = task.id ? task.id : Date.now();
    setTask({id: taskId, text: inputValue, completed: false});
  };

  const handleAddTask = () => {
    isUpdating ? updateTask(task) : addTask(task);
    handleCloseModal();
    setIsUpdating(false);
  };

  //-- FUNCTION THAT STARTS WHEN I CHECK THE CHECKBOX OF THE TASK --//
  const handleCompletedItem = item => {
    const newStatus = !item.completed;
    const updatedItem = {...item, completed: newStatus};
    updateTask(updatedItem);
    if (newStatus) {
      setIsVisibleModal(true);
    }
  };

  //-- FUNCTION TO MANAGE THE PRESSURE ON THE TASK --//
  const handleTaskCardPressed = item => {
    setIsUpdating(true);
    setTask(item);
    setAdd(false);
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
          DAILY TASK
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
            colorScheme="indigo"
            rounded="full"
            size="md"
            variant="solid"
            icon={<AddIcon />}
            onPress={() => handleOpenModal()}
          />
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
                handleCloseModal={handleCloseModal}
              />
            )}
          />
          <Modal isOpen={modal} onClose={handleCloseModal} size="lg">
            <FormModal
              task={task}
              add={add}
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
