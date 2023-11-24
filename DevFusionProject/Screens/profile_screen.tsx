import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import { WebView } from 'react-native-webview';

const ProfileScreen = () => {
  return (
    <>
    <ImageBackground source={require('../static/images/profile.png')} style={{width: '100%', height: '100%'}}>
    </ImageBackground>
    </>
  );
};

export default ProfileScreen;