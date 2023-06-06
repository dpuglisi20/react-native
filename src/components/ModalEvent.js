import React from "react";
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";


const ModalEvent = (props) => {
    const {selectedDate} = props;
   
    const [showModal, setShowModal] = useState(false);
    const [nameEvent, setNameEvent] = useState("");
    
    const handleInputEvent = (event) => {
        setNameEvent(event)
        console.log('name:',event);

    };

    const onAddPressed = () => {
       //USECONTEXT PER PASSARE I DATI ALLA PAGINA PADRE
       
      };

    return <>
    <Button shadow={2} onPress={() => setShowModal(true)}>
       
      Aggiungi evento
    </Button>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>nuovo evento </Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Aggiungi evento</FormControl.Label>
            <Input onChangeText={handleInputEvent}/>
          </FormControl>
         
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
            setShowModal(false);
          }}>
              Annulla
            </Button>
            <Button onPress={(onAddPressed) => {
            setShowModal(false);
          }}>
              Aggiungi
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>;
  };
  
  export default ModalEvent;