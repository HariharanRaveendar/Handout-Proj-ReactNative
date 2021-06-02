import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions,AsyncStorage,Image } from 'react-native';
import { wDP, hDP } from '../../const/utils';
import AppColor from '../../const/Theme';
const { width } = Dimensions.get('window');
import Food from '../../assests/images/food.png';
export default class FoodCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[]
        };
    }
    onButtonPress = async(id)=> {
        var { navigation, ...props } = this.props;
            console.log(id);
            navigation.navigate('Foodinfo',{id:id})
    }
    render() {
        var {navigation,item, ...props } = this.props; 
        let sData = item
        return (
            <View >
                <View >
                  <TouchableOpacity style={styles.box} activeOpacity={1.0} onPress = {() => this.onButtonPress(sData.id)}>
                            <View style={styles.Profilehead}>
                                <View style={styles.Profile}>
                                <Image source={Food} style={{height: hDP('9%'), width: wDP('16%'),}}/>
                                </View>
                            </View>
                            <View style={styles.box1}>
                                <View style={styles.boxCon}>
                                    <Text style={styles.boxConTex}>Name: {sData.donatorName}</Text>
                                <Text style={styles.boxConTex}>Quatity:{sData.quantity}</Text>
                                    <Text style={styles.boxConTex}>Landmark:{sData.landMark} </Text>
                                </View>
                                <View style={styles.boxCon}>
                                    <Text style={styles.boxConTex}></Text>
                                    
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>                                        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        height: hDP('22.2%'),
        width: wDP('89%'),
        borderRadius: 25,
        backgroundColor: AppColor.colors.white,
        marginTop: wDP('15%'),
        shadowColor: AppColor.Shadow.color,
        shadowRadius: AppColor.Shadow.radius,
        shadowOpacity: AppColor.Shadow.opacity,
        elevation: 8,
    },
    box1: {
        height: hDP('15.2%'),
        width: wDP('83.5%'),
        borderRadius: 25,
        backgroundColor: AppColor.colors.Gray,
        opacity: 0.3,
        flex: 3,
        marginBottom: 5,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    boxCon: {
        padding: wDP('3%'),
    },
    boxConTex: {
        padding: wDP('1%'),
        fontSize: wDP('4%')
    },
    Profilehead: {
        alignItems:'flex-start',
        marginTop: hDP('-5.9%'),
        marginLeft:30
    },
    Profile: {
        marginRight: hDP('13%'),
        marginBottom: 5,
        height: hDP('10.2%'),
        width: wDP('19.5%'),
        borderRadius: 25,
        backgroundColor: AppColor.colors.Gray,
        shadowColor: AppColor.Shadow.color,
        shadowRadius: AppColor.Shadow.radius,
        shadowOpacity: AppColor.Shadow.opacity,
        elevation: 3,
        justifyContent:"center",
        alignItems:"center",
    },
    favbut: {

        marginBottom: 5,
        height: hDP('3.6%'),
        width: wDP('25.5%'),
        backgroundColor: AppColor.colors.voilet,
        opacity: 0.9,
        alignSelf: "flex-end",
        borderRadius: 10,
        alignItems:"center"

    }
});





