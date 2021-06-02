import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ViewPropTypes, TouchableOpacity, ScrollView, Dimensions,AsyncStorage} from 'react-native';
import { wDP, hDP } from '../const/utils';
import AppColor from '../const/Theme';
const { width } = Dimensions.get('window');
export default class Back extends React.Component {
    render() {
        return (
            <View style={styles.backbox}>
                <View style={styles.backbox1}></View> 
            </View>
        );
    }

}

const styles = StyleSheet.create({

    backbox:{
        zIndex: 1
        
    },
    backbox1:{
        backgroundColor:'green',
        width:wDP('100%'),
        height:hDP('42%'),
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
        opacity:0.6,
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 18,
    }
});





