import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home  from '../Component/Dashboard/Dashboard'
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons1 from 'react-native-vector-icons/MaterialIcons';
import Profile from '../Component/Profile/Profile'
const Tab = createBottomTabNavigator();

export default Tabs=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={{      
      keyboardHidesTabBar:true,
      activeTintColor: 'black',    
      inactiveTintColor:'rgb(255,255,255)',
      labelStyle:{
       fontSize:14
      },
      
      tabStyle:{
      borderTopWidth: 0,
      },
      style: { 
        // borderTopLeftRadius:12, 
        // borderTopRightRadius:12,
        backgroundColor:'#F79A70', 
        // position:'absolute',
        // bottom: 0,
        // padding:10,
        // width: DEVICE_WIDTH,
        // height: 54,
        // zIndex: 8 

      }
    
    }}  
    >
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color}) => (
          <MaterialCommunityIcons name="user" color={color} size={25} />
        ),
        
      }}
      
      />
      <Tab.Screen name="Dashboard" component={Home}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color}) => (
          <MaterialCommunityIcons1 name="dashboard" color={color} size={25} />
        ),
        
      }}
      
      
      />
      <Tab.Screen name="Logout" component={Home}
       options={{
        tabBarLabel: 'Logout',
        tabBarIcon: ({ color}) => (
          <MaterialCommunityIcons1 name="logout" color={color} size={25} />
        ),
        
      }}
      
      
      />
    </Tab.Navigator>
  );
}