import React from 'react';
import { StyleSheet, View, Text, Image, Button,} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { autoShowTooltip } from 'aws-amplify';

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
          <Text style={{ fontSize: 18,}}>連絡がありません</Text>
          <Button 
               title="連絡一覧へ"
               color="gray"
               onPress={() => navigation.navigate('Contact')}>
          </Button>
     </View>
      <View style={ styles.Box }>
      <Image
          style={styles.Img1}
          source={require('../images/出席率.png')} />
          <Button 
               color="gray"
               title="出席率詳細へ"
               onPress={() => navigation.navigate('AttendRate')}>
          </Button>
      </View>
      <View style={ styles.Box }>
      <Image
          style={styles.Img2}
          source={require('../images/AI3B.png')} />
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
     Img1: {
          position: 'absolute',
          top: 40,
          padding: 55,
          left: 12,
          borderWidth: 1,
          borderRadius: 16,
     },
     Img2: {
       width: '99%',
       height: '100%',
       position: 'absolute',
       left: 0,
       bottom: 0,
       borderRadius: 16,
     }
});

export default UserScreen;