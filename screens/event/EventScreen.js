import React, { Component, } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
export default class HelloWorld extends Component {
  static navigationOptions = {
    drawerLabel: 'Keyboard Screen',
  };

  state = {
    venue: []
  };
  
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({venue: this.props.navigation.getParam('venue')});
  }
  
  
  render() {
    if(this.state.venue) {
      return (
        <View>
          {this.state.venue.relationships.event.map(event => (
            <View key={event.data.id}>
              <Text>{event.data.attributes.name}</Text>
              <Text>{event.data.attributes.description}</Text>
              <Button title="View Event Feed" onPress={() => this.props.navigation.navigate('EventFeed',{
                    event_id:event.data.id
                  })}></Button>
            </View>
          ))}
        </View>
      )
    }
    return (
        <View>
          <Text>Loading...</Text>
        </View>
    )
  }
}