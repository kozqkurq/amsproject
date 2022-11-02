import React from 'react';
import { StyleSheet, View, Image, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserTabScreen from './screens/UserTabScreen';
import ContactScreen from './screens/ContactScreen';
import AttendScreen from './screens/AttendScreen';
import AttendRateScreen from './screens/AttendRateScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import Generator from './screens/Generator';
import { vocabularies } from './screens/Translation.js';
import { AmplifyTheme } from './screens/AmplifyTheme.js';

import { Amplify, Auth, I18n} from "aws-amplify";
import config from './src/aws-exports.js';
import { withAuthenticator} from 'aws-amplify-react-native';

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

function App() {
  //   const [authState, setAuthState] = React.useState();
  //   const [user, setUser] = React.useState();
  //   useEffect(() => {
  //     const init = async() => {
  //         const currentUser = await Auth.currentAuthenticatedUser();
  //         setCurrentUserName(currentUser.username);
  //     }
  //     init()
  // }, []);

 

  return (
    
    <NavigationContainer>
      {/* <View style={styles.Btn}>
        <Button title="ログアウト" color="black" onPress={signOut}/>
      </View>    */}
      <Stack.Navigator 
          initialRouteName="UserTab"
          // initialRouteName="Generator"
      >   
        
        <Stack.Screen name="UserTab" component={UserTabScreen} options={{ title: 'ユーザ画面' }}/>
        <Stack.Screen name="Contact" component={ContactScreen}/>
        <Stack.Screen name="Attend" component={AttendScreen}/>
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

