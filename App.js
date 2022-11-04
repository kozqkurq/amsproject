import React, { useState } from 'react';
import { StyleSheet, View, Image, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserTabScreen from './screens/UserTabScreen';
import ContactScreen from './screens/ContactScreen';
import AttendScreen from './screens/AttendScreen';
import AttendAfterScreen from './screens/AttendAfterScreen';
import AttendRateScreen from './screens/AttendRateScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import Generator from './screens/Generator';
import { vocabularies } from './screens/Translation.js';
import { AmplifyTheme } from './screens/AmplifyTheme.js';

import { Amplify, Auth, I18n} from "aws-amplify";
import config from './src/aws-exports.js';
import { withAuthenticator} from 'aws-amplify-react-native';
// import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const Stack = createNativeStackNavigator();

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'UserName',
        key: 'name',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 2,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 3,
        type: 'password',
      },
    ],
  }

    // const [authState, setAuthState] = React.useState<AuthState>();
    // const [user, setUser] = React.useState<object | undefined>();

    // React.useEffect(() => {
    //   return onAuthUIStateChange((nextAuthState, authData) => {
    //       setAuthState(nextAuthState);
    //       setUser(authData)
    // });
    // }, []);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="UserTab"
          // initialRouteName="Generator"
      >   
        
        <Stack.Screen name="UserTab" component={UserTabScreen} options={{ title: 'ユーザ画面' }}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
        <Stack.Screen name="Attend" component={AttendScreen}/>
        <Stack.Screen name="AttendAfter" component={AttendAfterScreen}/>
        <Stack.Screen name="AttendRate" component={AttendRateScreen}/>
        <Stack.Screen name="TimeTable" component={TimeTableScreen}/>
        <Stack.Screen name="Generator" component={Generator}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

// export default App;

export default withAuthenticator(App,{
  usernameAttributes: "email",
  signUpConfig: signUpConfig,
  theme: AmplifyTheme
});

I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');

<Stack.Screen name="Home" component={HomeScreen} 
options={{
    headerShown: false
  }}
/>

