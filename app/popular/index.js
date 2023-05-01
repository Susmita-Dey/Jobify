import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { NearbyJobs, ScreenHeaderBtn } from "../../components";
import { COLORS, icons } from "../../constants";
import styles from "../../styles/search";

export default function PopularJobsPage() {
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "Popular Jobs",
                }}
            />
            <View style={styles.container}>
                <NearbyJobs />
            </View>
        </SafeAreaView>
    )
}