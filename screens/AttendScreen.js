import React from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const AttendScreen = ( ) => {
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
      <Text>出席ボタンを押すと出席になります。</Text>
      <Button>出席</Button>
    </View>
  );
};

export default AttendScreen;