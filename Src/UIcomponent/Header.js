import React from 'react'
import {View,Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons1 from 'react-native-vector-icons/EvilIcons';
import font from '../Utils/Enum'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export const  Header=()=>{
   const navigation =useNavigation() 
    return ( 
<View style={{height:50,width:'100%',backgroundColor:'#F79A70',flexDirection:'row',alignItems:'center'}}>
 <TouchableOpacity onPress={()=>navigation.openDrawer()}>
 <MaterialCommunityIcons name="bars" color={'white'} size={30} style={{margin:5}}/>
 </TouchableOpacity>
 <Text style={{color:'white',fontSize:29,fontFamily:font.PoppinsMedium,marginHorizontal:120,alignSelf:'center'}} >Profile</Text> 
</View>
    )
}

export const  Header1=()=>{
    const navigation =useNavigation() 
     return ( 
 <View style={{height:50,width:'100%',backgroundColor:'#F79A70',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
  <TouchableOpacity onPress={()=>navigation.openDrawer()}>
  <MaterialCommunityIcons name="bars" color={'white'} size={30} style={{margin:5}}/>
  </TouchableOpacity>
  <Text style={{color:'white',fontSize:29,fontFamily:font.PoppinsMedium}} >Dashboard</Text>
  <MaterialCommunityIcons1 name="bell" color={'white'} size={44} style={{margin:5}}/>
 </View>
     )
 }
