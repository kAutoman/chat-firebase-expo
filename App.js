import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import HomeTitle from './components/HeaderTitle';
import ChatTitle from './components/ChatTitle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HomeTitle {...props} /> }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={({route, navigation}) => ({
          headerTitle: (props) => <ChatTitle {...props} navigation={navigation} />,
          headerLeft: null
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}