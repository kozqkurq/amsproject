import React from 'react';
import { StyleSheet, View, Text, Button,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const UserScreen = ({ navigation }) => {

  useFocusEffect(
    React.useCallback(() => {
      console.log('User Focus');

      return () => {
        console.log('User UnFocus');
      };
    }, [])
  );

  return (
    <View style={ styles.Container }>
      <View style={ styles.Box1 }>
          <Button 
               title="連絡一覧へ"
               color="gray"
               onPress={() => navigation.navigate('Contact')}>
          </Button>
     </View>
      <View style={ styles.Box }>
          <Button 
               color="gray"
               title="出席率詳細へ"
               onPress={() => navigation.navigate('AttendRate')}>
          </Button>
      </View>
      <View style={ styles.Box }>
          <Button 
               color="gray"
               title="時間割詳細へ"
               onPress={() => navigation.navigate('TimeTable')}>
          </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
     Container: {
          backgroundColor: "white",
          flex: 1,
     },

     Box1: {
          height: 128,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 32,
          marginHorizontal: 32,
          borderWidth: 2,
          borderRadius: 16,
     },

     Box: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 32,
          marginHorizontal: 32,
          borderWidth: 2,
          borderRadius: 16,
     },
});

export default UserScreen;