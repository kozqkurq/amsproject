import React from 'react';
import { View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
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
          <Text style={{ fontSize: 18, position: 'absolute', left: 80, bottom: 50}}>連絡がありません</Text>
          <View style={ styles.btnBox }>
               <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.btnTxt}>連絡一覧へ</Text>
               </TouchableOpacity>
          </View>
          
     </View>
      <View style={ styles.Box }>
      <Image
          style={styles.Img1}
          source={require('../images/出席率.png')} />
          <View style={ styles.btnBox }>
               <TouchableOpacity onPress={() => navigation.navigate('AttendRate')}>
                    <Text style={styles.btnTxt}>出席率詳細へ</Text>
               </TouchableOpacity>
          </View>
          
      </View>
      <View style={[ styles.Box, styles.BoxLast ]}>
      <Image
          style={styles.Img2}
          source={require('../images/AI3B.png')} />
          <View style={ styles.btnBox }>
              <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
                    <Text style={styles.btnTxt}>時間割詳細へ</Text> 
               </TouchableOpacity>
               
          </View>
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
     Container: {
          backgroundColor: "white",
          flex: 1,
     },
     btnTxt: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
          position: 'absolute',
          top: 5,
          right: 15,
     },
     btnBox: {
          width: 120,
          height: 30,
          borderRadius: 7,
          backgroundColor: 'rgba(255,165,0,0.7)',
          position: 'absolute',
          bottom: 10,
          right: 10,

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
     BoxLast: {
          marginBottom: 32,
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