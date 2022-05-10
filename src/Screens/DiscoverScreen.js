import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');

const DiscoverScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.combo}>
        <Image
          style={styles.search}
          source={require('/Users/admin/Desktop/ReactNative/Skype/src/assets/image/search.png')}
        />
        <TextInput style={styles.bar} placeholder="Search"></TextInput>
      </View>
      <ScrollView>
        <View style={styles.top}>
          <TouchableOpacity style={styles.q1}>
            <Image
              style={styles.puzzle}
              source={require('/Users/admin/Desktop/ReactNative/Skype/src/assets/image/puzzle.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.q1}>
            <Image
              style={styles.quote}
              source={require('../assets/image/quote.jpeg')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.category}>CATEGORIES</Text>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.scrollstyle}
              onPress={() => navigation.navigate('NewsScreen')}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/feed.jpeg')}
              />
              <Text style={styles.sctext}>{'MY FEED'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.scrollstyle}
              onPress={() => navigation.navigate('NewsScreen')}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/news.jpeg')}
              />
              <Text style={styles.sctext}>{'ALL NEWS'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollstyle}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/star.jpeg')}
              />
              <Text style={styles.sctext}>{'TOP STORIES'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollstyle}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/trend.jpeg')}
              />
              <Text style={styles.sctext}>{'TRENDING'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollstyle}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/book.jpeg')}
              />
              <Text style={styles.sctext}>{'BOOKMARKS'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollstyle}>
              <Image
                style={styles.catBlocks}
                source={require('../assets/image/hide.jpeg')}
              />
              <Text style={styles.sctext}>{'UNREAD'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={styles.category}>SUGGESTED TOPICS</Text>

        <View style={styles.tiles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/india.jpeg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/business.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/politics.jpeg')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tiles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/sports.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/tech.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/startups.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tiles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/entertainment.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/hatke.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/international.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tiles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/automatic.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/science.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/travel.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.tiles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image style={styles.imgg} source={require('./image/misc.jpeg')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/fashion.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.imgg}
              source={require('./image/education.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  combo: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    margin: 10,
    padding: 6,
    borderRadius: 10,
    width: '95%',
    alignItems: 'center',
  },
  bar: {
    // margin: 10,
    // padding: 6,
    width: '90%',
    borderRadius: 10,
  },

  search: {
    height: 20,
    width: 20,
    color: 'lightgrey',
    marginRight: 5,
  },
  quote: {
    marginLeft: 10,
    height: 90,
    width: 170,
    borderRadius: 10,
  },
  puzzle: {
    marginLeft: 10,
    height: 90,
    width: 170,
    borderRadius: 10,
  },
  q1: {
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top: {
    flexDirection: 'row',
  },
  category: {
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    // color: 'grey',
  },
  catBlocks: {
    height: 60,
    width: 60,
  },
  imgg: {
    height: height / 6,
    width: width / 4,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'skyblue',

    margin: 10,
  },
  tiles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scrollstyle: {marginHorizontal: 15},
  sctext: {fontSize: 11, textAlign: 'center'},
});

export default DiscoverScreen;
