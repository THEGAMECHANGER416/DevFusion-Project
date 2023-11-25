import React,{useState,useEffect} from 'react';
import { ScrollView, View,StyleSheet, Text, ImageBackground } from 'react-native';
import Card from './components/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import SessionStorage from 'react-native-session-storage';

interface LoginProps {
  navigation: any;
  route: any;
}
function Home({navigation,route}:LoginProps) {
  const [pos, setpos] = useState([]);
  const [refreshing, setRefreshing] = useState(false)


  useEffect(()=>{
        let refe = refreshing
        let newRefres = !refe
        navigation.addListener('focus',()=>{
            setRefreshing(newRefres)
            
            // if (userId != null && token != null) {
            // }

        })
    },[])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = await SessionStorage.getItem('token');
        const response = await axios.get('https://4742-2401-4900-8094-22d1-4b1-d9b3-bed5-ddc4.ngrok-free.app/api/v1/post',
        {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setpos(response.data.results);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    navigation.addListener('focus',()=>{
                fetchPosts();
            })
  }, [navigation,route,]);

  return (
    <ImageBackground style={{"backgroundColor":"#ffffff01"}} source={require('../static/images/backgroundopacity.png')}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{fontSize: 30, marginBottom: 20, color:"#000000",fontFamily:'Poppins-Bold', alignSelf:'flex-start',marginLeft:20, marginTop:10}}>
        Hot issues today
      </Text>
      {pos.map((card) => (
        <View key={card.id} style={styles.cardContainer}>
           <TouchableOpacity key={card.id} onPress={() => navigation.navigate('Details', {card})}>
          <Card
            title={card.title}
            description={card.description}
            imageUrl={card.image}
            postedBy={card.postedBy}
            locationUrl={card.locURL}
            upvotes={card.upvotes}
            downvotes={card.downvotes}
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
