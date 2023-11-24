import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import InputField from './components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from './components/CustomButton';
import Register_screen from './Register_screen';



const Login_screen = () => {
  async function storeUserSession() {
    try {
        await EncryptedStorage.setItem(
            "user_session",
            JSON.stringify({
                token : "ACCESS_TOKEN",
            })
        );

        // Congrats! You've just stored your first value!
    } catch (error) {
      console.error("Error storing user session:", error);
    }
}
const retrieveUserSession = async () => {
  try {
    const session = await EncryptedStorage.getItem("user_session");
    console.log("Retrieved session:", session);

    if (session !== undefined) {
      console.log("aeaaiopn undefined");
    }
  } catch (error) {
    console.error("Error retrieving user session:", error);
  }
};
    const navigation = useNavigation();
    const handleSignUpPress = () => {
       
      };
    
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:"white"}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../static/images/hombre.gif')}
                style={{height: 300, width: 300, marginBottom: 20}}
              />
            </View>
    
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 24,
                color: '#333',
                marginBottom: 30,
              }}>
            Sign into your account!
            </Text>
    
            <InputField
              label={'Phone Number'}
              icon={
                <MaterialIcons
                name="phone"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
              }
              keyboardType="number-pad"
            />
    
    <InputField
              label={'One-Time-Password'}
              icon={
                <Ionicons
                name="key"
                size={20}
                color="#666"
                style={{marginRight: 5}}/>

              }
              inputType="number-pad"
              fieldButtonLabel={"Get OTP"}
              fieldButtonFunction={() => {}}
            />
            
            <CustomButton label={"Login"} onPress={() => {
        retrieveUserSession(); 
        navigation.navigate('Home');
      }} />
    
         
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 14,
                  color: '#666',
                }}>
               Need anything? touch this
              </Text>
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    color: '#40A2AF',
                    marginLeft: 5,
                  }}>
                  Help
                </Text>
              </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
      );
    };
    

export default Login_screen