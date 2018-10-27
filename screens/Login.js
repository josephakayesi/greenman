import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,Text, TouchableHighlight, ImageBackground } from 'react-native';
import firebase from 'firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '', 
            isAuthenticating: false
        };     
    }  
      
    componentWillMount() {
        const firebaseConfiguration = {
            apiKey: 'AIzaSyCjdlnYUHicei7XbIyjEA2iGc7HiOoIhJE',
            authorizedDomain: 'greenman-69d00.firebaseapp.com'
        }
        firebase.initializeApp(firebaseConfiguration);
    }

    authenticateUser(user) {
        this.setState({isAuthenticating: true});

        const { username, password } = user;

        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                this.setState({isAuthenticating: false});
                this.props.history.push("./Index")     
            })
            .catch(() => {
                this.setState({isAuthenticating: false});
                alert('Wrong username and password');
            })       
    }
          
    render(){
        return(
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
                      style={styles.input}
                      onChangeText={(username) => this.setState({username})}>
                  </TextInput>
                  <TextInput
                      placeholder="password"
                      placeholderTextColor="#5C7A7E80"
                      underlineColorAndroid="transparent"
                      secureTextEntry={true}
                      style={styles.input}
                      onChangeText={(password) => this.setState({password})}>
                  </TextInput>
      
                  <TouchableOpacity style={styles.proceedButton} onPress={() => this.authenticateUser(this.state)}>
                      <Text style={styles.paragraph}>LOGIN</Text>
                  </TouchableOpacity>
                  <TouchableHighlight style={styles.alternativeProcedure} onPress={() => this.props.history.push("./SignUp")}>
                      <Text style={styles.alternativeProcedureText}>Sign Up Instead ?</Text>
                  </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>      
      );
    }
}     

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
        color: 'white'
    }
});

export default Login;