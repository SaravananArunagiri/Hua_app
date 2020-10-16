import  React,{useContext } from 'react';
import {View, SafeAreaView,Text} from 'react-native'
import { Card, Avatar, Button ,Title,Paragraph } from 'react-native-paper';
import {Header} from '../../UIcomponent/Header'
import {globalStore} from '../../ContextStore/Store'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Studentprofile = () => { 
    const appContext = useContext(globalStore)
    const {StudentDetails} = appContext
    const navigation = useNavigation();  
    console.log('call1') 
    
    const renderData = ( {item} ) => {
      
        return(
          <Card>
 
          <Card.Content style={{marginBottom:10,padding:10}} >
          <Title >Children</Title>        
          <Card>
          <Card.Content style={{flexDirection:'row',marginBottom:0}} >
         <Avatar.Icon   icon="profile" />        
            <Card.Content>
          <Title>{item.StudentName}</Title>
          <Paragraph>{item.StudentLevel}</Paragraph>
          </Card.Content>
         
          </Card.Content>
         
          <Card.Actions>
      <TouchableOpacity onPress={()=>navigation.push('studentdetail', {
                itemId:item,    
              }) }
 style={{width:170,backgroundColor:'orange',padding:10,borderRightWidth:1,borderColor:'white'}} >
  <Text style={{textAlign:'center',color:'white'}}> Profile </Text>
              
              </TouchableOpacity>
     <TouchableOpacity
     onPress={()=>navigation.push('Schedule') }
     style={{backgroundColor:'orange',width:160,padding:10}}>
      <Text style={{textAlign:'center',color:'white'}}> Schedule</Text>
       </TouchableOpacity>
             </Card.Actions>
           </Card>     
          </Card.Content>  
         
         
           </Card>
        )
      }

   return ( 
       
    
    <SafeAreaView> 
 
  <FlatList
    
      
    data = {StudentDetails}
    style={{margin:20,flex:1}}
    renderItem = { renderData }
  
   
 />
  </SafeAreaView>
   )
}

export default Studentprofile;