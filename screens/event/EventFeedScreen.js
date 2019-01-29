import React, { Component, } from 'react'
import { View, Text, TextInput, Button } from 'react-native'


export default class EventFeedScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Keyboard Screen',
  };

  state = {
    event_id: []
  };
  
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({event_id: this.props.navigation.getParam('event_id')});
  }
  
  
  render() {
      return (
        <View>
          <Text>This is the event feed</Text>
        </View>
      )
  }
}