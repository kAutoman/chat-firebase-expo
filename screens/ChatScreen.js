import React from 'react';
import { View, Text, Button } from 'react-native';

const ChatScreen = ({ navigation, route }) => {
  const { user } = route.params;
  
  return (
    <View>
      <Text>
        Chat Screen
      </Text>
    </View>
  );
};

export default ChatScreen;
