import React, { useState } from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const login = () => {

    }

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput 
                placeholder='Email' 
                onChangeText={setEmail}
                value={email}
            />
            <TextInput 
                placeholder='Password' 
                onChangeText={setPassword}
                value={password}
            />
            <TouchableOpacity onPress={() => login()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}