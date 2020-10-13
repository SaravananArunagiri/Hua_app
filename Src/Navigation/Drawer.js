import React from 'react'
import {View,Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from './Tabs'
import CustomDrawerContent from './DrawerContent'
const Drawers = createDrawerNavigator();

export default Drawer=()=> {
  return (
    <Drawers.Navigator 
    
    drawerContentOptions={{
   activeTintColor:'white',   
      itemStyle: {marginVertical: 39,width:'8%',marginHorizontal:219,height:'.5%'},
      overlayColor:'white',
     
    }}
   
 
 drawerContent={props => <CustomDrawerContent {...props} />} >
 <Drawers.Screen name="Home" component={Tab} options={{title:''}}  />
 
</Drawers.Navigator>
  );
}