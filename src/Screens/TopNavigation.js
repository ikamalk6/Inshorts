import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TopNavigation = ({index, setIndex}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.head}>
        {index === 0 ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('OptionScreen')}
            style={styles.left}>
            <Image
              style={styles.setting}
              source={require('./image/setting.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.leftDiscoverStyl}
            onPress={() => setIndex(index === 0 ? 1 : 0)}>
            <Image style={styles.lefti} source={require('./image/left.png')} />
            <Text style={{...styles.text}}>Discover</Text>
          </TouchableOpacity>
        )}

        <Text style={{...styles.center}}>{index ? 'My Feed' : 'Discover'}</Text>

        {index ? (
          <TouchableOpacity
            style={styles.right}
            // onPress={() => fetchNews('general')}
            onPress={() => navigation.navigate('NewsScreen')}>
            <Image
              style={styles.reloadi}
              source={require('./image/reload.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.rightarrowStyl}
            onPress={() => setIndex(index === 0 ? 1 : 0)}>
            <Text style={{...styles.myfeedtext}}>My Feed</Text>
            <Image
              style={styles.righti}
              source={require('./image/right.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  left: {
    flexDirection: 'row',
    left: 10,
  },
  rightarrowStyl: {
    flexDirection: 'row',
    right: 5,
  },
  leftDiscoverStyl: {
    flexDirection: 'row',
  },
  center: {
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
    // borderWidth: 2,
    position: 'absolute',
    left: 160,
  },
  text: {
    fontSize: 16,
    left: 10,
  },
  myfeedtext: {
    fontSize: 16,
  },
  setting: {
    height: 16,
    width: 16,
    color: '#007FFF',
  },
  reloadi: {
    height: 18,
    width: 18,
    color: '#007FFF',
    right: 10,
  },

  righti: {
    height: 18,
    width: 18,
    //alignItems: 'flex-end',
  },
  lefti: {
    height: 18,
    width: 18,
    color: '#007FFF',
    left: 5,
  },
});

export default TopNavigation;
