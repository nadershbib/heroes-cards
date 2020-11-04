
import './App.css';
import React,{useEffect, useState} from 'react'
import axios from 'axios';

function App() {

  const [users,setUsers] = useState([]);
  
  useEffect(()=>{
     
       fetch('https://reqres.in/api/users?page=2')
       .then(res=>res.json())
       .then(res=>setUsers(res.data))
       .catch(err=>alert(err.message))
        

  },[]);

  console.log(users);



  return (
    <div className="app">
  
        
      
      

    </div>
  );
}

export default App;
