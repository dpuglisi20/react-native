import {Text} from 'react-native';
import React, {useContext, useState, useEffect, useCallback} from 'react';
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

import {DocumentPicker} from 'react-native-document-picker';
const initialState = {
  id: null,
  text: '',
  completed: false,
};
const TaskCard = props => {
  const {updateTask, removeTask} = useContext(GlobalContext);
  const {colorMode} = useColorMode();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [task, setTask] = useState(initialState);
  const [textNote, setTextNote] = useState('');
  const [signature, setSignature] = useState('');
  const [color, setColor] = useState('red');
  const bgColor = colorMode === 'dark' ? 'primary.800' : 'primary.200';
  const {item, handleTaskCardPressed} = props;
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (textNote.length > 0 && signature.length > 0) {
      setButtonDisable(true);
      setColor('indigo')
    } else {
      setButtonDisable(false);
    }
  }, [textNote, signature]);

  const handleCompletedItem = item => {
    const newStatus = !item.completed;
    const updatedItem = {
      ...item,
      completed: newStatus,
    };
    //updateTask(updatedItem);
    if (newStatus) {
      setIsVisibleModal(true);
    }
  };

  const handleCloseModalCheck = item => {
    const newStatus = item.completed;
  
    if (newStatus) {
      const updatedItem = {
        ...item,
        completed: false,
      };
   
      //updateTask(updatedItem);
      setIsVisibleModal(true);
      
    } else {
      console.log(item)
    }
    setIsVisibleModal(false);
    setTask(initialState);
  };

  const handleDeleteTask = id => {
   
    removeTask(id);
    setIsVisibleModal(false);
     console.log('Task n.' , id, ' completed: [note]= ', textNote ,'; [signature]= ', signature);
  };

  const handletextNote = event => {
    setTextNote(event);
  };

  const handleSignature = event => {
    setSignature(event);
  };

  const [fileResponse, setFileResponse] = useState([]);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  return (
    <>
      <Pressable onPress={() => handleTaskCardPressed(item)}>
        <HStack
          flexWrap={'wrap'}
          py={5}
          rounded="xl"
          px={5}
          bg={bgColor}
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

      <Modal
        isOpen={isVisibleModal}
        onClose={() => handleCloseModalCheck(item)}
        size="lg">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Are you sure you completed the task?</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Note</FormControl.Label>
              <Input value={textNote} onChangeText={handletextNote} />

              <FormControl.Label>Document</FormControl.Label>
              {fileResponse.map((file, index) => (
                <Text
                  key={index.toString()}
                  style={styles.uri}
                  numberOfLines={1}
                  ellipsizeMode={'middle'}>
                  {file?.uri}
                </Text>
              ))}
              <Button onPress={handleDocumentSelection}>Select</Button>
              <FormControl.Label>Signature</FormControl.Label>
              <Input value={signature} onChangeText={handleSignature} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
            colorScheme={color}
              disabled={!buttonDisable}
              flex={1}
              onPress={() => handleDeleteTask(item.id)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default TaskCard;
