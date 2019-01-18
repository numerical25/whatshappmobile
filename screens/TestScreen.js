import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

export default class TestUIScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Test UI',
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{paddingTop:60}}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Text>Menu</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, flexDirection:"row", backgroundColor:'red'}}>
          <View style={{flex:1, backgroundColor:'red'}}>
          </View>
          <View style={{flex:1, backgroundColor:'blue'}}>
          </View>
          <View style={{flex:1, backgroundColor:'green'}}>
          </View>
        </View>
        <View style={{flex:1, backgroundColor:'blue'}}>
        </View>
        <View style={{flex:1, backgroundColor:'green'}}>
        </View>
      </View>
    );
  }
}