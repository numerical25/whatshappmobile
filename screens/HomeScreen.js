import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser, Constants } from 'expo';

import { MonoText } from '../components/StyledText';
import  Greeting  from '../components/Learning/Greeting';
import  HamburgerMenuScreen  from './Menus/HamburgerMenuScreen';
import  ApiService from '../services/ApiService';
//import styles from '../assets/styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    this.madeUpVariable = "Made Up Value"
  }
  render() {
    return (
      <HamburgerMenuScreen navigation={this.props.navigation}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/robot-dev.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              {this._maybeRenderDevelopmentModeWarning()}

              <Text style={styles.getStartedText}>Get started by opening</Text>
              <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
              </View>
              <Greeting name="Anthony"></Greeting>
              <Text>{this.madeUpVariable}</Text>
              <Button
                onPress={() => this.props.navigation.toggleDrawer()}
                title="Go to notifications"
              />
              <Button
                onPress={() => this.props.navigation.navigate('Map')}
                title="Go to Maps"
              />
              <Text style={styles.getStartedText}>
                Change this text and your app will automatically reload. 
              </Text>
            </View>

            <View style={styles.helpContainer}>
              <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                <Text style={styles.helpLinkText}>Help, it didn’t automatically reload! {ApiService.getEndPoint()}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
            </View>
          </View>
        </View>
      </HamburgerMenuScreen>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
