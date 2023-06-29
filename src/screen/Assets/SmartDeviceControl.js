import React, {useState, useEffect} from 'react';

import {FlatGrid} from 'react-native-super-grid';

import {TouchableOpacity, StyleSheet, View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Center, Heading, VStack, Box, ScrollView} from 'native-base';
import {Picker} from '@react-native-picker/picker';

import {Drawer} from 'react-native-paper';
import {BarChart, PieChart} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';

import CategorySelector from '../../components/CategorySelector/CategorySelector';
import DeviceGrid from '../../components/DeviceGrid/DeviceGrid';

const SmartDeviceControl = () => {
  const navigation = useNavigation();

  const screenWidth = Dimensions.get('window').width;

  const [selectedCategory, setSelectedCategory] = useState('1');
  const [filteredData, setFilteredData] = useState([]);
  const [color, setColor] = useState('red');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag == true) {
      setColor('indigo');
      
    } else {
    }
  }, [flag]);

  const deviceData = [
    {
      id: 1,
      name: 'Therm 1',
      category: 'Thermo',
      status: 'Off',
      power: 0,
      color: '#F44336',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'thermometer-full',
      description: 'My Home Therm',
    },
    {
      id: 2,
      name: 'Therm 2',
      category: 'Thermo',
      status: 'On',
      power: 1,
      color: '#2196F3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'thermometer-full',
      description: 'My 2 Home Therm',
    },
    {
      id: 3,
      name: 'Light 1',
      category: 'Category A',
      status: 'Not initialized',
      power: 0,
      color: '#FFEB3B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'lightbulb-o',
      description: 'Wyze Bulb, 1 Lights',
    },
    {
      id: 4,
      name: 'Speaker',
      category: 'Speaker',
      status: 'On',
      power: 1,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'volume-up',
      description: 'Google Nest Audio',
    },
    {
      id: 5,
      name: 'Smart TV',
      category: 'Smart TV',
      status: 'Not initialized',
      power: 0,
      color: '#FF9800',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'tv',
      description: 'Samsung QN900B',
    },
    {
      id: 6,
      name: 'Therm 3',
      category: 'Thermo',
      status: 'On',
      power: 1,
      color: '#b30086',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
      icon: 'thermometer-full',
      description: 'Garden Therm',
    },
  ];

  const filterData = category => {
    const filteredDevices = deviceData.filter(
      device => device.category === category,
    );
    setFilteredData(filteredDevices);
  };

  /* const onGoBackPressed = () => {
    navigation.navigate('Menu');
  }; */

  

  const handleCategorySelect = categoryId => {
    setSelectedCategory(categoryId);
    setFlag(true);
  };

  const getDevicesByCategory = () => {
    
    const devicesByCategory = {
      1: [deviceData[0], deviceData[1],deviceData[5]],
      2: [deviceData[2]],
      3: [deviceData[3]],
      4: [deviceData[4]],
    };
    return devicesByCategory[selectedCategory] || [];
  };

  const categories = [
    {id: 1, name: 'Thermo'},
    {id: 2, name: 'Lights'},
    {id: 3, name: 'Speaker'},
    {id: 4, name: 'Smart TV'},
   
  ];

  return (
    <>
      {/* <ScrollView w={['390', '500']} h="80"> */}
      <Center w="100%">
        <Box safeArea py="30" w="90%" maxW="full">
          {' '}
          <Heading
            size="2xl"
            fontWeight="light"
            fontFamily={'Roboto-BoldItalic'}
            alignSelf={'center'}
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            DEVICE STATES
          </Heading>
          {/*  <View style={styles.container}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={itemValue => handleCategoryChange(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Select a category" value="" />
                <Picker.Item label="Category A" value="Category A" />
                <Picker.Item label="Category B" value="Category B" />
                <Picker.Item label="Category C" value="Category C" />
              </Picker>
            </View> */}
          <View>
            <PieChart
              data={deviceData}
              width={350}
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

            <Text style={{fontFamily: 'Roboto-Black', paddingHorizontal:55, fontSize:14, marginTop: -15}} >
              Armed devices
            </Text>
          </View>
          <View>
            <CategorySelector
              categories={categories}
              onSelectCategory={handleCategorySelect}
            />

            {selectedCategory && (
              <DeviceGrid devices={getDevicesByCategory()} />
            )}

            {console.log(
              'Categoria selezionata: ',
              selectedCategory,
              '-- Stato: ',
              flag,
            )}
          </View>
          {/*  <VStack space={4} mt="5">
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
            </VStack> */}
        </Box>
      </Center>
      {/*  </ScrollView> */}
    </>
  );
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
    fontFamily: 'Roboto-Black',
    color: 'black',
  },
  bottomDrawerSection: {
    marginTop: -15,
    marginBottom: 20,
  },
});

export default SmartDeviceControl;
