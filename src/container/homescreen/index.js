import React from "react";
import {View,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';
import Signin from "../signInscreen/signin";
import Signup from "../signupscreen/signup";
import Donate from "../screens/donate";
import Profile from "../screens/profile";
import Feed from "../screens/feed";
import Cloths from '../Donates/cloths';
import Food from '../Donates/foods';
import Books from '../Donates/book';
import Others from '../Donates/others';
import FoodList from '../screens/foodlist';
import ClothList from '../screens/clothlist';
import BookList from '../screens/booklist';
import Otherslist from '../screens/otherlist';
import Foodinfo from '../screens/foodinfo';
import Maps from '../mainscreen/main';
import ClothInfo from '../screens/clothinfo';
import Bookinfo from '../screens/bookinfo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainBottomNav( ) {
  return (
    <Tab.Navigator initialRouteName="Feed" tabBarOptions={{activeTintColor: 'black',showLabel: false,}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color, size }) => (
             <Ionicons name="ios-add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default class HomeScreen extends React.Component{
    async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
  }
  render(){
    return(
    <View style={{flex:1,backgroundColor:"red"}}>
          <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={MainBottomNav} />
            <Stack.Screen name="Food" component={Food}/>
            <Stack.Screen name="Cloths" component={Cloths}/>
            <Stack.Screen name="Books" component={Books}/>
            <Stack.Screen name="Others" component={Others}/>
            <Stack.Screen  name="FoodList" component={FoodList}/>
            <Stack.Screen  name="ClothList" component={ClothList}/>
            <Stack.Screen  name="BookList" component={BookList}/>
            <Stack.Screen  name="Otherslist" component={Otherslist}/>
            <Stack.Screen  name="Foodinfo" component={Foodinfo}/>
            <Stack.Screen  name="Maps" component={Maps}/>
            <Stack.Screen  name="ClothInfo" component={ClothInfo}/>
            <Stack.Screen  name="Bookinfo" component={Bookinfo}/>
            
            
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}