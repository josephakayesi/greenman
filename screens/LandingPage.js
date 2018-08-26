import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,Text, TouchableHighlight, ImageBackground } from 'react-native';


export default ({ history }) => (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./images/backdrop.png')}
        style={styles.container}
        imageStyle={{ resizeMode: 'cover' }}>

        <View style={styles.boxOne}>
  
        </View>
        <View style={styles.boxTwo}>
          <TouchableOpacity style={styles.loginButton} onPress={() => history.push("./Login", {username: '', password: ''})}>
            <Text style={[styles.paragraph, styles.loginText]}>Login</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.signUpButton} onPress={() => history.push("./SignUp")}>
            <Text style={[styles.paragraph, styles.signUpText]}>Sign Up</Text>
          </TouchableOpacity>
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
        flexDirection: 'row',
        paddingBottom: 40
    },  
    input: {
        height: 40,
        backgroundColor: "white",
        marginBottom: 20,
        color: "skyblue",
        paddingHorizontal: 10
    },
    proceedButton: {
        backgroundColor: '#ffffff',
        padding: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',             
    },
    paragraph: {
        fontSize: 24,
        fontWeight: 'bold',        
    },

    alternativeProcedure: {
        alignItems: 'center'
    },

    loginButton: {
      backgroundColor: '#ffffff',     
      height: 50,
      width: '50%',  
      justifyContent: 'center',
      alignItems: 'center',      
      padding: 20,
    },

    loginText: {
      color: '#729D79',
    },

    signUpButton: {
      backgroundColor: '#729D79',
      height: 50,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    signUpText: {
      color: '#FFFFFF',
    }

    
});