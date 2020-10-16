import  React,{useContext, useState,useEffect } from 'react';
import {View, SafeAreaView,Text} from 'react-native'
import { Card, Avatar, Button ,Title,Paragraph } from 'react-native-paper';
import {Header} from '../../UIcomponent/Header'
import {globalStore} from '../../ContextStore/Store'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Schedule = () => { 
    const appContext = useContext(globalStore)
    const {StudentDetails, Token,
        ParentId} = appContext
    
    console.log('call1') 
  
   const [Data,SetData]= useState()

 const  fetchSchedules=()=>{
    let formdata = new FormData();
    formdata.append("ParentId", ParentId)

    for (let i = 0; i < StudentDetails.length; i++) {
        console.log(StudentDetails[i].StudentId)
        formdata.append("StudentId", StudentDetails[i].StudentId)
      for(let j=0;j<StudentDetails[i].CourseList.length;j++){
        formdata.append("CourseId",StudentDetails[i].CourseList[j].CourseId)
      }
    } 
      
    fetch('http://dev1.adaptivebizapp.com/studentapp/api/Class',{
        method: "POST",
        headers: {
        'Authorization': 'Bearer ' + Token
        },
        body: formdata
    } )
    .then((response) => response.json())
    .then((json) =>{
    alert(JSON.stringify(json))  
      SetData(json)})
    .catch((error) =>console.log(error))
    .finally(() => alert('finished'));
  }

   

  useEffect(() => { 

    fetchSchedules()
    
},[]);
       

   return ( 
       
    
    <SafeAreaView> 
{/*  
  <FlatList
    
      
    data = {Data}
    style={{margin:20,flex:1}}
    renderItem = { renderData }
  
   
 /> */}
  </SafeAreaView>
   )
}

export default Schedule;