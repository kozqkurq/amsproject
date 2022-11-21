import React from 'react';
import { View, Text, Image, Button, StyleSheet, 
  TouchableWithoutFeedback, ScrollView } from 'react-native';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const ContactScreen = ( props ) => {
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
  return (
    <View style={styles.Container}>

      <View style={styles.NoticeBox}>
        <View style={styles.triangle} />
        <Text style={styles.NoticeTxt}><Text style={{color: 'red'}}>5</Text>件の連絡があります</Text>
      </View>

      <ScrollView style={styles.NoticeList}>
        <View style={styles.NListBox}>
          <Text style={styles.NListTxt}>[4/10]〇〇授業連絡</Text>
        </View>
        <View style={styles.NListBox}>
          <Text style={styles.NListTxt}>[7/9]〇〇授業休講の連絡</Text>
        </View>
        <View style={styles.NListBox}>
          <Text style={styles.NListTxt}>[7/10]〇〇授業休講の連絡</Text>
        </View>
        <View style={styles.NListBox}>
          <Text style={styles.NListTxt}>[10/30]〇〇会社説明会の連絡</Text>
        </View>
        <View style={styles.NListBox}>
          <Text style={styles.NListTxt}>[11/20]〇〇イベントの案内</Text>
        </View>
      </ScrollView> 

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
  Container: {
    flex: 1,
    backgroundColor: 'white'
  },
  NoticeBox: {
    width: '80%',
    height: 70,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FCC765',
    borderRadius: 40
  },
  triangle: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    // transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderLeft: '10px solid #81d4fa',
  },
  NoticeTxt: {
    fontSize: 20,
    marginTop: 'auto',
    textAlign: 'center',
    marginBottom: 'auto'
  },
  NoticeList: {
    // height: '70%',
    flex:1,
    width: '85%',
    marginTop: 20,
    marginBottom: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fec897'
  },
  NListBox: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    paddingTop: 20,
    borderRadius: 5
  },
  NListTxt: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 50
  }
});

export default ContactScreen;