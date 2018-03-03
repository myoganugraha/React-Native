/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  AppRegistry,
  Button,
  Alert,
  View
} from 'react-native';


export default class latihanAsyncStorage extends Component {
    constructor(){
        super()
        this.state = {
            nama:'',
            asal:'',
            txtNama:'',
            txtAsal:''
        }
    }
    saveData(){
      let nama = this.state.txtNama
      let asal = this.state.txtAsal
      this.setState({
        nama: nama,
        asal: asal
      });
      Alert.alert('Salken '+ nama + '!!', 'Kamu asalnya dari ' + asal + ' ya')
    }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Hallo, Kenalan Kuy!</Text>



        <TextInput style={styles.textInput}
        onChangeText={(input_nama) => {this.setState({txtNama:input_nama})}}
        placeholder='Nama'/>

        <TextInput style={styles.textInput}
        onChangeText={(input_asal) => {this.setState({txtAsal:input_asal})}}
        placeholder='Asal Kota' />

        <Button
          onPress={this.saveData.bind(this)}
          title="Simpan"/>

      </View>
    );
  }
}

AppRegistry.registerComponent('Handling', () => latihanAsyncStorage);

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'flex-start',
    padding: 32,
    paddingTop: 64,
    backgroundColor: '#F2FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  textInput: {
    height: 35,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  },

button: {
  backgroundColor: 'transparent'
}

});
