import React from 'react';
import {Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import InputField from './components/InputField';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreateScreen = () => {
  const [image, setImage] = React.useState('https://reactnative.dev/img/tiny_logo.png');

  const pickImage = async () => {
    const result = await launchImageLibrary(options={mediaType:'photo'},(response) => {
      if (response.didCancel){
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else{
        setImage(response.assets[0].uri);
        console.log(response.assets[0].uri)
      }
    });
  };
  
  return (
    <>
    <ScrollView style={{ flex: 1}}>
      <Text style={{color:"#000000",fontFamily:'Poppins-SemiBold',fontSize:28,marginTop:30,alignSelf:'center'}}>Create a Post</Text>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <TouchableOpacity title="Upload Photo" onPress={()=>pickImage()}>
          <Image source={{uri:image}} style={{height:250,width:345,borderRadius:20}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins-Medium',fontSize:20}}>Title</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:0,marginLeft:0}}>
        <TextInput style={{marginLeft:20, backgroundColor:"#dfdfdfde", borderRadius:20, width:'90%', paddingLeft:20,fontFamily:'Poppins',color:'#000000'}}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins-Medium',fontSize:20}}>Description</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:0,marginLeft:0}}>
        <TextInput style={{marginLeft:20, backgroundColor:"#dfdfdfde", borderRadius:20, width:'90%',fontFamily:'Poppins',color:'#000000', paddingLeft:20}}/>
      </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
        <Text style={{color:"#000000",fontFamily:'Poppins-Medium',fontSize:20}}>Location URL</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:0,marginLeft:0}}>
        <TextInput style={{marginLeft:20, backgroundColor:"#dfdfdfde", borderRadius:20, width:'90%',paddingLeft:20,fontFamily:'Poppins',color:'#000000'}}/>
      </View>
      <TouchableOpacity style={{marginTop:20,marginLeft:20,backgroundColor:'#000000',borderRadius:20,width:'90%',height:50,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#ffffff',fontFamily:'Poppins',fontSize:20}}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
    </>
  );
};

export default CreateScreen;