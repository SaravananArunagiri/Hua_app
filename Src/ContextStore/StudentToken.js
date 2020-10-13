import React from 'react'
import {globalStore} from './Store'
export default async function StudentToken() {
  
    const appContext = useContext(globalStore)  
    const {} = appContext
    Promise.all([
      await fetch('http://dev1.adaptivebizapp.com/studentapp/Token',{
        method: 'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:qs.stringify({
          grant_type:"password",
          username:state.username,
          password:state.password
        })
      })
      .then(value => value.json()),
      await  fetch(`http://dev1.adaptivebizapp.com/studentapp/api/Student?ParentId=${ParentId}`,{
        method: "GET",
        headers: {
        'Authorization': 'Bearer ' + Token 
      }
        }) 
      .then(value => value.json()),
      await   fetch(`http://dev1.adaptivebizapp.com/studentapp/api/Student?ParentId=${ParentId}`,
      {
        method: "GET",
        headers: {
        'Authorization': 'Bearer ' + Token
      }
        }).then(value => value.json()),
       ])
       .then((value) => {
          SetToken(value[0].access_token)
          alert(value[0].access_token)
          SetParentId(value[0].parentId)
          SetParentdetail(value[1])
          SetStudentDetails(value[2])
       })
       .catch((err) => {
           console.log(err);
       }) .finally(() => setLoading(false));
  }
  