import React from 'react';
import { StyleSheet, View, Image, Button,} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { vocabularies } from './Translation.js';

import { Authenticator} from 'aws-amplify-react-native';
import { I18n } from 'aws-amplify';
import { AmplifyTheme } from './AmplifyTheme.js';
// const currentAuthUser = await Auth.currentAuthenticatedUser();
// const session = await Auth.userSession(currentAuthUser);


function HomeScreen({ navigation }) {

  const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Email',
        key: 'email',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password',
      },
      {
        label: 'TitleName',
        key: 'titlename',
        required: true,
        displayOrder: 3,
        type: 'string',
      },
    ],
  }

  return (
    <View style={styles.Container}>
      <Animatable.View
        animation='bounce'
        iterationCount="infinite"
        iterationDelay={100}>
        <Image
          style={styles.Img}
          source={require('/Users/iidzukateru/Desktop/AmsProject/images/ams_logo.png')} />
      </Animatable.View>
      
      <Authenticator
        usernameAttributes="email"
        signUpConfig={signUpConfig}
        theme={AmplifyTheme}
        >
      </Authenticator >

        
      

    </View>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
  },
  Img: {
    width: 256,
    height: 128,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 156,
    marginBottom: 'auto',
  },
  BtnWrap: {
    width: 128,
    heioght: 16,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
export default HomeScreen;

I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');