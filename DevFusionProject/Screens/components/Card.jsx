import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Assuming MaterialIcons are installed and imported properly
import Comment from './Comment';

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
      <View style={{padding:6}}></View>
      <View style={styles.votes}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => {downvoted?setDownvoted(false):setUpvoted(!upvoted)}}>
              {upvoted?<Image style={{height:25,width:25,marginRight:5}} source={require('../../static/images/thumb_up.jpg')}/>:<Image style={{height:25,width:25,marginRight:5}} source={require('../../static/images/thumb_up_off_alt.jpg')}/>}
            </TouchableOpacity>
            <Text style={[styles.text,{fontSize:20}]}>0</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={() => {upvoted?setUpvoted(false):setDownvoted(!downvoted);}}>
            {downvoted?<Image style={{height:25,width:25,marginRight:5}} source={require('../../static/images/thumb_down.jpg')}/>:<Image style={{height:25,width:25,marginRight:5}} source={require('../../static/images/thumb_down_off_alt.jpg')}/>}
            </TouchableOpacity>
            <Text style={[styles.text,{fontSize:20}]}>0</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginLeft:'60%'}}>
            <MaterialIcons name="comment" size={25} color="#333" />
            {/* <Text style={[styles.text,{fontSize:20}]}>0</Text> */}
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0,
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
