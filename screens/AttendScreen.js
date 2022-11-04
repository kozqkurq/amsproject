import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Auth } from "aws-amplify";

async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

const AttendScreen = ( props ) => {
  
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
      headerLeft: () => (
        <Button title='戻る' onPress={() => props.navigation.navigate('UserTab')}/>
      ),
    });
  return (
    <View style={styles.attendBox}>
      <Text style={styles.txt}>出席ボタンを押すと出席になります</Text>
      <View style={styles.btnBox}>
        <TouchableOpacity onPress={() => props.navigation.replace('AttendAfter')}>
          <Text style={styles.btnText}>出席</Text>
        </TouchableOpacity>
      </View>
      
    </View>
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
  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 80,
    marginBottom: 50,
  },
  attendBox: {
    height: 300,
    width: 330,
    marginTop: 150, 
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
  },
  btnBox: {
    width: 80,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'orange',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  }
});

export default AttendScreen;