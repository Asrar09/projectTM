import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const data = [{
    number: 'Phone A',
    status: 'connected',
}, {
    number: 'Phone A',
    status: 'connected',
}, {
    number: 'Phone A',
    status: 'connected',
}]

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Adding group</Text>
        <View style={{ borderWidth: 1, width: 300, height: 300, backgroundColor: '#ffffff' }}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{width: '50%'}}>
                    Phone Name
                </Text>
                <Text style={{width: '50%'}}>
                    Status
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                <View style={{ marginBottom: 5, flexDirection: 'row' }}>
                    <Text style={{width: '50%'}}>
                        {item.number}
                    </Text>
                    <Text style={{width: '50%'}}>
                        {item.status}
                    </Text>
                </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
        <View style={{ marginTop: 10, width: 300, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <TouchableOpacity
                    style={{ padding: 5, backgroundColor: '#ADD8E6' }}
                    // onPress={() => this.props.navigation.navigate('Details')}
                    >
                    <Text>Create Group</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                style={{ padding: 5, backgroundColor: '#ADD8E6' }}
                // onPress={() => this.props.navigation.navigate('Details')}
                >
                <Text>Delete Group</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

export default Profile