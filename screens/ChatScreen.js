import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const chatContent = [
  {
    id: 1,
    messageText: 'till then...',
    time: '3:41 AM',
    from: true,
    isDate: false
  },
  {
    id: 2,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 3,
    messageText: 'Hi Andy',
    time: '2:57 AM',
    from: true,
    isDate: false
  },
  {
    id: 4,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 5,
    messageText: 'Hi I am Andy',
    time: '12:00 AM',
    from: false,
    isDate: false
  },
  {
    id: 6,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 7,
    messageText: 'till then...',
    time: '3:41 AM',
    from: true,
    isDate: false
  },
  {
    id: 8,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 9,
    messageText: 'Hi Andy',
    time: '2:57 AM',
    from: true,
    isDate: false
  },
  {
    id: 10,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 11,
    messageText: 'Hi I am Andy',
    time: '12:00 AM',
    from: false,
    isDate: false
  },
  {
    id: 12,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 13,
    messageText: 'till then...',
    time: '3:41 AM',
    from: true,
    isDate: false
  },
  {
    id: 14,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 15,
    messageText: 'Hi Andy',
    time: '2:57 AM',
    from: true,
    isDate: false
  },
  {
    id: 16,
    time: 'Mar 3, 2023',
    isDate: true
  },
  {
    id: 17,
    messageText: 'Hi I am Andy',
    time: '12:00 AM',
    from: false,
    isDate: false
  },
  {
    id: 18,
    time: 'Mar 3, 2023',
    isDate: true
  }
]

const ChatScreen = () => {
  return (
    <View style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <View style={{
        flex: 8,
        backgroundColor: '#f8f4e4',
        padding: 10
      }}>
        <ScrollView style={{
          display: 'flex',
          flexDirection: 'column-reverse',
        }}>
          <View>
            {
              chatContent.map(chat => {
                return chat.isDate ? <View key={chat.id} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10,
                  marginBottom: 10
                }}>
                  <Text style={{
                    backgroundColor: '#fff',
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 10,
                    paddingRight: 10
                  }}>{chat.time}</Text>
                </View> : chat.from ? <View style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }} key={chat.id}>
                  <View style={{
                    backgroundColor: '#FFD4A8',
                    borderColor: '#FFA408',
                    padding: 15,
                    borderRadius: 10
                  }}>
                    <Text style={{
                      fontSize: 18
                    }}>{chat.messageText}</Text>
                    <Text style={{
                      color: '#777'
                    }}>{chat.time}</Text>
                  </View>
                </View> : <View style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }} key={chat.id}>
                  <View style={{
                    backgroundColor: '#E0F6CA',
                    borderColor: '#B6F290',
                    padding: 15,
                    borderRadius: 10
                  }}>
                    <Text style={{
                      fontSize: 18
                    }}>{chat.messageText}</Text>
                    <Text style={{
                      color: '#777'
                    }}>{chat.time}</Text>
                  </View>
                </View>
              })
            }
          </View>
        </ScrollView>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 6,
            backgroundColor: '#eee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30
          }}
          onPress={() => {
            console.log("plus button")
          }}
        >
          <Image source={require("../assets/plusIcon.png")} />
        </TouchableOpacity>
        <View style={{
          borderLeftWidth: 2,
          borderLeftColor: '#d3d3d3',
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
          flex: 1
        }}>
          <TextInput style={{
            fontSize: 16
          }} placeholder='Type something...' />
        </View>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 6,
            backgroundColor: '#eee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 30
          }}
          onPress={() => {
            console.log("up button")
          }}
        >
          <Image source={require("../assets/upIcon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
