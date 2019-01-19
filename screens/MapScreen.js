import React, { Component } from 'react';
import {
  View ,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { Marker } from 'react-native-maps';
import styles from '../assets/styles';
import  ApiService from '../services/ApiService';
import  HamburgerMenuScreen  from './HamburgerMenuScreen';

export default class MapScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Maps',
  };

  state = {
    location: null,
    errorMessage: null,
    markers: [],
    venues:[]
  };

  constructor(props) {
    super(props)
  }

  handleVenues = (data) => {
    this.setState({venues:data});
  }

  componentWillMount() {
    this._getLocationAsync();
    this.setState({markers:ApiService.getFakeMarkers()});
    ApiService.getVenues(this.handleVenues)
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
  };
  
  render() {
    if(this.state.venues.length && this.state.location) {
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
              {this.state.venues.map(marker => (
                <Marker 
                  key={marker.id}
                  coordinate={{
                    latitude:parseFloat(marker.latitude),
                    longitude:parseFloat(marker.longitude)
                  }}
                  title={marker.name}
                  description={marker.address}
                />
              ))}
          </MapView>
        </View>
        </HamburgerMenuScreen>
      );
    } else {
      return (
        <Text>Loading...</Text>
      );
    }
  }
}
