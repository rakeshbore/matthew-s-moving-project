import React,{useState} from 'react';
import axios from 'axios';
const Post = () => {
    let[state,setState]=useState({
        user:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        cpassword:""
    }
    });
    const [error,setError]=useState('')
    
    let{user}=state
    let update=(e)=>{ 
        {setState((state)=>({
        user:{
        ...state.user,
        [e.target.name]:e.target.value
        }
 
    }))}}
    let submitData = async (e) => {
        e.preventDefault();
        // await axios.post("http://localhost:5000/data" ,user)
        console.log(user);
        if(user.firstname!==""){
            if(user.firstname!==user.firstname.toLowerCase()){

            }
            else{
                setError("must be contain capital letters")
            }

        }
        else{
          setError("this field is required")
        }
        if(user.password!==""){

        }
        else{
            setError("password is required")
        }
    }
  return <div>
      
          <div className='container'>
              <div className='row'>
                  <div className='col-sm-4'>
                      <div className='card'>
                      <h1 className='card-title bg-dark text-white p-2'>SignUp</h1>
                      <div className='card-body'>
                          <form onSubmit={submitData}>
                              <div className='mt-2'>
                                  <input type='text'
                                  className='form-control'
                                  placeholder="First name"
                                  name="firstname"
                                  value={user.firstname}
                                  onChange={(e)=>update(e)}></input>
                              </div>
                              {error&&<div className='text-danger'>{error}</div>}
                              <div className='mt-2'>
                                  <input type='text'
                                  className='form-control'
                                  placeholder="Last name"
                                  name="lastname"
                                  value={user.lastname}
                                  onChange={(e)=>update(e)} ></input>
                              </div>
                              <div className='mt-2'>
                                  <input type='email'
                                  className='form-control'
                                  placeholder="email"
                                  name="email"
                                  value={user.email}
                                  onChange={(e)=>update(e)}></input>
                              </div>
                              <div className='mt-2'>
                                  <input type='password'
                                  className='form-control'
                                  placeholder="password"
                                  name="password"
                                  value={user.password}
                                  onChange={(e)=>update(e)}></input>
                              </div>
                              {error&&<div className='text-danger'>{error}</div>}
                              <div className='mt-2'>
                                  <input type='password'
                                  className='form-control'
                                  placeholder="confirm password"
                                  name="cpassword"
                                  value={user.cpassword}
                                  onChange={(e)=>update(e)}></input>
                                  <input type="submit" className='btn btn-success mt-2' value="SignUp"/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

       </div>
       </div>
};

export default Post;
