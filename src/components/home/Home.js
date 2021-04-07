import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,  ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Geolocation from '@react-native-community/geolocation';
import styles from './styleHome'

export default function Home({handleInputChange, setear, input, onSubmit, photo}) {

    useEffect(()=>{
        Geolocation.getCurrentPosition(
            (success) => {
                handleInputChange("location", {latitude: success.coords.latitude, longitude: success.coords.longitude})
              },
            (err) => console.log('err:', err)
        )
    },[])
  return (
  <ScrollView>
    <View style={styles.containerPrinc}>
        <View style={styles.container}>
        
        <View style={styles.containerTitle}>
            <Text style={styles.title}>FORMULARIO</Text>
        </View>

        <View style={styles.containerInput} >

            <Text style={styles.titleInput}>Nombre</Text>
            <TextInput
            require
            style={styles.input}
            onChangeText={value=> handleInputChange("name", value)}
            value= {input.name}
            />

            <Text style={styles.titleInput}>Apellido</Text>
            <TextInput
            require
            style={styles.input}
            onChangeText={value=> handleInputChange("lastName", value)}
            value= {input.lastName}
            />

            <Text style={styles.titleInput}>Fecha de Nacimiento</Text>
            <DatePicker
                style={{width: '100%'}}
                date={input.birthDate}
                mode="date"
                format="YYYY-MM-DD"
                placeholder = " seleccionar fecha "
                customStyles={{
                dateIcon: {
                    position: 'absolute',
                    right: 0,
                    marginLeft: 5
                },
                dateInput: {
                    width: '100%',
                    borderWidth:0,
                    textAlign:"left",
                    borderBottomWidth: 1,
                    borderBottomColor:"#004cc8", 
                }
                }}
                onDateChange={(date) => {handleInputChange("birthDate", date)}}
            />

            <Text style={styles.titleInput}> 
                {
                    photo?
                    "Repetir Selfie"
                    :
                    "Tomar Selfie"
                } 
            </Text>
                <TouchableOpacity onPress={()=>setear(false) } style={styles.buttonPic} >
                    {
                        photo?
                        <>
                        <Image source={{uri: `data:image/png;base64,${photo}`}} style={{ width: 200, height:200, backgroundColor:"#e8e8e8" }}  />  
                        </>                   
                        :
                        <Text style={styles.textButtonPic}>Presiona aqui</Text>
                    }
                </TouchableOpacity>
        </View>

        <View  style={styles.containerButton}>
            <TouchableOpacity
                style={styles.buttonSend}
                onPress={() =>onSubmit()}
            >     
            <Text style={styles.textButtonSend}>Enviar</Text>
            </TouchableOpacity>

        </View>

     </View>
        <View style={styles.containerImg}>
            <Image
                source={require('../../../static/yoFio.webp')}
                style={{ width: 100, height:60 }}
            />
        </View> 
    </View>
        
</ScrollView>
  );
}
