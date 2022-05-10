import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

const NewsScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
      .then(resp => {
        console.log('Ar', resp.data.articles);
        setData(resp.data.articles);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.urlToImage}} style={styles.image} />
        <View style={styles.cardHead}>
          <Text style={{color: 'grey'}}> inshorts </Text>
        </View>
        <View>
          <Text numberOfLines={2} style={styles.heading}>
            {item.title}
          </Text>
          <Text numberOfLines={3} style={styles.description}>
            {item.description}
          </Text>
          <Text numberOfLines={3} style={styles.content}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        pagingEnabled={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.footer}>
        <Image
          style={styles.relevance}
          source={require('../assets/image/question.png')}
        />

        <Image
          style={styles.relevance}
          source={require('../assets/image/upload.png')}
        />
        <Image
          style={styles.relevance}
          source={require('../assets/image/book0.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // height: 800,
    // borderWidth: 2,
    // borderColor: 'red',
    height: height - 110,
    width: width,
    //flexWrap: 'wrap',
  },

  cardHead: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: 75,
    alignItems: 'center',
    padding: 7,
    paddingHorizontal: 9,
    borderRadius: 20,
    position: 'absolute',
    left: 15,
    top: 305,
  },
  image: {
    width: '100%',
    height: 320,
    marginBottom: 10,
  },
  heading: {
    fontWeight: '400',
    fontSize: 25,
    marginVertical: 10,
  },
  description: {
    fontSize: 20,
  },
  content: {
    // marginBottom: 189,
    fontSize: 18,
  },
  footer: {
    height: height / 13,
    position: 'absolute',
    bottom: 0,
    // backgroundColor: 'red',
    zIndex: 1,
    width: width,
    borderTopWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
  },
  relevance: {
    height: 30,
    width: 30,
  },
});

export default NewsScreen;
//testing git
