import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrinc:{
        flex:1,
        width:"100%",
    },
    container:{
        display:"flex",
        margin:"8%",
    },
    containerTitle:{
        margin:"5%",
    },
    title:{
        color: '#ed6d7f',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
    
    },
    containerInput:{
    },
    titleInput:{
        fontSize:16,
          color: "#83d5d0",
          fontSize: 20,
          fontWeight: '700',
        marginTop:"8%"
    },
    input:{
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor:"#b84f5d",
    },
    containerButton:{
        display:"flex",
        alignItems:"center",
        margin:"5%",
        marginTop:"10%"
    },
    buttonSend:{
        backgroundColor:"#ed6d7f", 
        borderRadius: 20,
        padding: "5%",
        width:"100%"

    },
    textButtonSend:{
        color:"white",
        fontSize: 25,
        textAlign: "center",
        fontWeight:"700",
    
    },
    containerImg:{
        justifyContent: 'flex-end',
        justifyContent:"center",
        alignItems:"flex-end",
        padding:"5%",
        backgroundColor:"#e8e8e8"
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
      buttonPic:{
        //   flex:1,
          display:"flex",
          // backgroundColor: "#004cc8",
          borderRadius: 20,
          justifyContent:"center",
          alignSelf: 'center',
          margin:"2%"
    
      },
      textButtonPic:{
        color:"white",
        fontSize: 20, 
        textAlign: "center",
        padding:"3%",
      },
      textButtonPicReady:{
        color: "white",
        fontSize: 20,
        textAlign: "center",
        padding:"3%",
      }
    });

export default styles;