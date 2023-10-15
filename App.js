import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ContactScreen from './screens/ContactScreen';
import RecipientScreen from './screens/RecipientScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeTitle from './components/HeaderTitle';
import ChatTitle from './components/ChatTitle';
import ContactTitle from './components/ContactTitle';
import RecipientTitle from './components/RecipientTitle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HomeTitle {...props} /> }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={({ route, navigation }) => ({
          headerTitle: (props) => <ChatTitle {...props} navigation={navigation} />,
          headerLeft: null
        })} />
        <Stack.Screen name="Contact" component={ContactScreen} options={({ route, navigation }) => ({
          headerTitle: (props) => <ContactTitle {...props} navigation={navigation} />,
          headerLeft: null
        })} />
        <Stack.Screen name="Recipient" component={RecipientScreen} options={({ route, navigation }) => ({
          headerTitle: (props) => <RecipientTitle {...props} navigation={navigation} />,
          headerLeft: null
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}