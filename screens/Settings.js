import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from "expo-router";

import styles from '../components/home/welcome/welcome.style'


const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.userName}>Hello Susmita</Text>
        </View>
    )
}

export default Settings