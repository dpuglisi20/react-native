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

import { Drawer } from 'react-native-paper';
import {BarChart, PieChart} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';

const SmartDeviceControl = () => {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get('window').width;

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const deviceData = [
    {
      id: 1,
      name: 'Device 1',
      category: 'Category A',
      status: 'Off',
      power: 0,
      color: '#F44336',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      id: 2,
      name: 'Device 2',
      category: 'Category B',
      status: 'On',
      power: 1,
      color: '#2196F3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      id: 3,
      name: 'Device 3',
      category: 'Category A',
      status: 'Not initialized',
      power: 0,
      color: '#FFEB3B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      id: 4,
      name: 'Device 4',
      category: 'Category C',
      status: 'Not initialized',
      power: 0,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      id: 5,
      name: 'Device 5',
      category: 'Category B',
      status: 'Not initialized',
      power: 0,
      color: '#FF9800',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    filterData(category);
  };

  const filterData = category => {
    const filteredDevices = deviceData.filter(
      device => device.category === category,
    );
    setFilteredData(filteredDevices);
  };

  /* const onGoBackPressed = () => {
    navigation.navigate('Menu');
  }; */

  const handleDevicePress = id => {
    switch (id) {
      case 1:
        navigation.navigate('SmartDevice');
        console.log('Redirect to Device 1');
        break;
      case 2:
        navigation.navigate('SmartDevice2');
        console.log('Redirect to Device 2');
        break;
      case 3:
        //navigation.navigate('SmartDevice3');
        // console.log('Redirect to Device 3');
        break;
      default:
        break;
    }
  };

  const renderFilteredData = () => {
    if (filteredData.length > 0) {
      return (
        <Center w="100%">
          <Box safeArea py="24" w="90%" maxW="300">
            {' '}
            {/* PUT PY = 40 TO MOVE EVERYTHING TO THE CENTER OF THE PAGE */}
            <View style={styles.container}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={itemValue => handleCategoryChange(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Select a category" value="" />
                <Picker.Item label="Category A" value="Category A" />
                <Picker.Item label="Category B" value="Category B" />
                <Picker.Item label="Category C" value="Category C" />
              </Picker>
            </View>
            <VStack space={4} mt="5">
            <Drawer.Section style={styles.bottomDrawerSection}></Drawer.Section>
              <Heading
                size="lg"
                fontWeight="600"
                alignSelf={'center'}
                color="coolGray.800"
                fontFamily={'Roboto-MediumItalic'}
                _dark={{
                  color: 'warmGray.50',
                }}>
                Filter devices for category:
              </Heading>
              
             {/*  <Heading
                size="xl"
                fontWeight="600"
                alignSelf={'center'}
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}>
                "{selectedCategory}"
              </Heading> */}
            </VStack>
           
            {filteredData.map(device => (
              <VStack space={2} mt="4">
                <TouchableOpacity
                  key={device.id}
                  style={styles.deviceItem}
                  onPress={() => handleDevicePress(device.id)}>
                  <Text style={styles.deviceName}>{device.name}</Text>
                  <Text style={styles.deviceStatus}>{device.status}</Text>
                </TouchableOpacity>
              </VStack>
            ))}
            {/* <TouchableOpacity>
              <Button
                onPress={() => navigation.navigate('Menu')}
                mt="10"
                colorScheme="indigo">
                Go Back
              </Button>
            </TouchableOpacity> */}
          </Box>
        </Center>
      );
    } else {
      return (
        <Text style={styles.noDataText}>
          No data to display for this category
        </Text>
      );
    }
  };
  const renderContent = () => {
    if (selectedCategory !== '') {
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
                DEVICE STATES
              </Heading>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={itemValue => handleCategoryChange(itemValue)}
                  style={styles.picker}>
                  <Picker.Item label="Select a category" value="" />
                  <Picker.Item label="Category A" value="Category A" />
                  <Picker.Item label="Category B" value="Category B" />
                  <Picker.Item label="Category C" value="Category C" />
                </Picker>
              </View>
              <View>
               <PieChart
        data={deviceData}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        
        accessor="power"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      /> 
                
                <Text paddingHorizontal={40} fontSize={15} fontWeight={'bold'}>
                  Active devices
                </Text>
              </View>
              <VStack space={4} mt="5">
                <VStack space={3} mt="10">
                  {deviceData.map(device => (
                    <TouchableOpacity
                      key={device.id}
                      style={styles.deviceItem}
                      onPress={() => handleDevicePress(device.id)}>
                      <Text style={styles.deviceName}>{device.name}</Text>
                      <Text style={styles.deviceStatus}>{device.status}</Text>
                    </TouchableOpacity>
                  ))}
                </VStack>
                {/* <TouchableOpacity>
                  <Button
                    onPress={() => onGoBackPressed()}
                    mt="10"
                    colorScheme="indigo">
                    Go Back
                  </Button>
                </TouchableOpacity> */}
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
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  deviceName: {
    fontSize: 16,
  },
  deviceStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4287f5',
  },
  picker: {
    fontFamily:"Roboto-Black",
    color: 'black',
  },
  bottomDrawerSection: {
   
    marginTop: -15,
    marginBottom: 20,
  },
});
export default SmartDeviceControl;
