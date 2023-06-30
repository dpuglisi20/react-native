import {Text, TouchableOpacity} from 'react-native';
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

import Icons from 'react-native-vector-icons/FontAwesome';

import DocumentPicker from 'react-native-document-picker';

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
  const bgColor = colorMode === 'dark' ? 'primary.800' : 'white';
  const {item, handleTaskCardPressed} = props;
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (textNote.length > 0 && signature.length > 0) {
      setButtonDisable(true);
      setColor('indigo');
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
      console.log(item);
    }
    setIsVisibleModal(false);
    setTask(initialState);
  };

  const handleDeleteTask = id => {
    if (signature == '') {
      removeTask(id);
    } else {
      removeTask(id);
      setIsVisibleModal(false);
      console.log(
        'Task n.',
        id,
        ' completed!! [note]= ',
        textNote,
        '; [signature]= ',
        signature,
      );
    }
  };

  const handletextNote = event => {
    setTextNote(event);
  };

  const handleSignature = event => {
    setSignature(event);
  };

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('File selezionato:', res);
      // Gestisci il file selezionato qui
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Selezione del documento annullata');
      } else {
        console.log('Errore durante la selezione del documento:', err);
      }
    }
  };
  return (
    <>
      <TouchableOpacity onPress={() => handleTaskCardPressed(item)}>
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
            <Text style={{
              fontFamily:'Roboto-BoldItalic',
              fontSize:17,
             color:'gray'
              }} >{item.text}</Text>
          </HStack>
          <IconButton
            rounded="full"
            variant="outline"
            size={8}
            colorScheme={'pink'}
            justifyContent="center"
            alignItems="center"
            _icon={{size: '4'}}
            icon={<CloseIcon />}
            onPress={() => handleDeleteTask(item.id)}
          />
        </HStack>
      </TouchableOpacity>

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
