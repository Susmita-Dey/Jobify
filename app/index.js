import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components'
import Settings from "./Settings";

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.user} dimension="80%" 
                        // onClickUrl={()=>{
                        //     <Settings />
                        // }} 
                        />
                    ),
                    headerTitle: "Jobify",
                    headerTitleAlign: 'center'
                }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home