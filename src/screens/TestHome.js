import React from 'react';
import AllSportsCard from '../cards/AllSportsCard'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ScrollView,
} from 'react-native';

const TestHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../images/basket.png')} />
                    <View style={styles.textcontainer}>
                        <Text style={styles.baseText}>
                            L A S T
                        <Text style={styles.boldText}>  P A G</Text>
                            <Text style={styles.redText}> E</Text>
                        </Text>
                        <Text style={styles.paratext}>THIS IS JUST SOME RANDOM TEXT</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <AllSportsCard navigation={navigation} />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        // flex: 1,
        resizeMode: 'stretch',
        opacity: 0.9,
        // borderWidth: 2,
        // borderColor: 'white',
        height: 220,
        width: '90%',
    },
    secContainer:{
        flex:1,
        position:'absolute'
    },
    header: {
        flex: 1,
        // zIndex:-1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    
    textcontainer: {
        position: 'absolute',
        // paddingTop: 70,
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'white',
    },
    baseText: {
        color: 'white',
        fontSize: 30,

    },
    boldText: {
        fontWeight: 'bold'
    },
    redText: {
        color: 'red'
    },
    paratext: {
        paddingTop: 5,
        fontSize: 10,
        color: 'darkgrey',
    },
    // headersec:{
    //     flex: 1,
    //     zIndex:1,
    //     height:220,
    //     borderWidth: 2,
    //     borderColor: 'white',
    // },
    footer: {
        flex: 2,
        // zIndex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginHorizontal: 10,
        // paddingHorizontal: 10,
        paddingTop: 18,
        paddingBottom: 60
    }
});

export default TestHome;
