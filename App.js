import React, { useState, useEffect } from "react";
import AppContainer from "./src/navigation/AppNavigator";
import { StatusBar, SafeAreaView, Platform } from "react-native";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./src/store";
import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
// import PushNotification from "./PushNotification";

let store = null;
const middleware = [thunk];
store = compose(applyMiddleware(...middleware))(createStore)(reducers);
let persistor = persistStore(store);

export default function App() {
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const [updateMsg, setUpdateMsg] = useState("");

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        if (__DEV__) {
            setUpdateMsg("Loading Assets");
            setAssetsLoaded(true);
        } else {
            try {
                setUpdateMsg("Cecking Updates");
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    setUpdateMsg("Downloading Updates");
                    await Updates.fetchUpdateAsync();
                    await Updates.reloadAsync();
                } else {
                    setAssetsLoaded(true);
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaView>
                    <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" hidden={Platform.OS === 'ios' ? false : true} />
                </SafeAreaView>
                {/* <PushNotification /> */}
                <AppContainer />
            </PersistGate>
        </Provider>
    );
}
