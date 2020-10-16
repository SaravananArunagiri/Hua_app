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

    // for (let i = 0; i < StudentDetails.length; i++) {
    //     console.log(StudentDetails[i].StudentId)
    //     formdata.append("StudentId", StudentDetails[i].StudentId)
    //   for(let j=0;j<StudentDetails[i].CourseList.length;j++){
    //     formdata.append("CourseId",StudentDetails[i].CourseList[j].CourseId)
    //   }
    // } 
      
    fetch('http://dev1.adaptivebizapp.com/studentapp/api/Class',{
        method: "POST",
        headers: {
        'Authorization': 'Bearer ' + Token
        },
        body: formdata
    } )
    .then((response) => response.json())
    .then((json) =>{
   
      SetData(json)})
    .catch((error) =>console.log(error))
    .finally(() => console.log('finished'));
  }

   

  useEffect(() => { 

    fetchSchedules()
    
},[]);
const renderData = ( {item} ) => {
     
  return(
     Display1(item)  
  )
}
const renderData1 = ( {item} ) => {
  
return(
  <>
 <Card >
   <Card.Content style={{flexDirection:'row',borderBottomWidth:0.5}}>
<Card.Content style={{marginBottom:12,padding:10,width:'40%'}} >
<Title>{item.Date}</Title>
<Paragraph>{item.FromTime}</Paragraph>
<Paragraph>{item.ToTime}</Paragraph>
 </Card.Content>
 <Card.Content style={{marginBottom:12,padding:10,width:'60%'}} >
<Title>{item.CourseName}</Title>
<Paragraph>{item.StudentName}</Paragraph>
<Paragraph>{item.TutorName}</Paragraph>
<Paragraph>{item.Status}</Paragraph>
 </Card.Content>
 </Card.Content> 
 </Card>
  </> 
)
}
 const Display1=(item)=>{
  return ( 
  <FlatList
      
  data = {item}
  style={{margin:10,flex:1}}
  renderItem = { renderData1 }

 
/>
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

export default Schedule;