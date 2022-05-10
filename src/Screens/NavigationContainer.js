import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import OptionScreen from './OptionScreen';
import DiscoverScreen from './DiscoverScreen';
import TopNavigation from './TopNavigation';
import InshortsTab from '../Home/InshortsTab';
import NewsScreen from './NewsScreen';

const Stack = createNativeStackNavigator();

export default function NaigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inshorts"
          component={InshortsTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discover"
          component={TopNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OptionScreen"
          component={OptionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
