import React from "react";
import {View,StyleSheet,Image,TouchableOpacity,Text,AsyncStorage,ScrollView,Dimensions} from "react-native";
import FoodCard from './foodcard';
import handout from "../../assests/images/Handout.png";
import Header from '../../const/header';
import Back from '../../const/back';
import Category from './category';
import { wDP, hDP } from '../../const/utils';
import AppColor from '../../const/Theme';
import {GetFoodData} from '../GetData/GetData';
const { width } = Dimensions.get('window');
export default class Feed extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
        }
    }
    componentDidMount = async () => {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1); // scroll view position fix
        const sData = await GetFoodData();
        this.setState({ userData: sData });
        console.log(this.state.userData);
    }

  render(){
    var {navigation, ...props } = this.props;
    return(
        <View>
          <View>
          <Header/>
          </View>
          <View style={{zIndex:0}}>
            <Back></Back>
          </View>
          <View style={{marginTop:hDP('-30%')}}>
             <Category navigation = {navigation}></Category>
          </View>
          <View style={styles.Outboxbody}>
                    <ScrollView
                        ref={(scrollView) => { this.scrollView = scrollView; }}
                        style={styles.container}
                        vertical={true}
                        decelerationRate={0}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}>
                         {
                this.state.userData.map(function(item,i) {    
                  return (
                    <React.Fragment key = {i}>
                        <View style={styles.view}>
                            <FoodCard navigation = {navigation} item = {item}/>
                        </View>
                    </React.Fragment>
                  );   
              }.bind(this))
            }
                <View style={styles.view} >
                    <TouchableOpacity style={styles.findbox}>
                               <Text style={styles.textFind} >SEE MORE</Text>
                    </TouchableOpacity>    
                        </View>                 
                    </ScrollView>
                </View>         
        </View>
    );
  }
}
const styles = StyleSheet.create({
    view1:{
        flex:1,
        backgroundColor:"#fff",
    },
    logo:{
        width:102,
        height:80,
        marginTop: 50,
    },

    Text: {
      fontSize: hDP('2.9%'),
      marginTop: hDP('2%'),
      textShadowColor: 'gray',
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 5,
  },
  view: {
      width: wDP('90%'),
      margin: wDP('6%'),
      marginBottom:wDP('12%'),
      height: hDP('20%'),
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: "space-between",
      flexDirection: "column",
      //paddingHorizontal : 30
  },
  Image: {
      width: wDP('32%'),
      height: hDP('28%'),
      marginTop: hDP('-3%')
  },
  container:{
      alignSelf:"stretch", height:hDP('47%'),  
  },
  findbox:{
    width: 200,
    backgroundColor:"green",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 25,
    marginBottom: 20,
    opacity:0.6
  },
  textFind: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
})