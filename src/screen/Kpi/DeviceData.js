import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

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

import {Center, Heading, VStack, Button, Box} from 'native-base';

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
      <Box safeArea p="2" py="40" w="90%" maxW="300">
        <Heading
          size="2xl"
          alignSelf={'center'}
          fontWeight="600"
          color="coolGray.800"
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
            width={300}
            height={200}
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            bezier
            style={styles.chart}
          />
        }
        <TouchableOpacity>
          <Button
            onPress={() => handleCalculateKPI()}
            mt="5"
            colorScheme="indigo">
            Calculate
          </Button>
        </TouchableOpacity>
        <Heading
          mt="4"
          alignSelf={'center'}
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="md">
          KPI: {kpi}
        </Heading>

        <VStack space={3} mt="10">
          {/* <TouchableOpacity>
            <Button
              onPress={() => navigation.navigate('HomeScreen')}
              mt="5"
              colorScheme="indigo">
              Go Back
            </Button>
          </TouchableOpacity> */}
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
