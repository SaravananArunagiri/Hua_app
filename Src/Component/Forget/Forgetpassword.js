import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TextInput,StatusBar, TouchableOpacity,Keyboard} from 'react-native'

import styles from './Forgetstyles'
export default Forgetpassword=()=>{
  
    const [Email,SetEmail]=useState()

  return (
      <>
    
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
     <ScrollView>
   <View style={styles.container}>
   <Image style={styles.image}
    source={require('../../Assets/Images/forgotpassword.png')} />        
    <View style={styles.inputContainer}>
      <Image style={styles.inputIcon} source={require('../../Assets/Images/message.png')}/>
      <TextInput style={styles.inputs}
          placeholder="Enter your Email ID"
          autoFocus={true}
          keyboardType="email-address"
          value={Email}
          underlineColorAndroid='transparent'
          onChangeText={(email) =>SetEmail(email)}/>
    </View>
    
   
    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
      <Text style={styles.loginText}>Send Reset Link</Text>
    </TouchableOpacity>

  </View>
  </ScrollView>  
    </SafeAreaView>
   
    </>
  )
}











