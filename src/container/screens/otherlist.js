import React from "react";
import {View,Text,StyleSheet,AsyncStorage} from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon} from 'native-base';
import "react-native-gesture-handler";

export default class Otherslist extends React.Component{
  render(){
    var {navigation, ...props } = this.props;
    return(
      <View style={styles.view}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Feed")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ width: 300, alignItems: 'center' }}>others List</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:"#fff",
  }
})