import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

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
      flexDirection: 'column'
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
    </View>
  );
};

const UserItem = (props) => {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 1,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#d3d3d3'
      }}
      onPress={() => {
        props.navigation.navigate('Chat', {
          user: props.prop
        })
      }}
    >
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image
          source={require("../assets/user_avatar.png")}
        />
      </View>
      <View style={{
        flex: 1,
        marginLeft: 10
      }}>
        <View style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
          <Text style={{
            fontWeight: 'bold'
          }}>{props.prop.name}</Text>
          <Text style={{
            color: '#838383'
          }}>{props.prop.createdAt}</Text>
        </View>
        <View>
          <Text style={{
            color: '#838383'
          }}>{props.prop.lastMsg}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default HomeScreen;
