/** @format */

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { LoginFlowStack, RootNavigator } from "./MainNavigator";
import { Linking } from "react-native";
import React from "react";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavigator = createSwitchNavigator(
  {
    Auth: LoginFlowStack,
    Root: RootNavigator,
  },
  {
    initialRouteName: "Auth",
  }
);
const prefix = "eks24.app.goo.gl";

const AppContainer = createAppContainer(AppNavigator);

// const MainApp = () => {
//   const handleOpenURL = ({ url }) => {
//     return;
//     // Handle the deep link URL
//     const route = url.replace(prefix, "");
//     const routeName = route.split("/")[0];

//     if (routeName === "details") {
//       const itemId = route.split("/")[1];
//       // Navigate to the Details screen with the item ID
//       const navigation = AppNavigator.router.getNavigator("root");
//       if (navigation) {
//         navigation.navigate("Details", { itemId });
//       }
//     }
//   };

//     Linking.addEventListener("url", handleOpenURL);
//   Linking.getInitialURL().then((url) => {
//   });

//   return <AppContainer />;
// };

const handleDeepLink = (event) => {
  // const route = event.url.replace(/.*?:\/\//g, '');
  // const routeName = route.split('/')[0];
  // if (routeName === 'details') {
  //   const itemId = route.split('/')[1];
  //   const navigation = AppNavigator.router.getNavigator('root');
  //   if (navigation) {
  //     navigation.navigate('Details', { itemId });
  //   }
  // }
};

const handleDynamicLink = async (link) => {
  if (link) {
    const str = link?.url;
    const after_ = str.slice(str.indexOf("=") + 1);
    const password = await AsyncStorage.setItem(
      "referenceCode",
      JSON.stringify(after_)
    );
  }
};

const MainApp = () => {
  React.useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);

    return () => {
      Linking.removeEventListener("url", handleDeepLink);
    };
  }, []);

  React.useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(async (link) => {
        if (link.url) {
          const str = link?.url;
          const after_ = str.slice(str.indexOf("=") + 1);
          const password = await AsyncStorage.setItem(
            "referenceCode",
            JSON.stringify(after_)
          );
        }
      });
  }, []);

  React.useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  Linking.getInitialURL().then((url) => {
    if (url) {
      handleDeepLink({ url });
    }
  });

  return <AppContainer />;
};

// const MainApp = () => <AppContainer uriPrefix={prefix} />;

export default MainApp;
