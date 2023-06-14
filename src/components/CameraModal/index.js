import React, {useState, useEffect} from 'react';
import {Button, FormControl, Input, Modal} from 'native-base';


const CameraModal = props => {

    const {cam, handleCam, handleAddCamera} = props;
    const [buttonDisable, setButtonDisable] = useState(false);
  
    const [color, setColor] = useState('red');

    useEffect(() => {
  
        if (cam.name.length > 0) {
          setButtonDisable(true);
          setColor('indigo')
        } else {
          setColor('red')
          setButtonDisable(false);
        }
      }, [cam.name]);
  
    return (

        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Add one Camera</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input value={cam.name} onChangeText={handleCam} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
          <Button colorScheme={color} disabled={!buttonDisable}  flex={1} onPress={handleAddCamera}>
              Add Cam
            </Button>
          </Modal.Footer>
        </Modal.Content>

 );
};
export default CameraModal;