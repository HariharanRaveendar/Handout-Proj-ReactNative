import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ViewPropTypes, TouchableOpacity, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import { wDP, hDP } from '../../const/utils';
import AppColor from '../../const/Theme';
import Food from '../../assests/images/food.png';
import handout from "../../assests/images/Handout.png";
import { Ionicons, AntDesign ,MaterialCommunityIcons} from '@expo/vector-icons';
const { width } = Dimensions.get('window');
export default class Foodinfo extends React.Component {
    constructor(props) {
        super(props)
        console.log("foodinfo",props.route.params)
        this.state = {
            userData: {},
        }
    }
    componentDidMount(){
        fetch(`http://handout.pythonanywhere.com/api/donate/GetFoodInfo/${this.props.route.params.id}`)
        .then(res=>res.json())
        .then(resjson=>{
            console.log("response",resjson)
            this.setState({userData:resjson})
            // this.state.userData=resjson
        })
    }
    render() {
        var { navigation, ...props } = this.props;
        return (
            <View>
                <View style={styles.topbox}>
                    <Image source={handout} style={{height: hDP('9%'), width: wDP('20%'),marginRight:wDP('8%'),marginTop:wDP('10%')}}/>
                </View>
                <View style={styles.bottombox}>
                    <View style={{justifyContent:"space-between"}}>
                        <View style ={styles.profile}>
                            <Image source={Food} style={{height: hDP('9%'), width: wDP('16%'),}}/>
                        </View>
                        <View style={{ marginTop: hDP('-6%'),marginLeft:wDP('29%'),alignItems:'flex-end'}}>
                        <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Maps",{lat:this.state.userData.latitude,lng:this.state.userData.longititude})} style={styles.touchLog}>
                        <Text style={styles.textLogin}><Ionicons name="ios-navigate" size={16} color="black" /> View Location</Text>
                     </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Donator Name:</Text>
                            <Text style={styles.text1}>{this.state.userData.DonarName}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Donar Mobile Number:</Text>
                            <Text style={styles.text1}>{this.state.userData.donatorMobile}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Location:</Text>
                            <Text style={styles.text1}>{this.state.userData.donationAddress}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>LandMark</Text>
                            <Text style={styles.text1}>{this.state.userData.landMark}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Quantity:</Text>
                            <Text style={styles.text1}>{this.state.userData.quantity}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Food Type:</Text>
                            <Text style={styles.text1}>{this.state.userData.foodType}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Food Name:</Text>
                            <Text style={styles.text1}>{this.state.userData.foodName}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Pickup Date:</Text>
                            <Text style={styles.text1}>{this.state.userData.pickupDate}</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Available Time:</Text>
                            <Text style={styles.text1}>{this.state.userData.preferedTime}</Text>
                        </View> 
                        <View style={{flexDirection:"row"}}>
                            <Text style={styles.text}>Description:</Text>
                            <Text style={styles.text1}>{this.state.userData.foodDescription}</Text>
                        </View>                     
                    </View>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    topbox: {
        width: wDP('100%'),
        height: hDP('20%'),
        backgroundColor: AppColor.colors.orange,
        opacity: 0.8,
        alignItems:'flex-end',
    },
    view: {
        width: wDP('90%'),
        margin: wDP('3%'),
        marginBottom: wDP('0%'),
        borderRadius: 10,
        flexDirection: "column",
    },
    bottombox: {
        width: wDP('100%'),
        height: hDP('82%'),
        backgroundColor: AppColor.colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: hDP('-3%'),
        alignItems: "center",
    },
    profile: {
        width: wDP('27%'),
        height: hDP('13%'),
        backgroundColor: AppColor.colors.Gray,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: hDP('-6%'),
        marginRight: wDP('65%')
    },
    info: {
        marginRight:100,
        marginLeft:50,
        paddingRight:30
    },
    text: {
        fontSize: 15,
        padding: 5,
        fontWeight:'bold',
        textTransform:"uppercase",
        textShadowColor: 'gray', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 5,
        color:'green'
    },
    text1: {
        fontSize: 20,
        paddingLeft:9, 
    },
    touchLog:{
        width: 150,
        backgroundColor: "#7FBF3F",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        marginBottom: 3,
      },
      textLogin:{
        color: "white",
        fontSize: 16, 
        textAlign: "center" 
      },
});





