import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeTitle() {
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
            <View style={{
                width: 38,
                height: 38,
                borderRadius: 6,
                backgroundColor: '#eee',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require("../assets/searchIcon.png")} />
            </View>
            <View>
                <Text style={{
                    color: '#262626',
                    fontSize: 18,
                    lineHeight: 21,
                    fontWeight: 'bold'
                }}>Home</Text>
            </View>
            <View style={{position: 'relative'}}>
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
        </View>
    );
}