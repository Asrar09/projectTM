import * as React from 'react';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ padding: 10, backgroundColor: '#ffffff', width: 200 }}>
          <Text>
            Login
          </Text>
          <View style={{ flexDirection: 'row', alignContent: 'flex-end' }}>
            <Text style={{ alignSelf: 'center', textAlign: 'center' }}> Username : </Text>
            <TextInput
              style={{ height: 40 }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignContent: 'center'}}>
            <Text style={{ alignSelf: 'center', textAlign: 'center' }}> Password : </Text>
            <TextInput
              style={{ height: 40 }}
            />
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'center', padding: 5, marginTop: 10, width: 50, backgroundColor: '#ADD8E6'}}
            onPress={() => this.props.navigation.navigate('Details')}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen