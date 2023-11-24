import React from 'react';
import {Text, View, Image} from 'react-native';
import { WebView } from 'react-native-webview';

const ProfileScreen = () => {
  return (
    <>
    <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    </>
  );
};

export default ProfileScreen;