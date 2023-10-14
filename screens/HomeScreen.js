import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import UserItem from '../components/UserItem';

const HomeScreen = ({ navigation }) => {
  const users = [
    {
      profile: "",
      name: "Yahoo Puneri",
      createdAt: "09/26/23",
      lastMsg: ""
    },
    {
      profile: "",
      name: "Andy Puneri",
      createdAt: "09/05/23",
      lastMsg: "Alight"
    },
    {
      profile: "",
      name: "John Puneri",
      createdAt: "08/22/23",
      lastMsg: "Yo man what's up. Your message..."
    },
  ];

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      position: 'relative'
    }}>
      <ScrollView style={{
        backgroundColor: '#f8f4e4',
        paddingTop: 10
      }}>
        {
          users.length > 0 && users.map(u => {
            return <UserItem prop={u} key={u.name} navigation={navigation} />
          })
        }
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20
        }}
        onPress={() => {
          navigation.navigate('Contact')
        }}
      >
        <Image source={require('../assets/newContactIcon.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
