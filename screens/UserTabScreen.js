import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from './UserScreen';
import ScannerScreen from './ScannerScreen';

const Tab = createBottomTabNavigator();

const UserTabScreen = () => {
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

// const styles = StyleSheet.create({
// });

export default UserTabScreen;