import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserTabScreen from './screens/UserTabScreen';
import ContactScreen from './screens/ContactScreen';
import AttendRateScreen from './screens/AttendRateScreen';
import TimeTableScreen from './screens/TimeTableScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="UserTab" component={UserTabScreen} options={{ title: 'ユーザ画面' }}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
        <Stack.Screen name="AttendRate" component={AttendRateScreen}/>
        <Stack.Screen name="TimeTable" component={TimeTableScreen}/>
      </Stack.Navigator>


      
    </NavigationContainer>
  );
}

