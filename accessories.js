import React from 'react';
import {StyleSheet, Text, Keyboard, View, Button, Image,  TouchableHighlight, ImageBackground,} from 'react-native';

import logo from './mylogo.png';

class Accessories extends React.Component {

render() {
  return (

<View style={styles.container}>

  <Text style={styles.title}>
    Men's and Women's Accessories 
  </Text>
  
<View style={styles.center}>
<Image source = { logo }
 style={{ height: 100, width: 200, alignItems: 'center', }}/>
</View>   

<View style={styles.center}>
<Image source={{uri:'https://img.favpng.com/13/10/20/bracelet-charms-pendants-gemstone-jewellery-fashion-png-favpng-AiaSRRh0QsT1HsEH1nqAPgZuX.jpg'}} 
style={{height:100, width: 100, margin: 5,}}/>

<Image source={{uri:'https://banner2.cleanpng.com/20180919/gqt/kisspng-beaded-bracelets-jewellery-gemstone-beaded-bracele-5ba240abd4f817.8498224515373600438723.jpg'}} 
style={{height:100, width: 100, margin: 5,}}/>
</View>

<View style={styles.center}>
<Image source={{uri:'https://toppng.com/public/uploads/preview/diamond-earrings-png-11552288795ewnfj4nlgu.png'}} 
style={{height:100, width: 100, margin: 5,}}/>

<Image source={{uri:'https://png.pngtree.com/png-clipart/20200225/original/pngtree-a-pair-of-beautiful-golden-wedding-rings-on-a-transparent-background-png-image_5254746.jpg'}} 
style={{height:100, width: 100, margin: 5,}}/>
</View>


 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Mens')}>
  <Text style={styles.buttonText}>
     BACK
  </Text>

 </TouchableHighlight>

 <TouchableHighlight style={styles.touchableButton1} onPress={() => this.props.navigation.navigate('Shoes')}>
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
export default Accessories;
