import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import SessionStorage from 'react-native-session-storage';

const CreateScreen = () => {
  const [image, setImage] = React.useState('https://i.imgur.com/pPmdmDV.png');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [locationURL, setLocationURL] = React.useState('');

  const pickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const postToServer = async () => {
    const token = await SessionStorage.getItem("token");
    console.log(token)
    try {
      var formData = new FormData();
      formData.append("image", {
        uri: image,
        type: 'image/jpeg', // Change the type based on the image type you are using
        name: 'photo.jpg', // Change the name as needed
        }
      );
      formData.append("title", title);
      formData.append("description", description);
      formData.append("locURL", locationURL);
      formData.append("userId", 2);
      const response = await axios.post('https://4742-2401-4900-8094-22d1-4b1-d9b3-bed5-ddc4.ngrok-free.app/api/v1/post',formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `token ${token}`,
        },
      });
      console.log('Post successful:', response.data);
    } catch (error) {
      console.error('Error posting to server:', error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ color: "#000000", fontFamily: 'Poppins-SemiBold', fontSize: 28, marginTop: 30, alignSelf: 'center' }}>Create a Post</Text>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <TouchableOpacity title="Upload Photo" onPress={() => pickImage()}>
          <Image source={{ uri: image }} style={{ height: 250, width: 345, borderRadius: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <Text style={{ color: "#000000", fontFamily: 'Poppins-Medium', fontSize: 20 }}>Title</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 0 }}>
        <TextInput
          style={{ marginLeft: 20, backgroundColor: "#dfdfdfde", borderRadius: 20, width: '90%', paddingLeft: 20, fontFamily: 'Poppins', color: '#000000' }}
          value={title}
          onChangeText={(title) => setTitle(title)}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <Text style={{ color: "#000000", fontFamily: 'Poppins-Medium', fontSize: 20 }}>Description</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 0 }}>
        <TextInput
          style={{ marginLeft: 20, backgroundColor: "#dfdfdfde", borderRadius: 20, width: '90%', fontFamily: 'Poppins', color: '#000000', paddingLeft: 20 }}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
        <Text style={{ color: "#000000", fontFamily: 'Poppins-Medium', fontSize: 20 }}>Location URL</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 0 }}>
        <TextInput
          style={{ marginLeft: 20, backgroundColor: "#dfdfdfde", borderRadius: 20, width: '90%', paddingLeft: 20, fontFamily: 'Poppins', color: '#000000' }}
          value={locationURL}
          onChangeText={(locationURL) => setLocationURL(locationURL)}
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 20, marginLeft: 20, backgroundColor: '#000000', borderRadius: 20, width: '90%', height: 50, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => postToServer()}
      >
        <Text style={{ color: '#ffffff', fontFamily: 'Poppins', fontSize: 20 }}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateScreen;
