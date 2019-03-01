/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, ImageBackground, Button, TextInput, TouchableOpacity, } from 'react-native';
import sfondo from './sfondo.jpg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      nome: '',
      nameValDate: true,
      password: '',
      passValDate: true,
      email: '',
    }
  }

  checkMail = () => {
    if (this.state.email != '') {
      alert('Success')
    } else {
      alert('Please Enter Email');
    }
  }

  validate(text, type) {
    alph = /^[a-zA-Z]+$/
    num = /^[0-9]+$/
    if (type == 'username') {
      if (alph.test(text)) {
        this.setState({ nameValDate: true, })
      }
      else {
        this.setState({ nameValDate: false, })
      }
    }
    else if (type == 'password') {
      if (num.test(text)) {
        this.setState({ passValDate: true, })
      }
      else {
        this.setState({ passValDate: false, })
      }
    }
  }

  render() {
    return (
      <ImageBackground source={sfondo} style={styles.container}>
        <Text style={styles.registrati}>REGISTRATI</Text>
        <Text style={styles.info}>Schermata di registrazione</Text>
        <View style={styles.app}>
          <Text style={styles.info}>LE MIE INFORMAZIONI</Text>
          <TextInput onChangeText={(text) => this.validate(text, 'username')} placeholder={'Nome'} style={[!this.state.nameValDate ? styles.error : null]} />
          <TextInput onChangeText={email => this.setState({ email })} placeholder={'Email'} />
          <TextInput secureTextEntry={true} onChangeText={(text) => this.validate(text, 'password')} placeholder={'Password'} style={[!this.state.passValDate ? styles.error : null]} />
          <View style={styles.scelta}>
            <TouchableOpacity style={styles.uomo}><Text style={styles.testoUomo}>Uomo</Text></TouchableOpacity>
            <TouchableOpacity style={styles.donna}><Text style={styles.testoDonna}>Donna</Text></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.checkMail} style={styles.btn}><Text>Registrati</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    fontSize: 20,
    color: 'white',
  },
  registrati: {
    fontSize: 30,
    color: 'white',
  },
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  scelta: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  uomo: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  donna: {
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  testoUomo: {
    fontSize: 20,
  },
  testoDonna: {
    fontSize: 20,
  }
});
