import React from 'react';
import {Button, FormControl, Input, Modal} from 'native-base';

const FormCheckB = props => {
  const {item, handleDeleteTask} = props;
  return (
     
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
          <Button flex={1}  onPress={handleDeleteTask(item.id)}>
          Save
        </Button>
          </Modal.Footer>
        </Modal.Content>
  );
};

export default FormCheckB;
