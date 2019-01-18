import React, { Component } from 'react';
import {
  View ,
  TouchableOpacity,
  Text
} from 'react-native';
import { MapView } from 'expo';
import styles from '../assets/styles';

export default class MapScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Maps',
  };
  
  render() {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.props.navigation.toggleDrawer()}
          >
         <Text>Menu</Text>
        </TouchableOpacity>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 39.9547861,
            longitude: -82.8121191,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
