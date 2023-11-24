import React from 'react';
import { ScrollView, View, StyleSheet, Text, ImageBackground } from 'react-native';
import Card from './components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface LoginProps {
  navigation: any;
  route: any;
}
function Home({navigation,route}:LoginProps) {
  const cardData = [
    {
      id: 1,
      title: 'Garbage in Hari Nagar',
      description: 'Over the past few weeks, I ve noticed an increase in the amount of garbage lining the streets and public spaces....',
      postedBy: 'Rahul',
      locationUrl:'https://www.google.com/maps/place/Maharaja+Surajmal+Institute+Of+Technology/@28.6206855,77.0821542,15z/data=!4m6!3m5!1s0x390d04afb8dbcfe1:0xaff19e718be2136b!8m2!3d28.6206856!4d77.0924545!16s%2Fg%2F11flbt5gbf?entry=ttu',
      imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/29/w1200X800/garbage1_2810chn_35.jpg',
    },
    {
      id: 2,
      title: 'Vikaspuri garbage menace',
      description: 'Over the past few weeks, I ve noticed an increase in the amount of garbage lining the streets and public spaces. It....',
      postedBy: 'Harsh',
      locationUrl:'geo:37.484847,-122.148386',
      imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/29/w1200X800/garbage1_2810chn_35.jpg',
    },
    {
      id: 3,
      title: 'Tilak Nagar is wasteland',
      description: 'Over the past few weeks, I ve noticed an increase in the amount of garbage lining the streets and public spaces....',
      postedBy: 'Sakshi',
      locationUrl:'tel:+123456789',
      imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/10/29/w1200X800/garbage1_2810chn_35.jpg', // Replace with your image URL
    },
    // Add more card data as needed
  ];

  return (
    <ImageBackground style={{"backgroundColor":"#ffffff01"}} source={require('../static/images/backgroundopacity.png')}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{fontSize: 30, marginBottom: 20, color:"#000000",fontFamily:'Poppins-Bold', alignSelf:'flex-start',marginLeft:20, marginTop:10}}>
        Hot issues today
      </Text>
      {cardData.map((card) => (
        <View key={card.id} style={styles.cardContainer}>
           <TouchableOpacity key={card.id} onPress={() => navigation.navigate('Details', {card})}>
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            postedBy={card.postedBy}
            locationUrl={card.locationUrl}
          />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f4f6fc',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    marginBottom: 5,
  },
});

export default Home;
