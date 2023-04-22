import React, { useCallback, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { COLORS, icons, SIZES } from '../../constants'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

import useFetchData from '../../hooks/useFetchData'

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [data, isLoading, error, refetch] = useFetchData('job-details', {
        job_id: params.id
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => {
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                },
                headerRight: () => {
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                    />
                }
            }}></Stack.Screen>
        </SafeAreaView>
    )
}

export default JobDetails