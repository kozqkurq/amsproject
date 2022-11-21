import React, {useState, useEffect} from 'react';
import { View,Text, Image, Button, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { API, autoShowTooltip, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

const TimeTableScreen = ( props ) => {
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

  // const [classes, setClasses] = useState([])
  // useEffect(() => {
  //   fetchClass()
  // }, [])

  // async function fetchClass() {
  // try {  
  //   const classData = await API.graphql(
  //     graphqlOperation(queries.listClasss)
  //   )
  //     const classes = classData.data.listClasss.items
  //     console.log(classes)
  //     setClasses(classes)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  const classDetails = {
    name: 'React',
  };
  const newClass = API.graphql({
    query: mutations.createClass,
    variables: {input: classDetails}
  });

  
  // try {
  //   const employees = API.graphql({
  //     query: queries.listEmployees,
  //     authMode: "API_KEY"
  //   });
  //   console.log(employees)
  // } catch (e) {
  //   console.log(e)
  // }
  
  return (
    <View style={styles.Container}>
      {/* {
        employees.map((data, index) => { 
          return (
            <View key={index}>
              <Text>{data.id}</Text>
            </View>
          )
        })
      } */}
      <View style={styles.ImgWrap}>
        <Image style={styles.Img2} source={require('../images/AI3B.png')}/>
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
  ImgWrap: {
    marginTop: 20
  },
  Img2: {
    width: '95%',
    height: '57%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 3,
  }
});

export default TimeTableScreen;