import React, { useState } from 'react'
import { Image, View, TouchableOpacity, Keyboard } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Homepage from '../homepage/Homepage'
import Profile from '../profile/Profile'


function MyTabBar({ state, descriptors, navigation }) {
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
    Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardIsOpen(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardIsOpen(false);
    });
    return (
        <View>
            {!keyboardIsOpen &&
                <View style={{ flexDirection: 'row' }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ flex: 1, alignItems: "center", marginTop: 10, marginBottom: 10, }}

                            >
                                {route.name === "Home" && <Image

                                    style={isFocused && {
                                        width: 30,
                                        height: 30,
                                        tintColor: "#F05C25"
                                    }}
                                    source={require('../../assets/images/tabbarImg/location.png')}
                                />}
                                {route.name === "Profile" && <Image

                                    style={isFocused && {
                                        width: 30,
                                        height: 30,
                                        tintColor: "#F05C25"
                                    }}
                                    source={require('../../assets/images/tabbarImg/location.png')}
                                />}                                                          
                            </TouchableOpacity>
                        );
                    })}
                </View>}
        </View>

    );
}



const Tabs = createBottomTabNavigator()

function HomeMain() {
    return (
        <Tabs.Navigator 
        // screenOptions={{ headerShown: false, }}
         tabBar={(props, key) => <MyTabBar {...props} index={key} />} >
            <Tabs.Screen name="Home" component={Homepage} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    )
}



export default HomeMain