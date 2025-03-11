import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../ViewsCss/MainDash.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MainDash = () => {
  const navigate=useNavigate();
  const [testData,setTestData]=useState([]);
  const gettingData3=()=>{
    axios.get(`https://msdbackend-1.onrender.com/data/test`)
    .then((res)=>{
      console.log(res);
      setTestData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    gettingData3()
  },[])

  const TestClick=()=>{
    navigate("/test")
  }

  const UserClick=()=>{
    navigate("/Allusers");
  }

  const [userData,setUserData]=useState([]);
  const gettingData=()=>{
    axios.get(`https://msdbackend-1.onrender.com/users`)
    .then((res)=>{
      console.log(res);
      setUserData(res.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    gettingData()
  },[])

  return (
    <div>
      <Container className='d-flex justify-content-center'>
        <div className='box125 user125' onClick={TestClick}>
          <p>Total test</p>
          <p>{testData.length}</p>
        </div>
        <div className='box125 test125' onClick={UserClick}>
        <p>Total Users</p>
        <p>{userData.length}</p>
        </div>
        <div className='box125 order125'>
        <p>Orders</p>
        <p>0</p>
        </div>
        <div className='box125 no'>
        <p>Orders</p>
        <p>0</p>
        </div>
      </Container>
    </div>
  )
}

export default MainDash
