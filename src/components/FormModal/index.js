import React, {useState, useEffect} from 'react';
import {Button, FormControl, Input, Modal} from 'native-base';
import { Text } from 'react-native-svg';

const FormModal = props => {
  const {task, handleTask, handleAddTask,add} = props;
  const [buttonDisable, setButtonDisable] = useState(false);

  const [color, setColor] = useState('red');

  useEffect(() => {

    if (task.text.length > 0) {
      setButtonDisable(true);
      setColor('indigo')
    } else {
      setColor('red')
      setButtonDisable(false);
    }
  }, [task.text]);

  return (
    <Modal.Content>
      <Modal.CloseButton />
      {add ?  <Modal.Header>Task for Today?</Modal.Header> :  <Modal.Header>Update Task</Modal.Header>}
     
      <Modal.Body>
        <FormControl>
       
          <Input value={task.text} onChangeText={handleTask} />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button colorScheme={color} disabled={!buttonDisable} flex={1} onPress={handleAddTask}>
        {add ?  'Add Task' :  'Update Task'}
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default FormModal;
