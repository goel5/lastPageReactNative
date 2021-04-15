import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

const UserProfileScreen = () => {
    const [text, setText] = useState("");
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("+91");
    const [sec, setSec] = useState("")
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='lightblue' barStyle='light-content' />
            <ScrollView>
                <Text style={styles.heading}>COMPLETE PROFILE</Text>
                <View style={styles.line} />
                <View style={styles.header}>
                    <Text style={styles.heading2}>PRIMARY USER</Text>
                    <View style={styles.recBox}>
                        <Text style={styles.left}>STUDENT</Text>
                        <Text style={styles.right}>PARENT</Text>
                    </View>
                    <SafeAreaView>
                        <View style={styles.name}>
                            <Text style={styles.input}>Name</Text>
                            <TextInput style={styles.textInput} onChangeText={text => setText(text)} />
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.input}>Age</Text>
                            <TextInput style={styles.textInput}
                                onChangeAge={age => setAge(age)}
                                keyboardType='numeric' />
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.input}>Email</Text>
                            <TextInput style={styles.textInput}
                                onChangeEmail={email => setEmail(email)} />
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.input}>Phone</Text>
                            <TextInput style={styles.textInput}
                                onChangePhone={phone => setPhone(phone)}  keyboardType='numeric' />
                        </View>
                    </SafeAreaView>
                </View>
                <View style={styles.line} />
                <View style={styles.footer}>
                    <Text style={styles.heading2}>SECONDARY USER</Text>
                    <View style={styles.name}>
                        <Text style={styles.input}>Name</Text>
                        <TextInput style={styles.textInput}
                            onChangeSec={sec => setSec(sec)}  />
                    </View>
                </View>
                <TouchableOpacity onPress={() => alert('Profile Created')}>
                    <Text style={styles.button}>CREATE PROFILE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
    },
    heading: {
        letterSpacing: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 10
    },
    heading2: {
        letterSpacing: 3,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 10
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1.5,
        marginHorizontal: '15%',
        marginVertical: 5
    },
    button: {
        alignSelf: 'center',
        width: width * 0.6,
        textAlign: 'center',
        padding: 5,
        borderRadius: 20,
        backgroundColor: 'rgb(242, 94, 97)',
        color: 'white',
        letterSpacing: 3,
        fontWeight: 'bold',
        borderColor: 'rgb(242, 94, 97)',
        borderWidth: 2,
        fontSize: 15,
        marginBottom: 70,
    },
    header: {
        alignSelf: 'center',
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        height: '80%',
        marginVertical: 15
    },
    recBox: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    left: {
        marginLeft: 10,
        flex: 1,
        borderWidth: 0.8,
        textAlign: 'center',
        padding: 4,
        borderRadius: 20,
        color: 'darkgrey',
        letterSpacing: 1,
    },
    right: {
        marginHorizontal: 10,
        flex: 1,
        textAlign: 'center',
        padding: 4,
        borderRadius: 20,
        color: 'rgb(242, 94, 97)',
        letterSpacing: 4,
        borderColor: 'rgb(242, 94, 97)',
        borderWidth: 1,
    },
    footer: {
        alignSelf: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        width: width * 0.95,
        marginVertical: 15
    },
    name: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    textInput: {
        flex: 5,
        paddingLeft: 10,
        margin: 5,
        fontSize: 18,
        borderBottomWidth: 1,
        color:'black'
    },
    input: {
        flex: 1,
        color: 'rgb(242, 94, 97)',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default UserProfileScreen;
