import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import ContactItem from '../components/ContactItem';

const ContactScreen = ({ navigation }) => {
    const users = [
        {
            profile: "",
            name: "Yahoo Puneri",
            key: "ad7f9a8s7df89a7sd89f7asd8"
        },
        {
            profile: "",
            name: "Andy Puneri",
            key: "ad7f9a8s7df89a7sd89f7asd8"
        },
        {
            profile: "",
            name: "John Puneri",
            key: "ad7f9a8s7df89a7sd89f7asd8"
        },
    ];

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: '#f8f4e4'
        }}>
            <ScrollView style={{
                paddingTop: 10
            }}>
                {
                    users.length > 0 && users.map(u => {
                        return <ContactItem prop={u} key={u.name} navigation={navigation} />
                    })
                }
            </ScrollView>
            <View style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 20
            }}>
                <TouchableOpacity
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                        backgroundColor: '#5080ff',
                        borderColor: '#4FB6EC',
                        borderWidth: 1
                    }}
                    onPress={() => {
                        navigation.navigate('Recipient')
                    }}
                >
                    <Text style={{
                        color: '#fff'
                    }}>Add favorite Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ContactScreen;