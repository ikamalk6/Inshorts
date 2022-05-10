import {useWindowDimensions, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from '../Screens/TopNavigation';
import OptionScreen from '../Screens/OptionScreen';

const InshortsTab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'My Feed'},
    // {key: 'third', title: 'OptionScreen'},
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
    // third: OptionScreen,
  });

  return (
    // <View style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
      <TabView
        // style={{flexBasis: 750}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      />
    </SafeAreaView>
    // </View>
  );
};

export default InshortsTab;
