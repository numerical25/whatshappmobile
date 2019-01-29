import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';
import ApiService from '../services/ApiService';

export default class CameraScreen extends React.Component {
  
  
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    recordText: "Record"
  };
  camera
  recording = false

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  
  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }
  
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      let permission = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
      if (permission.status === 'granted') {
        //Apple Saves to CameraRoll
        //CameraRoll.saveToCameraRoll(photo.uri, 'photo'); 
      }
    }
  };
  
  record = async () => {
    if(this.camera) {
      let permission = await Expo.Permissions.askAsync(Expo.Permissions.AUDIO_RECORDING);
      if (permission.status === 'granted') {
        if(this.recording == false) {
          this.recording = true
          this.setState({'recordText':'Recording...'})
          const { uri, codectype = "mp4" } = await this.camera.recordAsync();
          var data = {user_id:1,event_id:1, message:'Recorded Data',attachment_file:uri, codec:codectype};
          ApiService.saveSnap(data); 
          this.setState({'recordText':'Record'})
        } else {
          this.recording = false
          this.camera.stopRecording();  
        }  
      }
    }
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            ref={ref => { this.camera = ref; }}
            style={{ flex: 1 }} 
            type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems:'flex-end'
                }}
                onPress={this.flipCamera}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white',}}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems:'flex-end'
                }}
                onPress={this.record}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white',}}>
                  {' '}{this.state.recordText}{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems:'flex-end'
                }}
                onPress={this.snap}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white',}}>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
