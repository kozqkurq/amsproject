import React from 'react';
import { StyleSheet, View, Image, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserTabScreen from './screens/UserTabScreen';
import ContactScreen from './screens/ContactScreen';
import AttendRateScreen from './screens/AttendRateScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import { vocabularies } from './screens/Translation.js';
import { AmplifyTheme } from './screens/AmplifyTheme.js';

import { Amplify, Auth, I18n} from "aws-amplify";
import config from './src/aws-exports.js';
import { withAuthenticator} from 'aws-amplify-react-native';

const Stack = createNativeStackNavigator();

Amplify.configure(config);

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
      {
        label: 'TitleName',
        key: 'titlename',
        required: true,
        displayOrder: 4,
        type: 'string',
      },
    ],
  }

function App() {
    // const [authState, setAuthState] = React.useState();
    // const [user, setUser] = React.useState();
  //   useEffect(() => {
  //     const init = async() => {
  //         const currentUser = await Auth.currentAuthenticatedUser();
  //         setCurrentUserName(currentUser.username);
  //     }
  //     init()
  // }, []);

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="UserTab"
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

      <Button title="Sign Out" color="tomato" onPress={signOut} />
      
    </NavigationContainer>
  );
}

export default withAuthenticator(App,{
  usernameAttributes: "email",
  signUpConfig: signUpConfig,
  theme: AmplifyTheme
});
I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');