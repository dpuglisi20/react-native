import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//-- ALL GRAPHICS TO USE --//
//-- PER ORA IO HO SCELTO LINECHART --//
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {Center, Heading, VStack, Button, Box, Text} from 'native-base';

import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DeviceData = () => {
  //-- DATA TO BE MODIFIED --//
  const [data, setData] = useState([20, 45, 28, 80, 99, 43, 50]);

  //-- INITIAL KPI --//
  const [kpi, setKpi] = useState(0);

  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const handleCalculateKPI = () => {
    const calculatedKPI =
      data.reduce((sum, value) => sum + value, 0) / data.length;
    setKpi(calculatedKPI);
  };

  const onGoBackPressed = () => {
    navigation.navigate('Menu');
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Center w="100%">
      <Box safeArea py="32" w="90%" maxW="400">
        <Heading
           size="2xl"
           fontWeight="light"
           fontFamily={'Roboto-BoldItalic'}
           alignSelf={'center'}
          _dark={{
            color: 'warmGray.50',
          }}>
          DEVICE DATA
        </Heading>

        {/* IMPLEMENT GRAPHIC */}
        {
          <LineChart
            data={{
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  data: data,
                },
              ],
            }}
            width={350}
            height={220}
            yAxisSuffix=""
            chartConfig={{
              backgroundGradientFrom: '#4287f5',
              backgroundGradientTo: '#0b5bda',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            bezier
            style={styles.chart}
          />
        }
        <Heading
          mt="4"
          alignSelf={'center'}
          _dark={{
            color: 'warmGray.200',
          }}
        
            fontWeight="light"
            fontFamily={'Roboto-MediumItalic'}
         
          size="md">
          KPI: {kpi}
        </Heading>
        <VStack mt="7">
          <TouchableOpacity
            onPress={() => handleCalculateKPI()}
            style={{
              backgroundColor: '#AD40AF',
              padding: 12,
              alignSelf: 'center',
              width: '80%',
              height: '30%',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              //marginBottom: -200,
              //marginTop: -15,
            }}>
            <Icon
              name={'key'}
              paddingVertical={1}
              size={17}
              color={'white'}
              style={{
                width: '12%',
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Roboto-MediumItalic',
              }}>
              Calculate
            </Text>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 20,
    borderRadius: 8,
  },
});

export default DeviceData;
