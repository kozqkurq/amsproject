import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { API } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const TimeTableScreen = ( props ) => {
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
      <Button title='戻る' onPress={() => props.navigation.replace('UserTab')}/>
    ),
  });

  // const employeeDetails = {
  //   name: 'test',
  //   flag: true
  // };
  // const newEmployee = API.graphql({
  //   query: mutations.createEmployee,
  //   variables: {input: employeeDetails}
  // });

  const employees = API.graphql({
    query: queries.listEmployees,
    authMode: "API_KEY"
  });
  console.log(employees);
  return (
    <View>
      <Text>時間割画面</Text>
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
});

export default TimeTableScreen;