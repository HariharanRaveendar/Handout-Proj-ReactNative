import React from "react";
import {View,StyleSheet,Image,TouchableOpacity,Text} from "react-native";
import handout from "../../assests/images/Handout.png";
import { wDP, hDP } from '../../const/utils';
import cloths from '../../assests/images/cloths.png';
import food from '../../assests/images/food.png';
import book from '../../assests/images/book.png';
import others from '../../assests/images/others.png';
import Header from '../../const/header';
export default class Donate extends React.Component{
  render(){
    return(
        <View style={styles.view} >
          <Header/>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image source={handout} style={styles.logo} />
          </View>
          <View>
            <Text style={styles.textHeader}>SELECT CATEGORY</Text>
            <Text style={styles.textTop}>What would you like to donate today?</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex1:1,flexDirection:'row',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Food")} style={styles.touch}>
                  <Text style={styles.textTouch}>Foods</Text>
                  <Image source={food} resizeMode="center" style={styles.Image}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Cloths")} style={styles.touch}>
                  <Text style={styles.textTouch}>Cloths</Text>
                  <Image source={cloths} resizeMode="center" style={styles.Image}></Image>
              </TouchableOpacity>
            </View>
            <View style={{flex1:1,flexDirection:'row'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Books")}style={styles.touch}>
                  <Text style={styles.textTouch}>Books</Text>
                  <Image source={book} resizeMode="center" style={styles.ImageBook}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Others")} style={styles.touch}>
                  <Text style={styles.textTouch}>Others</Text>
                  <Image source={others} resizeMode="center" style={styles.ImageBook}></Image>
              </TouchableOpacity>
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
        width:150,
        height:110,
        marginTop: 50,
        justifyContent:'center',
        alignContent:'center',
    },
    textHeader:{
      textAlign:"center",
      fontWeight:'bold',
      color:'#44bcd8',
      fontSize:25,
      textShadowColor: 'gray', 
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 5,
    },
    textTop:{
      marginTop:0,
      textAlign:'center'
    },
    touch: {
      
      borderRadius: 25,
      backgroundColor:'#fff',
      shadowColor: 'black',
      shadowRadius: 10,
      shadowOpacity: 1,
      elevation: 6,
      width: wDP('29%'),
      margin: wDP('2%'),
      height: hDP('25%'),
      borderRadius: 10,
      alignItems: 'center',
      flexDirection:"column",
  },
    Image:{
      width: wDP('25%'),
      height:hDP('28%'),
      marginTop:hDP('-6%'),
      marginBottom:hDP('0%')
  },
  ImageBook:{
    width: wDP('20%'),
    height:hDP('30%'),
    marginTop:hDP('-6%'),
    marginBottom:hDP('0%')
},
  textTouch:{
    fontSize:hDP('2.3%'),
    marginTop:hDP('2%'),
    textShadowColor: 'gray', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 5,    
},
})