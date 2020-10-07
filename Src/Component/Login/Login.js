import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Image,TextInput,StatusBar, TouchableOpacity,Keyboard} from 'react-native'
import styles from './Loginstyles'
export default Login=({navigation})=>{
  
    const [Username,Setusername]=useState()

   

  return (
      <>
    
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView>
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
         
         
          underlineColorAndroid='transparent'
          onChangeText={(password) => this.setState({password})}/>
    </View>

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
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



