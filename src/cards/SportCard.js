import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const SportCard = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.item.src} />
      <View style={styles.header}>
        <Text style={styles.paratext}>LEARN</Text>
        <Text style={styles.boldText}>{props.item.name}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.first}>Starting  from</Text>
        <Text style={styles.second}>{props.item.amount}<Text style={styles.third}> per month</Text></Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 340,
    // height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    zIndex: -1,
    flex: 1,
    resizeMode: 'stretch',
    width: 355,
    height: 200
  },
  header: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  boldText: {
    marginTop: 1,
    color: 'white',
    fontSize: 18,
    letterSpacing: 3
  },
  paratext: {

    // scaleX: 1.1,
    // scaleY: 1.1,
    fontSize: 10,
    letterSpacing: 2,
    color: '#fff',
  },
  footer: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingBottom: 30,
  },
  first: {
    color: 'white',
    fontSize: 10,
  },
  second: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold'
  },
  third: {
    color: 'white',
    fontSize: 18,
    fontWeight:'normal'
  }
})

export default SportCard;