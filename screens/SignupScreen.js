import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SignupScreen({ navigation }) {
    const signup = () => {
        navigation.navigate('Login')
    }
    return (
        <View>
            <Text>Signup Screen</Text>
            <TextInput placeholder='Email' />
            <TextInput placeholder='Name' />
            <TextInput placeholder='Password' />
            <TouchableOpacity onPress={() => signup()}>
                <Text>Signup</Text>
            </TouchableOpacity>
        </View>
    );
}