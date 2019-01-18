import React from 'react';
import { Video } from 'expo';
import {
  Image,
  Button,
  Text,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions
} from 'react-native';

export default class VideoScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Video',
  };
  
  render() {
    return (
      <View>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="stretch"
          shouldPlay
          isLooping
          style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height-100 }}
        />
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Open Navigation"
        />
      </View>
    );
  }
}
