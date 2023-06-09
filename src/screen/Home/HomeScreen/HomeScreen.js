import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const handleButtonPress = (buttonText) => {
    // Qui posso gestire l'azione del pulsante
    console.log('Pulsante premuto:', buttonText);
  };

  const navigation = useNavigation();
  
  //PROFILE 
  const onProfilePressed = () => {
    navigation.navigate('Profile');
  };
 
    //HELP AND FEEDB 
    const onHelpAndFeedPressed = () => {
      navigation.navigate('HelpAndFeedBack');
    };

      //ALARMS
    const onAlarmPressed = () => {
      navigation.navigate('AlarmStatus');
    };

       //EVENT
       const onEventPressed = () => {
        navigation.navigate('CalendarPage');
      };
 
  //ASSETS 
  const onAssetsPressed = () => {
    navigation.navigate('SmartDeviceControl');
  };

    //WEBCAM 
    const onWebcamPressed = () => {
      navigation.navigate('CameraStatus');
    };

  //KPI 
  const onMaintenancePressed = () => {
    navigation.navigate('Maintenance');
  };


  //KPI 
  const onKpiPressed = () => {
    navigation.navigate('DeviceData');
  };

    //LOGOUT
  const onLogoutPressed = () => { 
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.centralButton}
        onPress={onProfilePressed}
      >
        <Text style={styles.buttonText}>PROFILE</Text>
      </TouchableOpacity>

      <View style={styles.row}>
      <TouchableOpacity
          style={styles.button}
          onPress={onAssetsPressed}
        >
         <Text style={styles.buttonText}>ASSETS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onKpiPressed}
        >
          <Text style={styles.buttonText}>KPI</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.row}>
      <TouchableOpacity
          style={styles.button}
          onPress={onAlarmPressed}
        >
          <Text style={styles.buttonText}>ALARM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onEventPressed}
        >
          <Text style={styles.buttonText}>EVENT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity
          style={styles.button}
          onPress={onWebcamPressed}
        >
          <Text style={styles.buttonText}>WEBCAM</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={onMaintenancePressed}
        >
          <Text style={styles.buttonText}>MAINTENANCE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Pulsante 7')}
        >
          <Text style={styles.buttonText}>DATASHEET</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onHelpAndFeedPressed}
        >
          <Text style={styles.buttonText}>HELP AND FEEDBACK</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={onLogoutPressed}
        >
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 9,
  },
  centralButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 6,
  },
  button: {
    flex: 1,
    marginHorizontal: 3,
    height: 90,
    borderRadius: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
