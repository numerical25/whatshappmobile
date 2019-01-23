import React, { Component, } from 'react'
import { View, Text, TextInput } from 'react-native'
import  HamburgerMenuScreen  from './Menus/HamburgerMenuScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class KeyboardScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Keyboard Screen',
  };
  
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <HamburgerMenuScreen navigation={this.props.navigation}>
        <View>
          <Text>Welcome To Keyboard Screen</Text>
          <TextInput style={{
              borderColor:'red',
              borderWidth:1
            }} />
        </View>
      </HamburgerMenuScreen>
    )
  }
}