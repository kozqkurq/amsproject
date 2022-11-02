import React from 'react';
import { View,  Button, StyleSheet } from 'react-native';
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
    headerRight: () => (
      <View style={styles.Btn}>
        <Button title="ログアウト" color="black" onPress={signOut}/>
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
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" color="black" size={20}/>,
          }}        
        />
        <Tab.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name="scan-outline" color="black" size={20}/>,
          }}        
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  Btn: {
    width: 100,
    height: 36,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginLeft: 'auto',
    marginBottom: 20,
  },
});

export default UserTabScreen;