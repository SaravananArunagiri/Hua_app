import {
    View,
    StyleSheet,
    Image,
    Text
  } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Alignments} from '../../Utils/Enum'
import {color} from '../../Utils/Enum'

export  default Splashstyles = StyleSheet.create({
    container: {
      flex: 1,     
      justifyContent:Alignments.center,
      backgroundColor:color.white,
      height:hp('100%'),
      width:wp('100%'),
      
          
    },
    image:{ 
     width: wp('65%'),
     height: hp('17%') ,
     alignSelf:Alignments.center
     },
    Loader:{
    marginHorizontal:10,
    flexDirection:'row',
    justifyContent:Alignments.center,
    alignItems:Alignments.center,
    marginTop:120,
    padding:12  
    }
  });