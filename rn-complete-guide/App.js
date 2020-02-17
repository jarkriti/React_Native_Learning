import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (


    //1. PART-1 Basics of flexbox
    //2. stylesheet using stylesheet.create
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  )
  /* flexbox example
      <View
      style={{padding: 50, flexDirection: 'row', width: '100%', height: 300, justifyContent: 'space-around', alignItems:'stretch'}}>
        <View style={{backgroundColor:'red', flex:1,justifyContent:'center',alignItems:'center'}}></View>
        <View style={{backgroundColor:'blue', flex:1,justifyContent:'center',alignItems:'center'}}></View>
        <View style={{backgroundColor:'green', flex:2,justifyContent:'center',alignItems:'center'}}></View>
      </View>
    );
    */
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: { borderColor: "black", borderWidth: 1, padding: 10, width: '80%' }
});
