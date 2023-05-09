import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from "expo-router";

import styles from '../components/home/welcome/welcome.style'
import { COLORS, SIZES, icons } from '../constants';

/*
Favorites will contain list of favorited jobs
*/
const Favorites = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "Favorites",
                }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Text style={styles.container}>Hello Susmita,Welcome to Favorites Tab</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Favorites