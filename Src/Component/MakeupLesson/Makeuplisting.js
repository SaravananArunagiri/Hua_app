import  React,{useContext, useState,useEffect } from 'react';
import {View, SafeAreaView,Text} from 'react-native'
import { Card, Avatar, Button ,Title,Paragraph } from 'react-native-paper';
import {Header} from '../../UIcomponent/Header'
import {globalStore} from '../../ContextStore/Store'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import font from '../../Utils/Enum'
const Makeuplisting = () => { 
    const appContext = useContext(globalStore)
    const {Token,
        ParentId} = appContext
    
    console.log('call1') 
  
   const [Data,SetData]= useState()

 const  Makeuplisting=()=>{

      
    fetch(`http://dev1.adaptivebizapp.com/studentapp/api/MakeupLesson?ParentId=${ParentId}`,{
        method: "GET",
        headers: {
        'Authorization': 'Bearer ' + Token
        },
    } )
    .then((response) => response.json())
    .then((json) =>{
      
      SetData(json)})
    .catch((error) =>console.log(error))
    .finally(() => console.log('finished'));
  }

   

  useEffect(() => { 

    Makeuplisting()
    
},[]);

const renderData = ( {item} ) => {
  
return(
  <>
 <Card >
   <Card.Content >

<Title>Course: {item.Course}</Title>
 <Card.Content style={{padding:1,flexDirection:'row',marginHorizontal:-15}} >     
<Card.Content>
<Paragraph style={{textAlign:'center',color:'green',fontFamily:font.PoppinsSemiBold}}>{item.AbsentDetails.substring(0, 8)}</Paragraph>
<Paragraph style={{color:'green',fontFamily:font.PoppinsSemiBold}}>{item.AbsentDetails.substring(8, 26)}</Paragraph>
</Card.Content>
<Title>to</Title>
<Card.Content>
<Paragraph style={{textAlign:'center',color:'green',fontFamily:font.PoppinsSemiBold}}>{item.MakeupDetails.substring(0, 8)}</Paragraph>
<Paragraph style={{color:'green',fontFamily:font.PoppinsSemiBold}}>{item.MakeupDetails.substring(8, 26)}</Paragraph>
</Card.Content>
<Button >{item.Status}</Button>
 </Card.Content>

 </Card.Content> 
 </Card>
  </> 
)
}
 
   return ( 
       
    
    <SafeAreaView> 
    <FlatList
      
        data = {Data}       
        renderItem = { renderData }

      />
  </SafeAreaView>
   )
}

export default Makeuplisting;