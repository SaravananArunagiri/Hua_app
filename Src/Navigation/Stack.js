import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Component/Splash/Splash'
import Login from '../Component/Login/Login'
import Forget from '../Component/Forget/Forgetpassword'
import Dashboard from './Drawer'
import {ShowtimeContextProvider} from '../ContextStore/Store'
import Studentdetail from '../Component/Profile/Studentdetail'
import Schedule from '../Component/Schedules/Schedule'
import Makeuplesson from '../Component/MakeupLesson/Makeuplisting'
const Stack = createStackNavigator();

export default stack=()=> {
    return (
       <ShowtimeContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash " component={Splash} options={{headerShown:false}}/>
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/> 
          <Stack.Screen name="studentdetail" component={Studentdetail}         options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          
          },
          headerTitleAlign:'center'
        }}/>   
          <Stack.Screen name="Schedule" component={Schedule} 
           options={{
            title: 'Schedule',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            
            },
            headerTitleAlign:'center'
          }}
          
          />    
          <Stack.Screen name="makeuplist" component={Makeuplesson} 
           options={{
            title: 'MakeupLesson',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            
            },
            headerTitleAlign:'center'
          }}
          
          
          
          /> 
           <Stack.Screen name="Forget" component={Forget} />
        </Stack.Navigator>
      </NavigationContainer>
      </ShowtimeContextProvider>
    );
  }