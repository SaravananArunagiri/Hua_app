import  React,{useContext } from 'react';
import {View, SafeAreaView,Text} from 'react-native'
import { Card, Avatar, Button ,Title,Paragraph } from 'react-native-paper';



const Studentdetail = ({route}) => { 
    const {  itemId } = route.params
  
      
       console.log('call')
          
    CourseDetail=(course,level)=>{
   return  (
      course.map(function (item) {
         return ( 
        <Paragraph>{level}</Paragraph>,
        <Paragraph>{item.CourseStatus }</Paragraph>   
         )
        })
   )
   }




  return (
    
    <View> 
 
          <Card>
    <Card.Content style={{flexDirection:'row',marginBottom:10}} >
     <Avatar.Icon   icon="profile" />        
         <Card.Content>
          <Paragraph>{ itemId.StudentLevel}</Paragraph>
          <Paragraph>{ itemId.StudentSchoolName}</Paragraph>
          </Card.Content>
         
          </Card.Content>

         
          <Card.Content style={{marginBottom:0}} >       
          <Card.Content>
          <Title >Course</Title>       
    {CourseDetail( itemId.CourseList, itemId.StudentLevel)}
          </Card.Content>
         
          </Card.Content>


            </Card>     
        

  </View>
   )
}

export default Studentdetail;