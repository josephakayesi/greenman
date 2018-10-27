import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '', 
      email: '' 
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <Text style={styles.heading}>WELCOME USER. YOU HAVE SUCCESSFULLY LOGGED IN</Text>
        </View>
        <View style={styles.boxTwo}>
          <TouchableOpacity style={styles.proceedButton} onPress={() => this.props.history.push("/App")}>
            <Text style={styles.paragraph}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6B6B6'
  },
  boxOne: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  boxTwo: {
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold'
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

export default Index;