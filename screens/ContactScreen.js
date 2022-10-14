import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


const ContactScreen = () => {
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
      <Text>通知画面</Text>
    </View>
  );
};

export default ContactScreen;