import React from 'react';
import { View, Button, ScrollView, Text, Image, TouchableOpacity } from 'react-native';

const RecipientItem = (props) => {
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
                paddingBottom: 10
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
                </View>
                <View>
                    <Text style={{
                        color: '#838383'
                    }}>{props.prop.phoneNumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RecipientItem;