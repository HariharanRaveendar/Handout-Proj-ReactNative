import React from "react";
import {
View,SafeAreaView,ScrollView,
StyleSheet,
Image,
TextInput,
TouchableOpacity,
AsyncStorage,
Text} from "react-native";
import handout from "../../assests/images/Handout.png";
export default class Signup extends React.Component{
  state={
    fname:'',
    email:'',
    mobilenumber:'',
    password:'',
    cpassword:''
  }
  signUp = async()=>{
    if(this.state.password!==this.state.cpassword){
      alert("Password is miss matching");
    }
    else{
      try{
        let body = {
          method:"POST",
          headers:{
             Accept:"application/json",
             "Content-Type":"application/json"
           },
           body:JSON.stringify({
             username:this.state.mobilenumber,
             email:this.state.email,
             password:this.state.password,
             first_name:this.state.fname,
           })
         }
        let result = await fetch('http://handout.pythonanywhere.com/api/accounts/Signup/',body)
        res = await result.json()
        this.props.navigation.navigate("Login");
      }catch(error){
        console.log(error);
      }
    }
  }
  render(){
    return(
    <SafeAreaView style={styles.safeAreaview}> 
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={handout} style={styles.logo} />
        </View>
            <ScrollView>
              <View style={styles.viewText}>
                <TextInput 
                style={styles.textInput} 
                placeholder="Full Name" 
                onChangeText={fname => this.setState({ fname })}
                value={this.state.fname} />
                <TextInput 
                style={styles.textInput} 
                placeholder="Email" 
                onChangeText={email => this.setState({ email })}
                value={this.state.email} />
                <TextInput 
                style={styles.textInput} 
                placeholder="Mobile Number" 
                onChangeText={mobilenumber => this.setState({ mobilenumber })}
                value={this.state.mobilenumber}/>
                <TextInput 
                style={styles.textInput} 
                placeholder="Password" 
                secureTextEntry={true} 
                onChangeText={password => this.setState({ password })}
                value={this.state.password} />
                <TextInput 
                style={styles.textInput} 
                placeholder="Confrom Password" 
                secureTextEntry={true}
                onChangeText={cpassword => this.setState({ cpassword })}
                value={this.state.cpassword}/>
                <Text style={styles.textForget}>Forget Password ?</Text>
                </View>
                <View style={styles.viewLogin}>
                <TouchableOpacity style={styles.touchLog}
                onPress={this.signUp}>
                    <Text style={styles.textLogin}>
                    SIGNUP
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                <Text style={{fontStyle:"italic"}}>Already User? </Text>
                <Text 
                onPress={() => this.props.navigation.navigate("Login")}
                style={{textDecorationLine:"underline",color:"#7FBF3F",fontWeight:"bold"}}>Login</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  logo:{
    width:155,
    height:120,
    marginTop: 10,

},
    viewTop:{
        textAlign:"center"
    },
    viewText:{
        padding:20,
    },
    textInput:{
        marginTop: 5,
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
    },
    textLogin:{
      color: "white",
      fontSize: 16, 
      textAlign: "center" 
    },
    viewLogin:{
      alignItems: "center",
      justifyContent: "center",
    },
    safeAreaview:{
            flex: 1,
            backgroundColor:"#fff",
    },

})



              