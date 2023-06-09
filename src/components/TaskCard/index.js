import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../screen/Maintenance/GlobalState';
import {
  Checkbox,
  CloseIcon,
  HStack,
  IconButton,
  Pressable,
  useColorMode,
  Modal,
  FormControl,
  Input,
  Button,
} from 'native-base';

const initialState = {id: null, text: '', completed: false};

const TaskCard = props => {
  const {addTask, updateTask, removeTask, taskList, isPermitted} =
    useContext(GlobalContext);
  const {colorMode} = useColorMode();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [task, setTask] = useState(initialState);
  const bgColor = colorMode === 'dark' ? 'primary.800' : 'primary.200';
  const {
    item,

    handleTaskCardPressed,
  
    handleCloseModal,
  } = props;

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
  const handleCloseModalCheck = () => {
    setIsVisibleModal(false);
    setTask(initialState);
  };

  const handleDeleteTask = id => {
    console.log(id);
    removeTask(id);
    handleCloseModalCheck();
  };

  return (
    <>
      <Pressable onPress={() => handleTaskCardPressed(item)}>
        <HStack
          flexWrap={'wrap'}
          py={5}
          rounded="xl"
          bg={bgColor}
          px={5}
          mb={4}
          justifyContent="space-between"
          alignItems="center">
          <HStack space={2} alignItems="center" maxW={'80%'}>
            <Checkbox
              isChecked={item.completed}
              onChange={() => handleCompletedItem(item)}
              accessibilityLabel="checkbox"
            />
            <Text>{item.text}</Text>
          </HStack>
          <IconButton
            rounded="full"
            variant="outline"
            size={8}
            justifyContent="center"
            alignItems="center"
            _icon={{size: '4'}}
            icon={<CloseIcon />}
            onPress={() => handleDeleteTask(item.id)}
          />
        </HStack>
      </Pressable>

      <Modal isOpen={isVisibleModal} onClose={handleCloseModalCheck} size="lg">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Are you sure you completed the task?</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Note</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Signature</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button flex={1} onPress={() => handleDeleteTask(item.id)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default TaskCard;
