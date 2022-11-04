import React from 'react';
import { StyleSheet, View, Image, Button, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

function HomeScreen({ navigation }) {

  return (
    <View style={styles.Container}>
      <Animatable.View
        animation='bounce'
        iterationCount="infinite"
        iterationDelay={100}>
        <Image
          style={styles.Img}
          source={require('../images/AMA_logo.png')} />
      </Animatable.View>
      button
    </View>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1,
  },
  Img: {
    width: 256,
    height: 128,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 156,
    marginBottom: 'auto',
  },
  BtnWrap: {
    width: 128,
    heioght: 16,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});
export default HomeScreen;