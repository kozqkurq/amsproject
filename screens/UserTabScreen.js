import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth } from "aws-amplify";
import UserScreen from './UserScreen';
import ScannerScreen from './ScannerScreen';

const Tab = createBottomTabNavigator();

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const UserTabScreen = ( props ) => {
  props.navigation.setOptions({
    headerTitle: () => (
      <Image
          style={styles.hImg}
          source={
            require(
              '/Users/iidzukateru/Desktop/AmsProject/images/AMA_logo.png'
            )} />
    ),
    headerRight: () => (
      <View style={styles.hBtn}>
        <TouchableWithoutFeedback color="black" onPress={signOut}>
          <Text style={styles.hbtnTxt}>ログアウト</Text>
        </TouchableWithoutFeedback>
      </View>
    ),
  });
  useFocusEffect(
    React.useCallback(() => {
      console.log('UserTab Focus');

      return () => {
        console.log('UserTab UnFocus');
      };
    }, [])
  );
  return (
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >

        <Tab.Screen
          name="ユーザー"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" color="black" size={20}/>,
          }}        
        />
        <Tab.Screen
          name="QR読み取り
          "
          component={ScannerScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="scan-outline" color="black" size={20}/>,
          }}        
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  hBtn: {
    width: 80,
    height: 30,
    borderRadius: 7,
    backgroundColor: 'orange',
    marginLeft: 'auto',
    position: 'absolute',
    top: -20,
    right: -5,
  },
  hImg: {
    width: 140,
    height: 40,
  },
  hbtnTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 5,
    left: 3,
  }
});

export default UserTabScreen;