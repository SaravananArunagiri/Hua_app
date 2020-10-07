import React, { useEffect }   from "react";
import {
    View,
    Image,
  } from "react-native";
import  {DotsLoader} from 'react-native-indicator';
import SplashImage from '../../Utils/Enum'
import Splashstyles from './Splashstyles'
import {Fontsize} from '../../Utils/Enum'
import {color} from '../../Utils/Enum'
export default Splash=({navigation})=>{

  useEffect(() => {    
    setTimeout(() => {
       
     navigation.navigate('Login')
   },2000);  
  },[])
    return (
        <View style={Splashstyles.container}>
        <Image style={Splashstyles.image}
          source={require('../../Assets/Images/logo.png')} />

          <View style={Splashstyles.Loader}> 
           <DotsLoader size={Fontsize.FONT_SIZE_16} color={color.Loadercolor} />
           </View>    
          
      </View>
    )
}

