import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { API } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';

const TimeTableScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('User Focus');

      return () => {
        console.log('User UnFocus');
      };
    }, [])
  );
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

export default TimeTableScreen;