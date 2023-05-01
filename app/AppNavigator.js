import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home } from "../screens/Home";
import { Notification } from "../screens/Notification";
import { Profile } from "../screens/Profile";
import { Settings } from "../screens/Settings";
import { Support } from "../screens/Support";
import { Logout } from "../screens/Logout";

const Drawer = createDrawerNavigator()

function AppNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Support" component={Support} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

export default AppNavigator