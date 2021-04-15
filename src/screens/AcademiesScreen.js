import React from 'react';
import AllBadmintonAcademies from '../cards/BadmintonCard/AllBadmintonAcademies'
import CardDesign from '../cards/BadmintonCard/CardDesign'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    Dimensions
} from 'react-native';

const AcademiesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../images/shuttler.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>
                        <Text style={styles.textpara}>If we dare to win,{'\n'}We should also dare to loose..</Text>
                    </Text>
                    <Text style={styles.textFooter}>~LCW</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.recBox}>
                    <Text style={styles.left}>TRAINERS</Text>
                    <Text style={styles.right}>ACADEMIES</Text>
                </View>
                {/* <AllBadmintonAcademies navigation={navigation}/> */}
                <View style={{ flex: 1 }}>
                    <ScrollView >
                        <CardDesign />
                        <CardDesign />
                        <CardDesign />
                        <CardDesign />
                    </ScrollView>
                </View>


            </View>
        </View>
    )
}
const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        flex: 1,
        margin: 0,
        padding: 0,
        // borderColor:'red',
        // borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        zIndex: -1,
        resizeMode: 'stretch',
        width: width * 0.99,
    },
    textContainer: {
        flex: 1,
        zIndex: 1,
        position: 'absolute',
        // borderColor:'red',
        // borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        marginTop: 50,
        marginRight: 30,
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:'blue',
        // borderWidth:2,
        textAlign: 'center',
        letterSpacing: 1,
        padding: 2,
        fontStyle: 'italic'
    },
    textFooter: {
        // borderColor:'green',
        // borderWidth:2,
        color: 'white',
        alignSelf: 'flex-end',
        // margin:3,
        // padding:2,
        fontStyle: 'italic'
    },
    footer: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginHorizontal: 10,
        // paddingHorizontal: 10,
        // paddingTop: 18,
        paddingBottom: 60,
        // borderColor: 'green',
        borderWidth: 2,
    },
    recBox: {
        // alignSelf:'baseline',
        // position:'absolute',
        flexDirection: 'row',
        marginBottom: 20,
        margin: 30,
        // borderWidth: 2,
    },
    left: {
        flex: 1,
        borderColor: 'rgb(242, 94, 97)',
        borderWidth: 1,
        textAlign: 'center',
        padding: 4,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        color: 'darkgrey',
        letterSpacing: 1
    },
    right: {
        flex: 1,
        textAlign: 'center',
        padding: 4,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgb(242, 94, 97)',
        color: 'white',
        letterSpacing: 4,
        fontWeight: 'bold',
        borderColor: 'rgb(242, 94, 97)',
        borderWidth: 2,
    }
});

export default AcademiesScreen;
