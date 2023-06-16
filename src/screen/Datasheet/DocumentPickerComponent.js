import {View, Text, Button} from 'react-native';
import React from 'react';

import DocumentPicker from 'react-native-document-picker';
const DocumentPickerComponent = () => {
  const openDocumentPicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Puoi specificare tipi di file specifici, come 'image/jpeg' o 'application/pdf'
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
  return <Button title="Seleziona documento" onPress={openDocumentPicker} />;
};

export default DocumentPickerComponent;
