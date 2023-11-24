import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateScreen = () => {
  const [image, setImage] = React.useState('https://i.imgur.com/pPmdmDV.png');

  const pickImage = async () => {
    const result = await launchImageLibrary(
      { mediaType: 'photo' },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setImage(response.assets[0].uri);
          console.log(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text
          style={{
            color: '#000000',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 22,
            marginTop: 30,
            alignSelf: 'center',
          }}
        >
          Create a Post
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: '5%' }}>
        <TouchableOpacity onPress={()=>pickImage()}>
          <Image source={{uri:image}} style={{width:'100%',aspectRatio:1.3,borderRadius:20}}/>
        </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', marginHorizontal: '5%' }}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ color: '#000000', fontFamily: 'Poppins-Medium', fontSize: 18 }}>
              Title
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TextInput
              style={{
                backgroundColor: '#dfdfdfde',
                borderRadius: 20,
                width: '100%',
                paddingLeft: 20,
                fontFamily: 'Poppins',
                color: '#000000',
              }}
            />
          </View>
           {/* Location URL */}
  <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ color: '#000000', fontFamily: 'Poppins-Medium', fontSize: 18 }}>Location URL</Text>
  </View>
  <View style={{ flexDirection: 'row', marginTop: 10 }}>
    <TextInput
      style={{
        backgroundColor: '#dfdfdfde',
        borderRadius: 20,
        width: '100%',
        paddingLeft: 20,
        fontFamily: 'Poppins',
        color: '#000000',
      }}
    />
  </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ color: '#000000', fontFamily: 'Poppins-Medium', fontSize: 18 }}>
              Description
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TextInput
              style={{
                backgroundColor: '#dfdfdfde',
                borderRadius: 20,
                width: '100%',
                fontFamily: 'Poppins',
                color: '#000000',
                paddingLeft: 20,
                textAlignVertical: 'top',
                height: 100, // Adjust the height for multiline input
              }}
              multiline
            />
          </View>
          {/* ...Other fields */}
          
        <View style={{flex:1,alignItems:'center',marginBottom:30}}>
        <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#000000',
              borderRadius: 20,
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#ffffff', fontFamily: 'Poppins', fontSize: 18 }}>Post</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateScreen;
