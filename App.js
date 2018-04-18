import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert("You tapped the button!")
  }
  render() {
    return (
      <View style={styles.body}>

        <View style={styles.buttonContainer}>
          <Button style={styles.button_Inside}
            onPress={this._onPressButton}
            title="Press ME"
          />
        </View>

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Boom Boom Boom</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {

    justifyContent: 'space-between',
    backgroundColor: '#4286f4',
    flex: 1,
  },

  buttonContainer: {
    marginTop: 50,
    backgroundColor: '#6ba0f4',
  },

  button_Inside: {
    color: 'red',
  }
});
