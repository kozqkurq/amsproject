import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { DataStore } from '@aws-amplify/datastore';
import { HomeroomTeacher, Student } from './models';


const TimeTableScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('User Focus');

      return () => {
        console.log('User UnFocus');
      };
    }, [])
  );
  const models = DataStore.query(Student);
  console.log(models);
  return (
    <View>
      <Text>時間割画面</Text>
    </View>
  );
};

export default TimeTableScreen;