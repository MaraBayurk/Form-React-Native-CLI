'use strict';
import React, { useState } from 'react';
import {  StyleSheet, View, Text, Modal, Pressable } from 'react-native';
import Cam from './src/components/camera/Camera';
import Home from './src/components/home/Home';
// import Modal from './src/components/modal/Modal.js'


export default function App(){
  const[show,setShow]=useState(true)
  const[send,setSend]=useState(false)
  const [modalVisible, setModalVisible] = useState(true);

  const [input, setInput]= useState({
    name:"",
    lastName:"",
    birthDate: "",
    location:{},
    photo: ""
  })

  const handleInputChange= (name, value)=>{
      setInput({...input,[name]: value})
  }
  const onSubmit= ()=>{
    setSend(true)
    // console.log("form enviado", input.name, input.lastName, input.birthDate, input.location)
  }
  return(console.log("log",send), 

    <View style={styles.princ}>{
      send?
      <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Formulario Enviado, Gracias!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={(e) => {
                              setModalVisible(modalVisible)
                              setSend(false)
                              setInput({name:"", lastName:"", birthDate:"", location:{}, photo:""})
                              e.preventDefault()
                            }}
                        >
                            <Text style={styles.textStyle}>Salir</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
           
        </View>
      :
      show?
          <Home onSubmit={onSubmit} handleInputChange={handleInputChange} setear={setShow} input={input} />
        :
          <Cam handleInputChange={handleInputChange} setear={setShow} setInput={setInput}/>
      
    }
      </View>
  )
}

const styles = StyleSheet.create({
    princ:{
        flex:1,
        backgroundColor:"white",
        borderColor: "#83d5d0",
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 10,
        margin:7
    },
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#83d5d0",
  },
  modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },
  button: {
      margin: 5,
      width: 350,
      height: 75,
      borderRadius: 15,
      padding: 20,
      elevation: 2
  },
  buttonOpen: {
      backgroundColor: "#252161",
  },
  buttonClose: {
      backgroundColor: "#ed6d7f",
      width: 100,
      height: 50,
      borderRadius: 15,
      padding: 10,
      elevation: 2
  },
  textStyle: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
  },
  modalText: {
      marginBottom: 30,
      textAlign: "center"
  }
});