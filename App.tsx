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
  const [errorA, onErrorA] = useState(false);
  const [errorB, onErrorB] = useState(false);
  const [errorC, onErrorC] = useState(false);
  const [answer, onChangeAnswer] = useState('');

  function onSolvePress(){
    let a = parseFloat(koeffA);
    let b = parseFloat(koeffB);
    let c = parseFloat(koeffC);
    if (isNaN(a)) {
      onErrorA(true);
    } else {
      onErrorA(false);
    }
    if (isNaN(b)) {
      onErrorB(true);
    }else {
      onErrorB(false);
    }
    if (isNaN(c)) {
      onErrorC(true);
    }else {
      onErrorC(false);
    }
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      onChangeAnswer('');
      return;
    }
    let d = b * b - 4 * a * c;
    let x1, x2;
    if (d > 0)
    {
      x1 = (-b + Math.sqrt(d)) / (2*a);
      x2 = (-b - Math.sqrt(d)) / (2*a);
      onChangeAnswer(`x1 = ${x1}, x2 = ${x2}`);
    } else if (d === 0){
      x1 = (-b) / (2*a);
      onChangeAnswer(`x = ${x1}`);
    } else {
      x1 = x2 = '';
      onChangeAnswer('Нет решений');
    }
  }

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
          <View style={[styles.inputView]}>
            <TextInput
              style ={[styles.inputField, errorA ? styles.errorBorder : styles.normalBorder]}
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
              style ={[styles.inputField, errorB && styles.errorBorder]}
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
              style ={[styles.inputField, errorC ? styles.errorBorder : styles.normalBorder]}
              value={koeffC}
              onChangeText={onChangeC}
              placeholder="Введите C"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.message}>{answer} </Text>
        </View>
        { (errorA || errorB || errorC) &&
          <View style={styles.rowView}>
            <Text style={styles.errorMessage}>Ошибка. Исправьте исходные данные </Text>
          </View>
        }
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.solveButtonView} onPress={onSolvePress}>
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
    borderRadius: 10,
    paddingLeft: 10,
    width: '80%',
  },
  solveButtonView: {
    width: '60%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
    backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorBorder: {
    borderColor: 'red',
  },
  normalBorder: {
    borderColor: 'black',
  },
  errorMessage: {
    color: 'red',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
