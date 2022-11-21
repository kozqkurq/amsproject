import React from 'react';
import { View, Text, Image, Button, StyleSheet,
   TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Table, Row, Rows} from 'react-native-table-component';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const AttendRateScreen = ( props ) => {
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

  const tableHead = ['履修講義', '出席率', '出席', '公欠', '欠席', '遅刻', '早退']
  const widthArr = [100, 60, 40, 40, 40, 40, 40]
  const data = [
    ['JavaScript', '100%', 90, 10, 0, 0, 0],
    ['PHP', '70%', 50, 20, 30, 0, 0],
    ['Python基礎', '90%', 60, 20, 10, 5, 5],
    ['Python応用', '80%', 60, 10, 10, 10, 0],
    ['インフラ', '100%', 100, 0, 0, 0, 0],
    ['セキュリティ', '80%', 60, 10, 10, 10, 0],
  ]

  return (
    <View style={styles.Container}>
      <View style={styles.ImgWrap}>
        <Image style={styles.Img2} source={require('../images/出席率.png')}/>
      </View>
      <View style={styles.tableWrap}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, BorderColor: '#FCC765'}}>
            <Row data={tableHead} widthArr={widthArr} style={styles.tableHead} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrap}>
            <Table borderStyle={{borderWidth: 1, BorderColor: '#FCC765'}}>
              <Rows data={data} widthArr={widthArr} style={styles.data} textStyle={styles.text}/>
            </Table>
          </ScrollView>
          </View>
        </ScrollView>
      </View>
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
  hImg: { width: 140, height: 40},
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
  ImgWrap: { marginTop: 100 },
  Img2: {
    width: '90%',
    height: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 3,
  },
  tableWrap: { flex: 1, padding: 16, paddingTop: 30, marginTop: -120},
  tableHead: { height: 40, backgroundColor: "#fec897" },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrap: { marginTop: -1 },
  data: { height: 40, backgroundColor: "#FEF0E3"}

});

export default AttendRateScreen;