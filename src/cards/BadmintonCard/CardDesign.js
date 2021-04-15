import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Alert
} from 'react-native';

const CardDesign = (props) => {
    // const showAlert=()=>{
    //     Alert.alert("Coming Soon...")
    // }
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={require('../../../images/badmintonacademy.jpg')} />
            </View>
            <View style={styles.right}>
                <View style={styles.header}>
                    <Text style={styles.rating}>4.5/5</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.academy}>TEAM BADMINTON ACADEMY</Text>
                    <Text style={styles.description}>Operational since 2004</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>Rs 5,000</Text>
                    <Text style={styles.duration}>3 days/week</Text>
                </View>
                <View style={styles.know}><Text style={styles.knowText}onPress={()=>alert("Coming Soon..")}>Know More<Icon name="arrow-forward-outline"></Icon></Text></View>
            </View>
        </View>
    )
}
const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderColor: 'blue',
        // borderWidth: 2,
        width: width,
        height: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 10
    },

    left: {
        // borderColor: 'red',
        flex: 1,
        // height:10,
        // borderWidth: 2,
        // flexWrap: 'wrap'
        // flexDirection: 'column'
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10,

    },
    image: {
        position: 'absolute',
        width: '180%',
        height: '110%',
        aspectRatio: 1,
        borderRadius: 20,

    },
    right: {
        // borderColor: 'green',
        flex: 3,
        borderWidth: 0.5,
        borderLeftColor: 'transparent',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        paddingLeft: 40,
        paddingRight: 25,
        paddingTop: 10,
        alignItems: 'baseline'
        // flexWrap:'wrap'
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 2,
        marginBottom: 5
    },
    rating: {
        fontSize: 8,
    },
    academy: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 10,
        letterSpacing: 1,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 0.5
    },
    duration: {
        fontSize: 11,
        letterSpacing: 0.5

    },
    know: {
        flex: 1,
        right: 20,
        paddingRight:10,
        // margin: 5,
        bottom: 8,
        position: 'absolute'
        // marginBottom:5
    },
    knowText: {
        textDecorationLine: 'underline'
    },
    footer:{
        flex: 1,
        // left: 0,
        marginLeft:40,
        bottom: 6,
        position: 'absolute'
    }
    // rightAlign:{
    //     textAlign:'right'
    // }
})

export default CardDesign;