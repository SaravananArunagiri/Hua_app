import React from 'react';
import {View,Text} from 'react-native'
import {Header1} from '../../UIcomponent/Header'

export default Dashboard=({navigation})=>{
    return(
    <View style={{flex:1,backgroundColor:'white'}}>
        <Header1 />
     <Text onPress={()=>navigation.openDrawer()}>Coming Soon</Text>  
     </View>   
    )
}
