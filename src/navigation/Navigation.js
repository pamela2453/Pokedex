import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            style={styles.tabBar}
        >
            <Tab.Screen
                name="Favorites"
                component={FavoriteNavigation}
                options={{
                    tabBarLabel: "Favoritos",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Pokedex"
                component={PokedexNavigation}
                options={{
                    headerTitleAlign: "center",
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball(),
                }}
            />

            <Tab.Screen
                name="Account"
                component={AccountNavigation}
                options={{
                    tabBarLabel: "Mi cuenta",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function renderPokeball() {
    return (
        <Image
            source={require("../assets/img/pokeball.png")}
            style={{ width: 75, height: 75, top: -25 }}
        />
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderTopWidth: 0,
        elevation: 8,
    },
}); 