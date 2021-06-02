import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ViewPropTypes, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { wDP, hDP } from '../../const/utils';
import AppColor from '../../const/Theme';
const { width } = Dimensions.get('window');
export default class Category extends React.Component {
    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1) // scroll view position fix
    }

    render() {
        var {navigation, ...props } = this.props; 
        return (
            <View>
                <View style={styles.Outboxbody}>
                <ScrollView
                        ref={(scrollView) => { this.scrollView = scrollView; }}
                        style={styles.container}
                        //pagingEnabled={true}
                        horizontal={true}
                        decelerationRate={0}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}
                        showsHorizontalScrollIndicator={false}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}>                                           
                <View>
                    <TouchableOpacity style={styles.view} onPress={() => navigation.push('FoodList')} >
                        <Text style={styles.Text}>
                                Food
                        </Text>
                        <Image source={require('../../assests/images/food.png')} resizeMode="center" style={styles.Image}/>
                       
                    </TouchableOpacity>
                </View>
                <View>
                     <TouchableOpacity style={styles.view} onPress={() => navigation.push('ClothList')}>
                        <Text style={styles.Text}>
                               Cloths
                        </Text>
                        <Image source={require('../../assests/images/cloths.png')} resizeMode="center"style={styles.Image}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.view} onPress={() => navigation.push('BookList')}>
                        <Text style={styles.Text}>
                                Book
                            </Text>
                        <Image source={require('../../assests/images/book.png')} resizeMode="center" style={styles.ImageBook}/>
                        </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.view} onPress={() => navigation.push('Maps')}>
                        <Text style={styles.Text}>
                                Others
                            </Text>
                        <Image source={require('../../assests/images/others.png')} resizeMode="center" style={styles.ImageBook}/>
                        </TouchableOpacity>
                </View>
            </ScrollView>
       </View>
    </View>
    );
}}


const styles = StyleSheet.create({
   
    Text:{
        fontSize:hDP('2.9%'),
        marginTop:hDP('2%'),
        textShadowColor: 'gray', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 5, 
        
    },
    view: {
      
        borderRadius: 25,
        backgroundColor: AppColor.colors.white,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 6,
        width: wDP('33%'),
        margin: wDP('2%'),
        height: hDP('22%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection:"column",
      
    },
    Image:{
        width: wDP('25%'),
        height:hDP('26%'),
        marginTop:hDP('-6%')
    },
    ImageBook:{
        width: wDP('18%'),
        height:hDP('26%'),
        marginTop:hDP('-6%')
    },
});





