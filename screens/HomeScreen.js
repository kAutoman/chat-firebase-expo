import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Chat"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
};

export default HomeScreen;
