/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [koeffA, onChangeA] = useState('');
  const [koeffB, onChangeB] = useState('');
  const [koeffC, onChangeC] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.dataView}>
        <View style={styles.rowView}>
          <Text style = {styles.message}>Квадратное уравнение</Text>
        </View>
        <View style={styles.rowView}>
          <View style={styles.textView}>
            <Text style={styles.message}>A =</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style ={styles.inputField}
              value={koeffA}
              onChangeText={onChangeA}
              placeholder="Введите А"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.rowView}>
        <View style={styles.textView}>
            <Text style={styles.message}>B =</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style ={styles.inputField}
              value={koeffB}
              onChangeText={onChangeB}
              placeholder="Введите B"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.rowView}>
        <View style={styles.textView}>
            <Text style={styles.message}>C =</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style ={styles.inputField}
              value={koeffC}
              onChangeText={onChangeC}
              placeholder="Введите C"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.solveButtonView}>
            <Text style = {[styles.message,{color: 'white'}]}>Решить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  dataView: {
    flex: 9,
  },
  rowView: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    fontSize: 16,
    fontWeight: '200',
    borderWidth: 1,
    width: '80%',
  },
  solveButtonView: {
    width: '60%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: '400',
  },

});

export default App;
