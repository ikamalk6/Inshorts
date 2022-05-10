import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
export default function OptionScreen({navigation}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabledHD, setIsEnabledHD] = React.useState(false);
  const [isEnabledNM, setIsEnabledNM] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchHD = () => setIsEnabledHD(previousState => !previousState);
  const toggleSwitchNM = () => setIsEnabledNM(previousState => !previousState);
  const [modalVisible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.arropts}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.arrow}
            source={require('../Screens/image/left.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{'Options'}</Text>
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <Text style={styles.line1}>{'Save Your Preferences'}</Text>
          <Text style={styles.line2}>{'Sign in to save your Bookmarks'}</Text>
          <View style={styles.logoAlign}>
            <TouchableOpacity style={styles.button}>
              <Text>{'Sign in'}</Text>
            </TouchableOpacity>
            <Image
              style={styles.logos}
              source={require('../assets/image/facebook.png')}
            />
            <Image
              style={styles.logos}
              source={require('../assets/image/google.png')}
            />
            <Image
              style={styles.logos}
              source={require('../assets/image/twitter.png')}
            />
            <Image
              style={styles.logos}
              source={require('../assets/image/cal.png')}
            />
            <Image
              style={styles.logos}
              source={require('../assets/image/apple.png')}
            />
          </View>
        </View>
        <View>
          <View style={styles.section2}>
            <Text style={styles.lang}>{'Language'}</Text>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
              }}>
              <Text>{'English ▼'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.section2}>
            <Text>{'Notifications'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View>
          <View style={styles.section2}>
            <Text>{'HD Images'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchHD}
              value={isEnabledHD}
            />
          </View>
        </View>
        <View>
          <View style={styles.section2}>
            <Text>{'Night Mode'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchNM}
              value={isEnabledNM}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.lasIitems}>{'Invite your friends'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lasIitems}>{'Rate the Inshorts app'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lasIitems}>{'Feedback'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lasIitems}>{'Terms and Conditions'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.lasIitems}>{'Privacy Policy'}</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => {
          setVisible(false);
        }}
        style={{flex: 1, marginTop: 800}}>
        <View style={{backgroundColor: '#FAF9F9', height: 200}}>
          <Text style={styles.language}>{'English'}</Text>
          <Text style={styles.language}>{'Hindi'}</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrow: {
    height: 20,
    width: 20,
  },
  text: {position: 'absolute', left: 160, fontSize: 16},
  arropts: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  line1: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  line2: {
    fontSize: 13,
    color: 'white',
    marginBottom: 18,
  },
  mainView: {backgroundColor: '#448EF6', padding: 20},
  button: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 1,
    margin: 6,
    // marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  logoAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logos: {
    height: 23,
    width: 23,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 6,
  },
  section2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    margin: 20,
    // alignItems: 'center',
    // padding: 10,
  },
  lang: {
    fontSize: 16,
  },
  language: {
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,
  },
  lasIitems: {
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 20,
    color: '#6E7DA2',
  },
});
