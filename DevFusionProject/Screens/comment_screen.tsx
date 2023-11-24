import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Card from './components/Card';
import { ScrollView, TextInput, TouchableWithoutFeedback, } from 'react-native-gesture-handler';

interface CommentProps {
    navigation: any;
    route: any;
}

function CommentScreen({ navigation, route }: CommentProps) {
    const [comment, setComment] = React.useState('');
    return (
        <>
            <ImageBackground style={{ flex: 1, "backgroundColor": "#ffffff01" }} source={require('../static/images/backgroundopacity.png')}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 20, width: 20, marginTop: 10, marginBottom: 10, marginLeft: 20 }}>
                            <Image source={require("../static/images/left-arrow.png")} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        {/* <View style={{"flex":1}}> */}
                        <Card title="Garbage in Hari Nagar" description="Over the past few weeks, I ve noticed an increase in the amount of garbage lining the streets and public spaces...." postedBy="Rahul" imageUrl="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/29/w1200X800/garbage1_2810chn_35.jpg" locationUrl="https://www.google.com/maps/place/Maharaja+Surajmal+Institute+Of+Technology/@28.6206855,77.0821542,15z/data=!4m6!3m5!1s0x390d04afb8dbcfe1:0xaff19e718be2136b!8m2!3d28.620685" />
                        {/* </View> */}
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#ffffff", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: "#000000", fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', marginLeft: 20, marginTop: 10 }}>
                            Comments
                        </Text>
                        <View style={{ height: 1, backgroundColor: "#000000", width: "90%", alignSelf: "center", marginBottom: 20 }}></View>
                        <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", marginBottom: 20, "borderBottomWidth": 1, "borderBottomColor": "#66666667" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 15, marginBottom: 5, color: "#000000", fontFamily: 'Poppins-Bold' }}>
                                    Rahul
                                </Text>
                                <Text style={{ fontSize: 15, marginBottom: 5, color: "#000000", fontFamily: 'Poppins-Regular' }}>
                                    Over the past few weeks, I ve noticed an increase in the amount of garbage lining the streets and public spaces....
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

            {/* Comment Box */}
            <View style={{ flexDirection: "row", width: "100%", backgroundColor: "#fff", alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
                <View style={{ "backgroundColor": "#f0f0f0", borderRadius: 10, marginBottom: 10, width: "90%", flexDirection: "row", alignItems: 'center' }}>
                    <TextInput
                        value={comment}
                        onChangeText={(comment) => setComment(comment)}
                        multiline={true} 
                        numberOfLines={4} 
                        placeholder="Write a comment"
                        placeholderTextColor={"#666"}
                        style={{ "width": "90%", color: "#000", "fontSize": 15, "fontFamily": "Poppins-Regular", "borderRadius": 20, "paddingLeft": 20, "paddingRight": 20, "paddingTop": 10, "paddingBottom": 10, "height": 50, "alignSelf": "center" }}
                    />
                    <TouchableWithoutFeedback onPress={() => { }}>
                        <Image source={require("../static/images/send.png")} style={{ height: 25, width: 25 }} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    )
}

export default CommentScreen;