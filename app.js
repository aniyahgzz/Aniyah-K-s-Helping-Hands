import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/home.js';
import SignIn from './components/signin.js';
import Men from './components/menClothing.js';
import Accessories from './components/accessories.js';
import Shoes from './components/shoes.js';
import Women from './components/womenJeans.js';
import Jackets from './components/jackets.js';
import ClosingPage from './components/closingPage.js';

const RootStack = createStackNavigator(
{
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  Mens: { screen: Men },
  Accessories: { screen: Accessories },
  Shoes: { screen: Shoes },
  Women: { screen: Women },
  Jackets: { screen: Jackets },
  ClosingPage: { screen: ClosingPage },  

},
{
  initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}



