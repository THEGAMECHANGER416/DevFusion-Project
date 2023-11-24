import React from 'react';
import {Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import InputField from './components/InputField';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateScreen = () => {
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    const result = await launchImageLibrary(options={mediaType:'photo'});
    if (result.uri) {
      setImage(result.uri);
    }
  };
  
  return (
    <>
    <SafeAreaView style={{ flex: 1}}>
      <Text style={{color:"#000000",fontFamily:'Poppins',fontSize:30,marginTop:20,marginLeft:20}}>Create a Post</Text>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <TouchableOpacity title="Upload Photo" onPress={()=>pickImage()}>
          <Image source={require('../static/images/profile.png')} style={{height:50,width:50}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins',fontSize:20}}>Title</Text>
        <TextInput style={{borderBottomWidth:1,borderBottomColor:"#000000",marginLeft:20,width:200}}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins',fontSize:20}}>Description</Text>
        <TextInput style={{borderBottomWidth:1,borderBottomColor:"#000000",marginLeft:20,width:200}}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins',fontSize:20}}>Location URL</Text>
        <TextInput style={{borderBottomWidth:1,borderBottomColor:"#000000",marginLeft:20,width:200}}/>
      </View>
    </SafeAreaView>
    </>
  );
};

export default CreateScreen;