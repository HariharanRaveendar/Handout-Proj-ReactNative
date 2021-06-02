import React from "react";
import {View,StyleSheet,Image,TextInput,TouchableOpacity,Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import "react-native-gesture-handler";
import handout from "../../assests/images/Handout.png";
export default class Signin extends React.Component{
  state = {
    mobilenumber: '',
    password: ''
    
 }
 validate = async()=>{
   try{
     let body = {
       method:"POST",
       headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username:this.state.mobilenumber,
          password:this.state.password
        })
      }
     let result = await fetch('http://handout.pythonanywhere.com/api/accounts/Signin/',body)
     let data = await result.json()
     console.log(data.email)

     AsyncStorage.setItem('id',data.mobilenumber).then(()=>{
       AsyncStorage.setItem('mail',data.email).then(()=>{
         AsyncStorage.setItem('firstname',data.first_name).then(()=>{
           AsyncStorage.getItem('id').then(id=>{
             console.log(id)
           }).then(()=>{
            this.props.navigation.navigate("Main");
           })
         })
       })
     })
     
  //    async function infom(userid,emailid,name){
       
  //     await AsyncStorage.setItem('userid',userid).then({
  //       await AsyncStorage.setItem('email',emailid);
  //     })
      
  //     await AsyncStorage.setItem('name',name);
  //     let value1 = await AsyncStorage.getItem('userid');
  //     let value2 = await AsyncStorage.getItem('email');
  //     let value3 = await AsyncStorage.getItem('name');
  //     console.log(value1,value2,value3);
  // }
  // let userid=data.mobilenumber;
  // let emailid= data.email;
  // let name=data.first_name;
  // console.log(data,userid,emailid,name)
  // infom(userid,emailid,name);
  // this.props.navigation.navigate("Main");
   }catch(error){
     console.log(error);
   }
 }
  render(){
    return(
      <View style={styles.view}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:70}}>
          <Image source={handout} style={styles.logo} />
        </View>
        <View style={styles.viewText}>
        
          <TextInput 
          style={styles.textInput} 
          placeholder="MobileNumber" 
          autoCapitalize = "none"  
          onChangeText={mobilenumber => this.setState({ mobilenumber })}
          value={this.state.mobilenumber} />
          <TextInput 
          style={styles.textInput} 
          placeholder="Password"  
          secureTextEntry={true} 
          onChangeText={password => this.setState({ password })}
          value={this.state.password}/>
          <Text onPress = {()=>this.props.navigation.navigate("Main")} style={styles.textForget}>Forget Password ?</Text>
        </View>
        <View style={styles.viewLogin}>
          <TouchableOpacity onPress={this.validate}
          style={styles.touchLog}>
            <Text style={styles.textLogin}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Text style={{fontStyle:"italic"}}>New User? </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Signup")}
           style={{textDecorationLine:"underline",color:"#7FBF3F",fontWeight:"bold"}}>Register</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"#fff",
    },
    logo:{
        width:155,
        height:120,
        marginTop: 20,

    },
    viewTop:{
        textAlign:"center"
    },
    viewText:{
        padding:20,
    },
    textInput:{
        marginTop: 30,
        borderBottomColor: "#7FBF3F",
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    textForget:{
      textAlign:"right",
      marginTop:10,
      color:"#7FBF3F",
      textDecorationLine:"underline",
      fontWeight:"bold",
    },
    touchLog:{
      width: 200,
      backgroundColor: "#7FBF3F",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      marginTop: 10,
      marginBottom: 20,
    },
    textLogin:{
      color: "white",
      fontSize: 16, 
      textAlign: "center" 
    },
    viewLogin:{
      alignItems: "center",
      justifyContent: "center",
    }

})


              