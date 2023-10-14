import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ContactTitle({ navigation }) {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            paddingTop: 10,
            paddingBottom: 10
        }}>
            <TouchableOpacity
                style={{
                    width: 38,
                    height: 38,
                    borderRadius: 6,
                    backgroundColor: '#eee',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
                <Image source={require("../assets/backIcon.png")} />
            </TouchableOpacity>
            <View>
                <Text style={{
                    color: '#262626',
                    fontSize: 18,
                    lineHeight: 21,
                    fontWeight: 'bold'
                }}>Select Contact</Text>
            </View>
            <View></View>
        </View>
    );
}