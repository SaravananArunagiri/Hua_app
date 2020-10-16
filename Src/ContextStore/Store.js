import React, { useEffect, createContext,useState,useReducer } from "react";
import {Alert} from 'react-native'
import {StudentToken} from '../ContextStore/StudentToken'
var qs = require('qs');
import { useNavigation } from '@react-navigation/native';
export const globalStore = createContext();

const studentinitialState = {
    username:"",
    password:"",
};


const Studentreducer = (state={username:'',password:''}, action) => {
    switch(action.type) {
      case "StudentUpdate":

        return {
           ...state,
          username:action.username,
          password:action.password,
         
        }
      default:
       return state
    }
  }


export const ShowtimeContextProvider = props => {
  
  const [state, dispatch] = useReducer(Studentreducer, studentinitialState);
 
  const [Loading, setLoading] = useState(true);
  const [ParentId, SetParentIds] = useState();
  const  [Token ,SetTokens] = useState() 
  const [Parentdetail,SetParentdetail] = useState();
  const [StudentDetails,SetStudentDetails] = useState();

// async function saveKey(sessionToken,parentId) {
//     try {
//       await AsyncStorage.setItem('@sessionToken:key', sessionToken);
//       await AsyncStorage.setItem('@parentId:key', parentId);
//     } 
//     catch (error) {
//       Alert.alert({
//         text: "Connection failed..! Please try again.",
//         type: "danger",
//         position: "bottom",
//         duration: 3000,
//         textStyle: { textAlign:'center' },
//         })
//     }
//     }
 
// if(state.username!='' && state.password!=''){
//   StudentToken() 
// }




  // useEffect(() => { 
  //   StudentToken()
  // },[]);
  return (
    <globalStore.Provider value={{
     
      SetParentdetail,
      SetStudentDetails,
      SetParentIds,
      SetTokens,
      Parentdetail,
      StudentDetails,
      Token,
      ParentId,
      dispatch 
    }}>
      {props.children}
    </globalStore.Provider>
  );
};