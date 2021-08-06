import React, { useState, useEffect } from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {
  SplashScreen,
  LoginScreen,
  OtpScreen,
  PasswordScreen,
  CreatePasswordScreen,
  ForgotPasswordScreen,
  SignupScreen,
  HomeScreen,
  FaqScreen,
  UpiScreen,
  PanScreen,
  Goals2Screen,
  Goals3Screen,
  Goals4Screen,
  Goals5Screen,
  Goals6Screen,
  GoalsScreen,
  Goals1Screen,
  PlanYourGoalScreen,
  Investment,
  PlanScreen
} from './src/screens/index'

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [updateMsg, setUpdateMsg] = useState('');

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    if (__DEV__) {
      setUpdateMsg('Loading Assets');
      setAssetsLoaded(true);
    } else {
      try {
        setUpdateMsg('Cecking Updates');
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setUpdateMsg('Downloading Updates');
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        } else {
          setAssetsLoaded(true);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <AppContainer />
    // <PlanScreen />
  );
}