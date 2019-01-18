import React, { Component, } from 'react'
import { View, Text, TextInput } from 'react-native'

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
      <View>
        <Text>Welcome To Keyboard Screen</Text>
        <TextInput />
      </View>
    )
  }
}