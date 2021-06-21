import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";


const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient: ['rgba(0,0,0,0.8)', 'transparent']
    },
    Snow:{
        iconName: "weather-hail",
        gradient:["blue"]
    }
}


export default function Weather({temp, condition}){
    return (
            <LinearGradient
                colors={[weatherOptions[condition].gradient]}
                style={styles.container}
            >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName} color="white" />      
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer} />
                <Text style={styles.title}>Title</Text>
                <Text style={styles.subtitle}>Subtitle</Text>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "white"
    }
});