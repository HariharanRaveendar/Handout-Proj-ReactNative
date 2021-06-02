import React from "react";
import { StyleSheet} from "react-native";
import {Container, Text, View, Header, Col, Row,Card, Left, Button, Icon,Title, Body, Content, Right} from "native-base";
import MapView, {Marker ,} from "react-native-maps";
import { OpenMapDirections } from 'react-native-navigation-directions';
import { AntDesign, Entypo } from '@expo/vector-icons';
export default class Maps extends React.Component {
        constructor(props){
        super(props);
        console.log("maps",props.route.params)
        this.state = {
            ready: false,
            error: null,
            latitude:props.route.params.lat,
            longitude:props.route.params.lng,
        }
    }
    callShowDirections = () => {
      const startPoint = {} 
    
      const endPoint = {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }
    
      const transportPlan = 'w';
    
      OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
        console.log(res)
      });
    }
    // componentDidMount(){
    //     let geoOptions = {
    //         enableHighAccuracy: true,
    //         timeOut: 1000,
    //         maximumAge: 60 * 60 * 24
    //     };
    //     this.setState({ready:false, error: null });
    //     navigator.geolocation.getCurrentPosition( this.geoSuccess, 
    //                                             this.geoFailure,
    //                                             geoOptions);
    // }
    // geoSuccess = (position) => {
    //     console.log(position.coords.latitude,position.coords.longitude);
        
    //     this.setState({
    //         ready:true,
    //         latitude:position.coords.latitude,
    //         longitude:position.coords.longitude
    //     })
    // }
    // geoFailure = (err) => {
    //     this.setState({error: err.message});
    // }
  render() {
    return (
      <Container>
                <Content>
                 <Header style={{backgroundColor:"#7FBF3F"}}>
                    <Row>
                        <Col size={1.5}>
                            <Left>
                                <Button transparent style={{color:'#00AEE0', marginTop:5,}} onPress={()=>{this.props.navigation.goBack()}}>
                                    <AntDesign name='arrowleft' size={24} color="white"/>
                                </Button>
                            </Left>
                        </Col>
                        <Col size={10.5}>
                            <Body style={{alignItems:"center", marginTop:15}}>        
                                <Title>Donator Location</Title>
                            </Body>
                        </Col>
                    </Row>
                </Header>
      <View style={{margin:20,width:320}}>
      <Card style={{height:400,alignSelf:"stretch"}}> 
          <MapView
              style={{ flex: 1}}
              initialRegion={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                  zoom:8
              }}
              >
              <Marker coordinate={{ latitude:this.state.latitude, longitude:this.state.longitude}} pinStyle="pin"  pinColor='#00AEE0'></Marker>
          </MapView>
      </Card>
  </View>
  <Button rounded block style={{backgroundColor:'#00AEE0', width:200, alignSelf:"center", marginVertical:20}} 
                         onPress={()=>{this.callShowDirections()}}>
                        <Text><Entypo name="paper-plane" style={{fontSize:18, color:"white"}}/> Show Direction</Text>
                    </Button> 
  </Content>
 </Container>
    );
  }
}

