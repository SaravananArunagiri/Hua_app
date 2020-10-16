import  React,{useContext } from 'react';
import {ScrollView, SafeAreaView} from 'react-native'
import { Card, Avatar, Button ,Title,Paragraph } from 'react-native-paper';
import {Header} from '../../UIcomponent/Header'
import {globalStore} from '../../ContextStore/Store'
import Studentprofile from './Studentprofile'
const Profile = () => { 
    const appContext = useContext(globalStore)
    const {Parentdetail} = appContext

   return ( 
       
  <SafeAreaView>
  <Header/>      
  <ScrollView >  
<Card >
  <Card.Content style={{flexDirection:'row',marginBottom:10,borderBottomWidth:1}} >
    <Avatar.Icon   icon="profile" />        
   <Card.Content>
   <Title>{Parentdetail.ParentName}</Title>
   <Paragraph>{Parentdetail.ParentPhone}</Paragraph>
   <Paragraph>{Parentdetail.ParentEmail} </Paragraph>      
 </Card.Content> 
 </Card.Content>

 <Card.Content style={{flexDirection:'row',marginBottom:10}}  >
 <Title >Secondary Contact</Title>    
 <Paragraph style={{marginHorizontal:20,marginVertical:8}}>{Parentdetail.SecondaryEmail}</Paragraph>
 
 </Card.Content>
 <Card.Content style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1}} >
 <Paragraph>Name : {Parentdetail.SecondaryName}</Paragraph> 
  
   <Paragraph style={{marginHorizontal:20}}>{Parentdetail.SecondaryPhone} </Paragraph>      
 </Card.Content>  
 

 <Card.Content style={{marginBottom:10,padding:10,borderBottomWidth:1}} >
 <Title >Address</Title>        
 <Paragraph>{Parentdetail.ParentAddress1}</Paragraph> 
 <Paragraph>{Parentdetail.ParentAddress2}</Paragraph>
 <Paragraph>{Parentdetail.ParentAddress3}</Paragraph>  
<Paragraph >{Parentdetail.ParentCountry}-{Parentdetail.ParentPostalCode} </Paragraph>      
 </Card.Content> 

 <Studentprofile />
  </Card>
 
  </ScrollView> 
  </SafeAreaView>
   )
}

export default Profile;