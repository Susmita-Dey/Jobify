import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "./Drawer";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Drawer screenListeners={onLayoutRootView}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Jobify",
          }}
        />
        <Drawer.Screen
          name="Notification" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Notifications",
            title: "Notifications",
          }}
        />
        <Drawer.Screen
          name="Favorites" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Favorites",
            title: "Favorites",
          }}
        />
        <Drawer.Screen
          name="PopularJobsPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Popular Jobs",
          }}
        />
        <Drawer.Screen
          name="NearbyJobsPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Nearby Jobs",
          }}
        />
        <Drawer.Screen
          name="Settings" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Settings",
            title: "Settings",
          }}
        />
      </Drawer>
      {/* <Stack onLayout={onLayoutRootView} /> */}
    </>
  );
};

export default Layout;
