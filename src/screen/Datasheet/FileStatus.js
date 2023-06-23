import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Center,
  Heading,
  VStack,
  Button,
  Text,
  Box,
  ScrollView,
} from 'native-base';
import {Picker} from '@react-native-picker/picker';

const FileStatus = () => {
  const navigation = useNavigation();

  const [selectedName, setselectedName] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const fileData = [
    {
      id: 1,
      name: 'Device 1 File',
    },
    {
      id: 2,
      name: 'Device 2 File',
    },
    {
      id: 3,
      name: 'Device 3 File',
    },
    {
      id: 4,
      name: 'Device 4 File',
    },
    {
      id: 5,
      name: 'Device 5 File',
    },
  ];

  const handleNameChange = name => {
    setselectedName(name);
    filterFile(name);
  };

  const filterFile = name => {
    const filteredFiles = fileData.filter(
      file => file.name === name,
    );
    setFilteredData(filteredFiles);
  };

  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  };

  const handleFilePress = id => {
    switch (id) {
      case 1:
        navigation.navigate('FileDevice1');
        console.log('Redirect to File Device 1');
        break;
      case 2:
        navigation.navigate('FileDevice2');
        console.log('Redirect to File Device 2');
        break;
      case 3:
        navigation.navigate('NoFile');
        break;
      default:
        break;
    }
  };

  const renderFilteredData = () => {
    if (filteredData.length > 0) {
      return (
        <Center w="100%">
          <Box safeArea py="30" w="90%" maxW="300">
            {' '}
            {/* PUT PY = 40 TO MOVE EVERYTHING TO THE CENTER OF THE PAGE */}
            <View style={styles.container}>
              <Picker
                selectedValue={selectedName}
                onValueChange={itemValue => handleNameChange(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Select a name" value="" />
                <Picker.Item label="Device 1" value="Device 1 File" />
                <Picker.Item label="Device 2" value="Device 2 File" />
                <Picker.Item label="Device 3" value="Device 3 File" />
              </Picker>
            </View>
            <VStack space={4} mt="5">
              <Heading
                size="lg"
                fontWeight="600"
                alignSelf={'center'}
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}>
                Filter file for name:
              </Heading>
              <Heading
                size="xl"
                fontWeight="600"
                alignSelf={'center'}
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}>
                "{selectedName}"
              </Heading>
            </VStack>
            {filteredData.map(file => (
              <VStack space={2} mt="2">
                <TouchableOpacity
                  key={file.id}
                  style={styles.fileItem}
                  onPress={() => handleFilePress(file.id)}>
                  <Text style={styles.fileName}>{file.name}</Text>
                </TouchableOpacity>
              </VStack>
            ))}
            <TouchableOpacity>
              <Button
                onPress={() => onGoBackPressed()}
                mt="10"
                colorScheme="indigo">
                Go Back
              </Button>
            </TouchableOpacity>
          </Box>
        </Center>
      );
    } else {
      return (
        <Text style={styles.noDataText}>
         No data to display for this name
        </Text>
      );
    }
  };
  const renderContent = () => {
    if (selectedName !== '') {
      return <View style={styles.container}>{renderFilteredData()}</View>;
    } else {
      return (
        <ScrollView w={['390', '500']} h="80">
          <Center w="100%">
            <Box safeArea py="30" w="90%" maxW="300">
              {' '}
              {/* PUT PY = 40 TO MOVE EVERYTHING TO THE CENTER OF THE PAGE */}
              <Heading
                size="2xl"
                fontWeight="600"
                alignSelf={'center'}
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}>
                FILE STATES
              </Heading>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedName}
                  onValueChange={itemValue => handleNameChange(itemValue)}
                  style={styles.picker}>
                   <Picker.Item label="Select a name" value="" />
                <Picker.Item label="Device 1" value="Device 1 File" />
                <Picker.Item label="Device 2" value="Device 2 File" />
                <Picker.Item label="Device 3" value="Device 3 File" />
                </Picker>
              </View>
              <VStack space={4} mt="5">
                <VStack space={3} mt="10">
                  {fileData.map(file => (
                    <TouchableOpacity
                      key={file.id}
                      style={styles.fileItem}
                      onPress={() => handleFilePress(file.id)}>
                      <Text style={styles.fileName}>{file.name}</Text>
                    </TouchableOpacity>
                  ))}
                </VStack>
                <TouchableOpacity>
                  <Button
                    onPress={() => onGoBackPressed()}
                    mt="10"
                    colorScheme="indigo">
                    Go Back
                  </Button>
                </TouchableOpacity>
              </VStack>
            </Box>
          </Center>
        </ScrollView>
      );
    }
  };
  return renderContent();
};

const styles = StyleSheet.create({
    fileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  fileName: {
    fontSize: 16,
   paddingHorizontal:90,
  },
});
export default FileStatus;
