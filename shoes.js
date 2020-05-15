import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Shoes extends React.Component {

 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png'

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

<View style={styles.center}>
<Image source={{uri:'https://i7.pngguru.com/preview/996/156/41/nike-free-shoe-air-jordan-sneakers-running-shoes.jpg'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://cdn.imgbin.com/1/23/8/imgbin-oxford-shoe-leather-dress-shoe-men-s-shoes-iwd3ynUTs2tUn3sC9iJ6hsCVW.jpg'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>

<View style={styles.center}>
<Image source={{uri:'https://images.footlocker.com/is/G27627/large_wide/adidas-adilette-shower-slide-boys-grade-school'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5813.png'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>


 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Accessories')}>
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
    alignItems: 'center',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:5,
  }

});


export default Shoes;
