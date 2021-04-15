import React from 'react';
import AllSportsCard from '../cards/AllSportsCard'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <>
      {/* <StatusBar barStyle='dark-content' backgroundColor='rgb(156,75,75)' /> */}
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/basket.png')} />
        <View style={styles.textcontainer}>
          <Text style={styles.baseText}>
            L A S T
           <Text style={styles.boldText}>  P A G</Text>
            <Text style={styles.redText}> E</Text>
          </Text>
          <Text style={styles.paratext}>THIS IS JUST SOME RANDOM TEXT</Text>
        </View>
        <AllSportsCard />
            {/* <Button title="Go to Academies Screen" onPress={() => navigation.push("Academies")} />
            <Button title="Go to User Profile Screen" onPress={() => navigation.push("UserProfile")} /> */}
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.8,
    // borderWidth: 2,
    // borderColor: 'white',
    height: 220
  },
  textcontainer: {
    position: 'absolute',
    paddingTop: 70,
    alignItems: 'center',
    // borderWidth: 2,
    // position:'absolute',
    // borderColor: 'white',
  },
  baseText: {
    color: 'white',
    fontSize: 40,

  },
  boldText: {
    fontWeight: 'bold'
  },
  redText: {
    color: 'red'
  },
  paratext: {
    paddingTop: 10,
    fontSize: 15,
    color: 'darkgrey',
  },

});

export default HomeScreen;
