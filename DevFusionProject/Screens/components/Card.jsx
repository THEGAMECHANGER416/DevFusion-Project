import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assuming MaterialIcons are installed and imported properly

const Card = ({ title, description, imageUrl, postedBy }) => {
  const [upvotes, setUpvotes] = React.useState(0);
  const [downvotes, setDownvotes] = React.useState(0);
  const [upvoted, setUpvoted] = React.useState(false);
  const [downvoted, setDownvoted] = React.useState(false);
  return (
    <View style={styles.card}>
      {/* <View style={styles.header}> */}
        <Text style={styles.title}>{title}</Text>
      {/* </View> */}
      <Text style={[styles.text,{fontFamily:'Poppins-Light'}]}>{postedBy}</Text>
      <Text style={styles.description}>{description}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {/* <View style={styles.votes}>
          <TouchableOpacity onPress={() => {downvoted?setDownvoted(false):setUpvoted(!upvoted)}}>
            {upvoted?<Image source={require('https://static.vecteezy.com/system/resources/thumbnails/007/737/987/small/thumbs-up-symbol-icon-illustration-free-vector.jpg')}/>:<Image source={require('https://static.vecteezy.com/system/resources/thumbnails/007/737/987/small/thumbs-up-symbol-icon-illustration-free-vector.jpg')}/>}
          </TouchableOpacity>
          <Text style={styles.text}>0</Text>
          <TouchableOpacity onPress={() => {upvoted?setUpvoted(false):setDownvoted(!downvoted);}}>
          {downvoted?<Image source={require('https://static.vecteezy.com/system/resources/thumbnails/007/737/987/small/thumbs-up-symbol-icon-illustration-free-vector.jpg')}/>:<Image source={require('https://static.vecteezy.com/system/resources/thumbnails/007/737/987/small/thumbs-up-symbol-icon-illustration-free-vector.jpg')}/>}
          </TouchableOpacity>
          <Text style={styles.text}>0</Text>
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    marginLeft: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  votes: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom:10,
    fontFamily:'Poppins-Regular',
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontFamily:'Poppins-Medium',
    marginRight: 10,
    marginLeft: 0,
  }
});

export default Card;
