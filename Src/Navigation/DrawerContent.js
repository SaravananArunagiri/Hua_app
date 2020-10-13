import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  
} from '@react-navigation/drawer';
import React, { useState,useContext } from 'react';
import { StyleSheet, TouchableOpacity, View,Image,Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import {DrawerActions } from '@react-navigation/native'
import font from '../Utils/Enum'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import {globalStore} from '../ContextStore/Store'
export default function CustomDrawerContent({progress,...props}) {
  const appContext = useContext(globalStore)
  const { Parentdetail} = appContext       
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });  
  const navigation = useNavigation();  
const [state,Setstate]=useState([
 {id:'Programme Register',routes:'Register',path:require('../Assets/Images/profile.png'),margins:85},
 { id:'Message',routes:'message',path:require('../Assets/Images/message.png'),margins:135},
 { id:'Results', routes:'results',path:require('../Assets/Images/result.png'),margins:190},
 {id:'MakeupLesson',routes:'makeuplesson',path:require('../Assets/Images/makup.png'),margins:240},
 {id:'Invoice', routes:'invoice',path:require('../Assets/Images/invoice.png'),margins:295},
 {id:'Attendance', routes:'attendance',path:require('../Assets/Images/attendance.png'),margins:350},
 {id:'Log out', routes:'logout',path:require('../Assets/Images/logout.png'),margins:400},
 

])
  
    return (
   <DrawerContentScrollView {...props}>   
    <View >
    <View style={{flex:1,backgroundColor:'#F79A70',justifyContent:'center',alignItems:'center',paddingVertical:20,marginVertical:-5,borderBottomLeftRadius:45}}> 
    <Text  style={{fontSize:18}}>{Parentdetail.ParentName}</Text>
    <Text  style={{fontSize:14}}>{Parentdetail.ParentPhone}</Text>
    <Text  style={{fontSize:12}}>{Parentdetail.ParentEmail}</Text>
   
    </View>
   
<Animated.View style={{ transform: [{ translateX }],marginVertical:-70}}>
  
          <DrawerItemList {...props}  />
          {state.map((route) => ( 
            <>
           <Image source={route.path}  style={{height:40,width:35,position:'absolute',marginVertical:route.margins,marginHorizontal:4}}   />
          <DrawerItem         
          key={route.id}
          style={{borderBottomWidth:.5,borderBottomColor:'rgb(119,134,158)',opacity:1,marginLeft:45}} labelStyle={{fontFamily:font.PoppinsSemiBold,color:'black',fontSize:15,lineHeight:18}} label={route.id}  onPress={() =>console.log('done')
         
          } />

       </>
          ))} 
       </Animated.View>
       <View style={{paddingTop:10,paddingBottom:0,justifyContent:'center',alignItems:'center'}}>
    
     <Image source={require('../Assets/Images/logo.png')}  style={{height:50,width:150,marginVertical:70}}   /> 
     <Text style={{color:'black',fontSize:12,marginVertical:-35,marginBottom:10}}>Version 1.0.0 </Text>   
     </View>
     </View>
      </DrawerContentScrollView>
      
    );
  }
  
