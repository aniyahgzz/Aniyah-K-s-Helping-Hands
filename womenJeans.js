import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Women extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
  Women's Jeans
  </Text>
  
<View style={styles.center}>
<Image source = { logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>
</View>   

<View style={styles.center}>
<Image source={{uri:'https://i.pinimg.com/736x/ae/b9/94/aeb9942180c9a5b35f71e0108e5d8e41.jpg'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://png.pngitem.com/pimgs/s/7-71904_denim-skinny-blue-jeans-womens-hd-png-download.png'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>

<View style={styles.center}>
<Image source={{uri:'https://toppng.com/uploads/preview/ripped-jeans-png-trendy-ripped-jeans-for-wome-11563008442nexteelelb.png'}} 
style={{height:110, width: 110, margin: 5,}}/>

<Image source={{uri:'https://www.kindpng.com/picc/m/242-2423761_womens-jeans-png-pocket-transparent-png.png'}} 
style={{height:110, width: 110, margin: 5,}}/>
</View>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Shoes')}>
  <Text style={styles.buttonText}>
     BACK
  </Text>

 </TouchableHighlight>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Jackets')}>
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


export default Women;
