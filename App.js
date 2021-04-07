'use strict';
import React, { useState } from 'react';
import {  StyleSheet } from 'react-native';
import Cam from './src/components/camera/Camera';
import Home from './src/components/home/Home'


export default function App(){
  const[show,setShow]=useState(true)
  const [input, setInput]= useState({
    name:"",
    lastName:"",
    birthDate: "",
    location:{}
  })
  const[photo, setPhoto]= useState("")

  const handleInputChange= (name, value)=>{
      setInput({...input,[name]: value})
  }
  const onSubmit= async()=>{
       try {
            const res= await fetch(`https://tech-challenge-v2.herokuapp.com/registration`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(input)
            })
            const resDB= await res.json()
            console.log("exito", resDB)
          } catch (error) {
            return("err", error)
        }
  }
  return(
      show?
        <>
          <Home onSubmit={onSubmit} handleInputChange={handleInputChange} setear={setShow} input={input} photo={photo}/>
         </>
        :
          <Cam handleInputChange={handleInputChange} setear={setShow} setPhoto={setPhoto}/>
  )
}