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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style = {styles.message}>Hello World!</Text>
      </View>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'yellow',
    flex: 1,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 28,
    fontWeight: '400',
  },

});

export default App;
