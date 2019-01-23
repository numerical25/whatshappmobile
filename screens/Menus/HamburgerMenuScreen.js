import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native'
import { WebBrowser } from 'expo';
//import styles from '../assets/styles';

const cust_styles = StyleSheet.create({
  header: {
    backgroundColor:"#c0392b",
    height: 56,
    paddingTop: 10
  },
  headerText: {
    color:"#fff",
    fontSize:18,
    fontWeight: "200"
  },
  box: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 50
  },
  text: {
    color: "white",
    fontSize: 20
  }
});

export default class HamburgerMenuScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Hambuger Menu',
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{paddingTop:30}}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image 
            style={{width: 50, height: 50}}
            source={require('../../assets/images/hamburger_1.png')} />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </View>
    );
  }
}