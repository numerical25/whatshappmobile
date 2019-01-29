import React, { Component } from 'react';
import {
  View ,
  Text,
} from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import { Marker } from 'react-native-maps';
import styles from '../assets/styles';
import { createStackNavigator } from "react-navigation";

import  ApiService from '../services/ApiService';
import  HamburgerMenuScreen  from './Menus/HamburgerMenuScreen';
import  EventScreen  from './event/EventScreen';
import  EventFeedScreen  from './event/EventFeedScreen';

class MapScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Maps',
    header: null,
  };

  state = {
    location: null,
    errorMessage: null,
    markers: [],
    venues:[],
    events:[],
    mapMessage: "Loading..."
  };
  
  constructor(props) {
    super(props)
  }

  handleVenues = (data) => {
    this.setState({venues:data.data});
  }

  handleTrendingEvents = (data) => {
    this.setState({events:data.data});
    this.setState({mapMessage:"Map Data Retrieved."})
  }

  componentWillMount() {
    this._getLocationAsync();
    this.setState({markers:ApiService.getFakeMarkers()});
    //ApiService.getVenues(this.handleVenues);
  }

  // componentWillMount() {
  //   if (Platform.OS === 'android' && !Constants.isDevice) {
  //     this.setState({
  //       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
  //     });
  //   } else {
  //     this._getLocationAsync();
  //   }
  // }

  _getLocationAsync = async () => { 
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.setState({ location });
    ApiService.getTrendingEvents(location.coords,this.handleTrendingEvents);
  };
  
  render() {
    if(this.state.events.length && this.state.location) {
      return (
        <HamburgerMenuScreen navigation={this.props.navigation}>
        <View style={{flex:1}}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
              {this.state.events.map(marker => (
                <Marker 
                  key={marker.id}
                  coordinate={{
                    latitude:parseFloat(marker.attributes.latitude),
                    longitude:parseFloat(marker.attributes.longitude)
                  }}
                  title={marker.attributes.name}
                  description={marker.attributes.address}
                  onCalloutPress={() => this.props.navigation.navigate('Event',{
                    venue:marker
                  })}>
                  <MapView.Callout>
                      <View>
                        <Text>{marker.attributes.name}</Text>
                      </View>
                  </MapView.Callout>
                </Marker>
              ))}
          </MapView>
        </View>
        </HamburgerMenuScreen>
      );
    } else {
      return (
        <Text>{this.state.mapMessage}</Text>
      );
    }
  }
}

export default createStackNavigator({
  Map: {
    screen: MapScreen
  },
  Event: {
    screen: EventScreen
  },
  EventFeed: {
    screen: EventFeedScreen
  }
});