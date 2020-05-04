import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Shoes extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
    SHOES!
  </Text>

<View style={styles.center}>
<Image source = { logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>
</View>   


 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Mens')}>
  <Text style={styles.buttonText}>
     BACK
  </Text>

 </TouchableHighlight>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Women')}>
  <Text style={styles.buttonText}>
     NEXT
  </Text>

 </TouchableHighlight>

 

</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


});


export default Shoes;
