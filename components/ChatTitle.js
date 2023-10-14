import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ChatTitle({ navigation }) {

    return (
        <View style={{
            display: 'flex',
            justifyContent: 'flex-start',
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
            <View style={{
                position: 'relative',
                marginLeft: 20
            }}>
                <Image source={require("../assets/user_avatar.png")} />
                <View style={{
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: 'gray',
                    right: 0,
                    top: 3
                }}>
                </View>
                <View style={{
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: '#22C55E',
                    right: 0,
                    top: 3
                }}>
                </View>
            </View>
            <View style={{
                marginLeft: 20
            }}>
                <Text style={{
                    color: '#262626',
                    fontSize: 14,
                    lineHeight: 17,
                    fontWeight: 'bold'
                }}>Andy Dash</Text>
                <Text style={{
                    color: '#FFA408',
                    fontSize: 12,
                    lineHeight: 15,
                }}>Online now</Text>
            </View>
        </View>
    );
}