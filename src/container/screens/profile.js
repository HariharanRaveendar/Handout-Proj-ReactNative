import React from "react";
import {View,StyleSheet,Image,TouchableOpacity,AsyncStorage,Text} from "react-native";
import { Container, Header, Title, 
  Content,Label, Footer, FooterTab,Textarea,Picker,
  Item,Input, Button, Left, Right, Body, Icon, 
 } from 'native-base';
 import uimg from '../../assests/images/user.png';
 import { Ionicons, AntDesign ,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';
import handout from "../../assests/images/Handout.png";
import { wDP, hDP } from '../../const/utils';
export default class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      mobilenumber:'',
      email:'',
    }
  }
  logout = async()=>{
    await AsyncStorage.removeItem('name');
    await AsyncStorage.removeItem('userid');
    await AsyncStorage.removeItem('email');
    this.props.navigation.navigate("Login");
  }
  componentDidMount = async () => {
    let name = await AsyncStorage.getItem('name');
    let mobilenumber = await AsyncStorage.getItem('userid');
    let email = await AsyncStorage.getItem('email');
    this.setState({name:name,mobilenumber:mobilenumber,email:email})
    console.log(this.state.name,this.state.mobilenumber,this.state.email)
}
  render(){
    return(
      <View>
          <View style={styles.topbox}>
            <Image  source={handout} style={styles.logo} />
          </View>
          <View style={styles.bottombox}>
              <View style={{justifyContent:"space-between"}}>
                  <View style ={styles.profile}>
                      <Image source={uimg} style={{height: hDP('9%'), width: wDP('16%'),}}/>
                  </View>
                  <View style={{ marginTop: hDP('-6%'),marginLeft:wDP('29%'),alignItems:'flex-end'}}>
                     <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Maps",{lat:this.state.userData.latitude,lng:this.state.userData.longititude})} style={styles.touchLog}>
                        <Text style={styles.textLogin}><FontAwesome5 name="user-edit" size={15} color="black" /> Edit Profile</Text>
                     </TouchableOpacity>
                  </View>
              </View>
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
      width:102,
      height:80,
      marginTop: 10,
      marginRight:20,
  },
  topbox: {
    width: wDP('100%'),
    height: hDP('20%'),
    backgroundColor:'#42d4f5',
    opacity: 0.8,
    alignItems:'flex-end'
},
bottombox: {
  width: wDP('100%'),
  height: hDP('86%'),
  backgroundColor:'white',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  marginTop: hDP('-3%'),
  alignItems: "center",
  shadowColor: 'black',
  shadowRadius: 20,
  shadowOpacity: 1,
  elevation: 18,
},
profile: {
  width: wDP('27%'),
  height: hDP('13%'),
  backgroundColor: 'lightgray',
  borderRadius: 20,
  marginTop: hDP('-6%'),
  marginRight: wDP('65%'),
  shadowColor: 'black',
  shadowRadius: 20,
  shadowOpacity: 1,
  elevation: 18,
  justifyContent:'center',
  alignItems:'center'
},
touchLog:{
  width: 150,
  backgroundColor: "lightblue",
  padding: 10,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 3,
  borderTopLeftRadius:40,
  borderTopRightRadius:40,
  opacity:0.8
},
textLogin:{
  color: "black",
  fontSize: 16, 
  textAlign: "center",
  fontWeight:'bold'
},
})