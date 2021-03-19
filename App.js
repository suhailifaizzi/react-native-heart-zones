import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const handleCalculate = () => console.log('Handle calculate.')

  return (
    <View style={styles.container}>
      <Image 
        style={styles.bannerContainer} 
        source={require('./assets/banner.jpg')} />
      <Text>Please enter your age and resting heart rate.</Text>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text>Age:</Text>
          <TextInput 
            style={styles.inputFieldContainer} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Resting Heart Rate:</Text>
          <TextInput 
            style={styles.inputFieldContainer} />
        </View>
        <View
          style={styles.buttonContainer}>
          <Button 
            style={styles.button}
            onPress={handleCalculate} 
            title="Calculate"/>
        </View>
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.resultData}>
          <Text>Usable Heart Rate Range:</Text>
          <Text> 54 - 194 bpm</Text>
        </View>
        <View style={styles.resultData}>
          <Text>Z1 (50%): </Text>
          <Text>105 - 137 bpm</Text>
        </View>
        <View style={styles.resultData}>
          <Text>Z2 (60%): </Text>
          <Text>138 - 150 bpm</Text>
        </View>
        <View style={styles.resultData}>
          <Text>Z3 (70%): </Text>
          <Text>151 - 168 bpm</Text>
        </View>
        <View style={styles.resultData}>
          <Text>Z4 (80%): </Text>
          <Text>169 - 175 bpm</Text>
        </View>
        <View style={styles.resultData}>
          <Text>Z5 (90%): </Text>
          <Text>176 - 194 bpm</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  button: {
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000'
  },
  buttonContainer: {
    // backgroundColor: 'gold',
    top: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  inputContainer: {
    top: 20,
    bottom: 20,
    flexDirection: 'row',
    alignContent: 'center',
    // backgroundColor: 'dodgerblue',
  },
  inputFieldContainer: {
    left: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    width: 50,
    textAlign: 'center',
  },
  mainContainer: {
    flexDirection: 'column',
  },
  resultContainer: {
    top: 40,
    width: '90%',
    alignItems: 'center',
  },
  resultData: {
    flexDirection: 'row',
  }
});
