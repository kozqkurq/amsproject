import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const TimeTableScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      console.log('User Focus');

      return () => {
        console.log('User UnFocus');
      };
    }, [])
  );
  return (
    <View>
      <Text>時間割画面</Text>
    </View>
  );
};

export default TimeTableScreen;