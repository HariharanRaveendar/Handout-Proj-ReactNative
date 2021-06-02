import React from "react";
import {View,Text,StyleSheet,AsyncStorage,Dimensions,ScrollView} from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon, Container} from 'native-base';
import { wDP, hDP } from '../../const/utils';
import "react-native-gesture-handler";
import {GetBookData} from '../GetData/GetData';
import BookCard from './bookcard';
const { width } = Dimensions.get('window');
export default class ClothList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        userData: [],
    }
}
componentDidMount = async () => {
    // setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1); // scroll view position fix
    const sData = await GetBookData();
    this.setState({ userData: sData });
    console.log(this.state.userData);
}
  render(){
    var {navigation, ...props } = this.props;
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Feed")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ width: 300, alignItems: 'center' }}>Book List</Title>
          </Body>
          <Right />
        </Header>
                    <ScrollView>
                         {
                this.state.userData.map(function(item,i) {    
                  return (
                    <React.Fragment key = {i}>
                        <View style={styles.view}>
                            <BookCard navigation = {navigation} item = {item}/>
                        </View>
                    </React.Fragment>
                  );   
              }.bind(this))
            }
               </ScrollView>
               </Container>

    );
  }
}


const styles = StyleSheet.create({
  view1:{
    flex:1,
    backgroundColor:"#fff",
  },
  view: {
    width: wDP('90%'),
    marginLeft:wDP('6%'),
    height: hDP('30%'),
    alignItems: 'center',
    marginBottom:wDP('5%')
    //paddingHorizontal : 30
},
container:{
  alignSelf:"stretch", height:hDP('47%'),  
},
})