import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    // Assuming avatar image is provided as a local image in your project


    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ "color": "#000", fontWeight: "600", fontSize: 22, fontFamily: 'Poppins-Bold' }}>Profile Details</Text>
                </View>
                <View style={{ backgroundColor: "green", marginTop: 20, height: 120, width: 120, borderRadius: 100, overflow: "hidden", alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ height: 120, width: 120, borderRadius: 50 }} source={require('../static/images/hombre.gif')} />
                </View>
                {/* Text Inputs for user details */}
                <View style={{
                    borderRadius: 20, marginTop: 20, alignItems: 'center', 'justifyContent': 'center', overflow: 'hidden',
                    borderColor: '#666',
                    borderWidth: 1, width: '80%'
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        value={name}
                        onChangeText={(name) => setName(name)}
                        placeholderTextColor={"#666"}
                    />
                </View>
                <View style={{
                    borderRadius: 20, marginTop: 20, alignItems: 'center', 'justifyContent': 'center', overflow: 'hidden',
                    borderColor: '#666',
                    borderWidth: 1, width: '80%'
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="This is your Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholderTextColor={"#666"}
                    />
                </View>
                <View style={{
                    borderRadius: 20, marginTop: 20, alignItems: 'center', 'justifyContent': 'center', overflow: 'hidden',
                    borderColor: '#666',
                    borderWidth: 1, width: '80%'
                }}>
                    <Text style={styles.input}>
                    {}
                   </Text>
                </View>
                <View style={{
                    borderRadius: 20, marginTop: 20, alignItems: 'center', 'justifyContent': 'center', overflow: 'hidden',
                    borderColor: '#666',
                    borderWidth: 1, width: '80%'
                }}>
                    <TextInput
                        style={[styles.input, styles.aboutInput]} 
                        placeholder="This is your description"
                        value={about}
                        onChangeText={(text) => setAbout(text)}
                        multiline={true} 
                        numberOfLines={3} 
                        placeholderTextColor="#666"
                    />
                </View>
                <TouchableOpacity style={{  backgroundColor:'black',borderRadius: 25, marginTop: 20,paddingVertical:7, alignItems: 'center', 'justifyContent': 'center', overflow: 'hidden',
                    borderColor: '#666',
                    borderWidth: 1, width: '50%'}}>
                        <Text style={{color:'white',fontFamily:"Poppins-Bold",fontSize:18}}>Save</Text>

                </TouchableOpacity>

                {/* Other elements */}
                {/* ... */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    banner: {
        height: 110,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 40, // Making the avatar round by setting half of the width and height as borderRadius
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: -40, // Adjust to align avatar properly
    },
    input: {
        width: '100%',
        paddingHorizontal: 20,
        color: '#666',
        fontFamily: 'Poppins-Bold'
    },
    input1: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 20,
        color: '#666',
        fontFamily: "Poppins-Bold"
    },
    aboutInput: {
        height: 80, 
        textAlignVertical: 'top', 
        fontFamily:'Poppins-Bold',
        color:'black'
    },
});

export default ProfileScreen;
