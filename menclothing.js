import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Mens extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
     Men's Clothing
  </Text>

  <Image source = { logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>

<View style={styles.center}>

<Image source={{uri:'https://p.kindpng.com/picc/s/490-4906049_9010-men-clothing-man-stylish-dress-png-transparent.png'}} 
style={{height:115, width: 115, margin: 5,}}/>

<Image source={{uri:'https://i.dlpng.com/static/png/1491136-t-shirt-suit-stock-photography-clothing-mens-suits-blazer-png-900_500_preview.png'}} 
style={{height:115, width: 115, margin: 5,}}/>

</View>

<View style={styles.center}>
<Image source={{uri:'https://image.spreadshirtmedia.com/image-server/v1/products/T23A2PA3495PT17X0Y30D1002944439FS3675/views/1,width=650,height=650,appearanceId=2.jpg'}} 
style={{height:115, width: 115, margin: 5,}}/>

<Image source={{uri:'https://c7.uihere.com/files/427/516/912/t-shirt-designer-antarctic-men-s-lattice-casual-shirt.jpg'}} 
style={{height:115, width: 115, margin: 5,}}/>
</View>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('SignIn')}>
  <Text style={styles.buttonText}>
     BACK
  </Text>

 </TouchableHighlight>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Accessories')}>
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


export default Mens;
