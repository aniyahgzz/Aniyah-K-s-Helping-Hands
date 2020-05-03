import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Home extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
     WELCOME ! Enjoy Your Shopping !
  </Text>
  
<View style={styles.center}>
<Image source = {logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>
</View>   


 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('SignIn')}>
  <Text style={styles.buttonText}>
     Next
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


export default Home;
