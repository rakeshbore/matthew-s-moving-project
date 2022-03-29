import React,{useEffect} from 'react';
import axios from 'axios';
const Get = () => {
useEffect(()=>{axios.get("http://localhost:5000/student").then(raki=>console.log(raki))});
  return <div>
      
  </div>;
};

export default Get;
