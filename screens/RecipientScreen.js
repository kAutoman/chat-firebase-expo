import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import RecipientItem from '../components/RecipientItem';
import { TextInput } from 'react-native-gesture-handler';

const RecipientScreen = ({ navigation }) => {
    const users = [
        {
            profile: "",
            name: "Yahoo Puneri",
            phoneNumber: "786-222-8410"
        },
        {
            profile: "",
            name: "Andy Puneri",
            phoneNumber: "786-222-8410"
        },
        {
            profile: "",
            name: "John Puneri",
            phoneNumber: "786-222-8410"
        },
    ];

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: '#f8f4e4'
        }}>
            <View style={{
                paddingTop: 10,
                paddingBottom: 10,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3'
            }}>
                <TextInput placeholder='Search by name and numbers' style={{
                    fontSize: 18
                }} />
            </View>
            <ScrollView style={{
                paddingTop: 10
            }}>
                {
                    users.length > 0 && users.map(u => {
                        return <RecipientItem prop={u} key={u.name} navigation={navigation} />
                    })
                }
            </ScrollView>
        </View>
    );
}

export default RecipientScreen;