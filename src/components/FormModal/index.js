import React , {useState}from 'react';
import {Button, FormControl, Input, Modal} from 'native-base';

const FormModal = props => {
  const {task, handleTask, handleAddTask, isPermitted} = props;
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    console.log(isPermitted);
    if (task.text === undefined) {
      setErrors({ ...errors,
        name: 'Task is required'
      });
      console.log('task non aggiunto');
      return false;
    } else if (task.text.length < 1) {
      setErrors({ ...errors,
        name: 'Task is too short'
      });
      console.log('task non aggiunto');
      return  false;
    }
    
    console.log('task aggiunto');
  }

  return (
    <Modal.Content>
      <Modal.CloseButton />
      <Modal.Header>Task for Today?</Modal.Header>
      <Modal.Body>
        <FormControl isRequired>
          <Input  value={task.text} onChangeText={handleTask} />
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button flex={1} onPress={handleAddTask}>
          Done
        </Button>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default FormModal;
