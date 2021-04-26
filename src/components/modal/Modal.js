'use strict';
import React, { useState } from 'react';
import {  StyleSheet, View, Text, Modal, Pressable} from 'react-native';

export default function Send(){

    const [modalVisible, setModalVisible] = useState(false);

  return(
   <View>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
            >
                <View >
                    <View >
                        <Text >FORMULARIO ENVIADO, GRACIAS!</Text>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>Salir</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
   </View>
  )
}