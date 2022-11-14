import React, {useState, useEffect} from 'react';
import { 
  View,
  Text, 
  Image, 
  Button, 
  StyleSheet, 
  TouchableWithoutFeedback 
} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

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

  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetchEmployees()
  }, [])

  async function fetchEmployees() {
  try {  
    const employeesData = await API.graphql(
      graphqlOperation(queries.listEmployees)
    )
      const employees = employeesData.data.listEmployees.items
      console.log(employees)
      setEmployees(employees)
    } catch (e) {
      console.log(e)
    }
  }

  // const employeeDetails = {
  //   name: 'hello',
  //   flag: true
  // };
  // const newEmployee = API.graphql({
  //   query: mutations.createEmployee,
  //   variables: {input: employeeDetails}
  // });

  // try {
  //   const employees = API.graphql({
  //     query: queries.listEmployees,
  //     authMode: "API_KEY"
  //   });
  //   console.log(employees)
  // } catch (e) {
  //   console.log(e)
  // }
  
  return (
    <View>
      {
        employees.map((data, index) => { 
          return (
            <View key={index}>
              <Text>{data.id}</Text>
            </View>
          )
        })
      }
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