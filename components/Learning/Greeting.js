import React, { Component, } from 'react'
import { View, Text } from 'react-native'

class Greeting extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>Hello! {this.props.name}</Text>
      </View>
    )
  }
}

export default Greeting