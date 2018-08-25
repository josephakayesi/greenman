import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,Text, TouchableHighlight, ImageBackground } from 'react-native';


export default ({history}) => (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./images/backdrop.png')}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}>

        <View style={styles.boxOne}>
  
        </View>
        <View style={styles.boxTwo}>
            <TextInput
                placeholder="username, email or phone "
                placeholderTextColor="#5C7A7E80"
                underlineColorAndroid="transparent"
                style={styles.input}>
            </TextInput>
            <TextInput
                placeholder="password"
                placeholderTextColor="#5C7A7E80"
                underlineColorAndroid="transparent"
                style={styles.input}>
            </TextInput>

            <TouchableOpacity style={styles.proceedButton}>
                <Text style={styles.paragraph}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.alternativeProcedure} onPress={() => history.push("./SignUp")}>
                <Text style={styles.alternativeProcedureText}>Sign Up Instead ?</Text>
            </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B6B6B6'
    },
    boxOne:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    boxTwo: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: "white",
        marginBottom: 20,
        color: "#2B4E53",
        paddingHorizontal: 10
    },
    proceedButton: {
        backgroundColor: '#ffffff10',
        padding: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1.5,
        borderRadius: 1.5      
    },
    
    paragraph: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'white'       
    },

    alternativeProcedure: {
        alignItems: 'center',
        bottom: -5,      
    },

    alternativeProcedureText: {
        fontWeight: 'bold',
        color: '#884A45'
    }
});