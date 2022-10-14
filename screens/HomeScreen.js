import React from 'react';
import { StyleSheet, View, Image, Button,} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { vocabularies } from './Translation.js';

import { Authenticator } from 'aws-amplify-react-native';
import config from '../src/aws-exports.js';
import Amplify from "aws-amplify";
import { I18n } from 'aws-amplify'

Amplify.configure(config);

function HomeScreen({ navigation }) {

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
      <Authenticator usernameAlias="email"/>
        
      <View style={styles.BtnWrap}>
        <Button
          style={styles.Btn}
          title="ログイン"
          coler="white"
          onPress={() => navigation.navigate('UserTab')} />
      </View>

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

I18n.putVocabularies(vocabularies)
I18n.setLanguage('ja')