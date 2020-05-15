import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Jackets extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
 Men's and Women's Jackets
  </Text>

<View style={styles.center}>
<Image source = { logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>
</View>   


<View style={styles.center}>
<Image source={{uri:'https://i.dlpng.com/static/png/6675290_preview.png'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://www.pngarts.com/files/3/Men-Jacket-Download-Transparent-PNG-Image.png'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>

<View style={styles.center}>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmziMctfXsk1MXejaIAoVmoE5X-o7IErgS7rESfUAmr3Mh8sBO&usqp=CAU'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://www.vhv.rs/dpng/d/244-2441694_black-lurk-half-zip-jacket-pocket-hd-png.png'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>


 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Women')}>
  <Text style={styles.buttonText}>
     BACK
  </Text>

 </TouchableHighlight>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('ClosingPage')}>
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

export default Jackets;
