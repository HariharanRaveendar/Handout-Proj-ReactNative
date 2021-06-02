import React, { Component } from 'react';
import {StyleSheet,ScrollView,View,Image,TouchableOpacity} from 'react-native';
import { Container, Header,Form, Title, 
  Content,Label, Footer, FooterTab,Textarea,Picker,
  Item,Input, Button, Left, Right, Body, Icon, 
  Text,DatePicker } from 'native-base';
import AppColor from '../../const/Theme';
import { Ionicons, AntDesign ,MaterialCommunityIcons} from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import handout from "../../assests/images/Handout.png";
export default class Others extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      chosenDate: new Date(),
      showAlert: false,
      title:'',
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
   hideAlert = () => {
    this.setState({
        showAlert: false
    });
};
showAlert = () => {
    this.setState({
        showAlert: true
    });
};
  render() {
  const { showAlert } = this.state;
  const { title } = this.state;
    return (
    <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Donate")}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ width: 300, alignItems: 'center' }}>Donate Food Details</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ScrollView>
            <Content style={{ padding: 20 }}>
              <Label style={{ marginLeft: 10, fontWeight: 'bold' }}>Name</Label>
              <Item style={{ marginTop: 8 }}>
                <Input placeholder='Donator Name' onChangeText={donarname => this.setState({ donarname })}/>
                <Icon name="person" style={{ fontSize: 30, color: 'black' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Mobile Number</Label>
              <Item style={{ marginTop: 8 }}>
                <Input placeholder='Donator Mobile Number' onChangeText={donarmobile => this.setState({ donarmobile })} />
                <Icon name="ios-call" style={{ fontSize: 30, color: 'green' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Pickup From</Label>
              <Item style={{ marginTop: 8 }}>
                <Input placeholder='Donation Address'onChangeText={donaraddress => this.setState({ donaraddress })} maxLength={200} />
                <Icon name="md-locate" style={{ fontSize: 30, color: 'gray' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Land Mark</Label>
              <Item style={{ marginTop: 8 }}>
                <Input placeholder='Ex. Adyar,Tambaram' onChangeText={landmark => this.setState({ landmark })} maxLength={200} />
                <Icon name="md-locate" style={{ fontSize: 30, color: 'gray' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}  >Food Type</Label>
              <Item>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  headerStyle={{ backgroundColor: "#b95dd3" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.foodtype}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Select food Type" value="key0" />
                  <Picker.Item label="Breakfast" value="Breakfast" />
                  <Picker.Item label="Launch" value="Launch" />
                  <Picker.Item label="Dinner" value="Dinner" />
                  <Picker.Item label="Beverages" value="Beverages" />
                  <Picker.Item label="Dairy Foods" value="Dairy" />
                </Picker>
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}  >Food Name</Label>
              <Item>
                <Input placeholder='Ex. Rice,Dhal,Curry etc' onChangeText={foodname => this.setState({ foodname })} maxLength={200} />
                <MaterialCommunityIcons name="food" style={{ fontSize: 30, color: 'orange' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }} >Quantity</Label>
              <Item>
                <Input placeholder='Maximum Quantity' onChangeText={quantity => this.setState({ quantity })} maxLength={200} />
                <Icon name="ios-restaurant" style={{ fontSize: 30, color: 'lightgreen' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Pickup Date</Label>
              <Item>
                <DatePicker
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  textStyle={{ color: "black" }}
                  placeHolderTextStyle={{ color: "gray" }}
                  placeHolderText="Select Date"
                  onDateChange={this.setDate}
                  disabled={false}
                  style={{ width: 300 }}
                />
                {/* <Icon name="ios-calendar"  /> */}
                <Ionicons name="ios-calendar" style={{ fontSize: 30, color: 'skyblue', marginLeft: 187 }}/>
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Prefered Time To collect</Label>
              <Item>
                <Input placeholder="Mention your prefered Time" onChangeText={prefertime => this.setState({ prefertime })} />
                <Icon name="md-timer" style={{ fontSize: 30, color: 'red' }} />
              </Item>
              <Label style={{ marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>Description</Label>
              <Textarea rowSpan={5} bordered placeholder="Ex. Description about foods" onChangeText={description => this.setState({ description })}/>
              <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title={title}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    style={{ position: 'absolute', zIndex: 1,backgroundColor:'red'}}
                    confirmText="Dismiss"
                    contentContainerStyle={{color:"white"}}
                    confirmButtonColor={AppColor.colors.violet}
                    overlayStyle={{backgroundColor:'transperent'}}
                    contentContainerStyle={{borderColor:'#8b16ff',borderWidth:1,backgroundColor:"white",}}

                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
              <View style={styles.touchView}>
                <TouchableOpacity onPress={this.donate}
                  style={styles.touchLog}>
                  <Text style={styles.textLogin}>
                    DONATE
                  </Text>
                </TouchableOpacity>
                </View>
            </Content>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 120,
    marginLeft: 85,
    marginTop: 15,
    marginRight: 100
  },
  touchLog: {
    width: 200,
    backgroundColor: "lightgreen",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  textLogin: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  touchView:{
    justifyContent:'center',
    alignItems:'center'
  }
})