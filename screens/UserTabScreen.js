import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth } from "aws-amplify";

import StudentScreen from './StudentScreen';
import ScannerScreen from './ScannerScreen';

const Tab = createBottomTabNavigator();

async function getEMail() {
  const { attributes } = await Auth.currentAuthenticatedUser();
  console.log(attributes)
  // const mail = attributes.email
  // const name = attributes.name
}
getEMail()

const UserTabScreen = ( props ) => {
  props.navigation.setOptions({
    headerTitle: () => (
      <Image
        style={styles.hImg}
        source={require('../images/AMA_logo.png')}
      />
    ),
    headerRight: () => (
      <View style={styles.hBtn}>
        <TouchableWithoutFeedback color="black" onPress={signOut}>
          <Text style={styles.hbtnTxt}>ログアウト</Text>
        </TouchableWithoutFeedback>
      </View>
    ),
  });
  return (
      <Tab.Navigator 
        screenOptions={{ headerShown: false,}}
      >
        {/* {name == "Student" && <Tab.Screen>{・・・}</Tab.Screen>} */}
        <Tab.Screen
          name="ユーザー"
          component={StudentScreen}
          options={{
            tabBarIcon: ({ focused }) => <
              Ionicons name="person-circle-outline" 
              color="black" 
              size={20}
            />,
          }}        
        />
        <Tab.Screen
          name="QR読み取り"
          component={ScannerScreen}
          options={{
            tabBarIcon: ({ focused }) => <
              Ionicons name="scan-outline" 
              color="black" 
              size={20}
            />,
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

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

export default UserTabScreen;