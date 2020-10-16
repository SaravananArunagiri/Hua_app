import React,{useEffect, useState,useContext} from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TextInput,StatusBar, TouchableOpacity,Keyboard,Alert, ActivityIndicator} from 'react-native'
import styles from './Loginstyles'
import {globalStore} from '../../ContextStore/Store'
var qs = require('qs');
export default Login=({navigation})=>{
  
  const appContext = useContext(globalStore)
  const {SetParentdetail,SetStudentDetails,SetParentIds,
    SetTokens} = appContext
    const [Username,Setusername]=useState()
    const [Password,SetPassword]=useState() 
    // const [Parentdetail,SetParentdetail] = useState();
    // const [StudentDetails,SetStudentDetails] = useState();
    const [ParentId, SetParentId] = useState();
    const  [Token ,SetToken] = useState() 
    const [Loading, setLoading] = useState(false);


   function StudentToken() {
  
      Promise.all([
         fetch('http://dev1.adaptivebizapp.com/studentapp/Token',{
          method: 'POST',
          headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body:qs.stringify({
            grant_type:"password",
            username:Username,
            password:Password
          })
        })
        .then(value => value.json()),
         fetch(`http://dev1.adaptivebizapp.com/studentapp/api/Parent?ParentId=${ParentId}`,{
          method: "GET",
          headers: {
          'Authorization': 'Bearer ' + Token
        }
          }) 
        .then(value => value.json()),
         fetch(`http://dev1.adaptivebizapp.com/studentapp/api/Student?ParentId=${ParentId}`,
        {
          method: "GET",
          headers: {
          'Authorization': 'Bearer ' + Token
        }
          }).then(value => value.json()),
         ])
         .then((value) => {
            SetToken(value[0].access_token)
           
            SetParentId(value[0].parentId)
            SetParentdetail(value[1])
            SetStudentDetails(value[2])
           
       
         })
         .catch((err) => {
             console.log(err);
         }) .finally(() => setLoading(false));
    }
     
    useEffect(() => { 
     
      if(Token!=undefined && ParentId!=undefined){
        SetParentIds(ParentId),
        SetTokens(Token)
      }

       
  },[Token,ParentId]);

  

 
  const login=async()=>{
   setLoading(true)
  await StudentToken()
  if(Token!=undefined  &&  ParentId!=undefined){
    navigation.navigate('Dashboard')
   }

  }

  return (
      <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView>
      {Loading===true? <View pointerEvents={"none"}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor:'transparent',
        position:'absolute',
        alignSelf: "center",
        justifyContent:"center",
        alignItems: "center",
        opacity:0.2
      }}>
      <ActivityIndicator size={80} color={"black"}/>
    </View>:null}     
   <View style={styles.container}>
    
   <Image style={styles.image}
    source={require('../../Assets/Images/logo.png')} />        
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../Assets/Images/user.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Email"
          autoFocus={true}
          keyboardType="email-address"
          value={Username}
          underlineColorAndroid='transparent'
          onChangeText={(user) =>Setusername(user)}/>
    </View>
    
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../Assets/Images/forgotpassword.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
           value={Password} 
          underlineColorAndroid='transparent'
          onChangeText={(password) =>SetPassword(password)}/>
    </View>

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() =>login()}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity   style={styles.buttonContainer} onPress={() =>navigation.navigate('Forget')}>
        <Text style={{color:'#F79A70',fontSize:15}}>Forgot your password?</Text>
    </TouchableOpacity>

  </View>
      </ScrollView>
    </SafeAreaView>
   
    </>
  )
}



