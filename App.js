import React, { useState, useEffect } from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {
  Plan1,
  Plan3,
  Plan4,
  Plan5,
  HomeScreen,
  Investment,
  Investment2Screens,
  Investment3Screens,
  Investment4Screens,
  Investment6Screens,
  Investment7Screens,
  OtpScreen,
  Goals3Screen,
  Goals1Screen,
  Goals5Screen,
  Goals4Screen,
  Goals6Screen,
  Goals7Screen,
  CompleteDetails2Screen,
  CompleteDetails3Screen,
  Investment5Screens,

  TopratedFunds5Screen,
  TopRoated2Screen,
  TopRoated6Screen,
  TopRoated8Screen,
  ExistingScreen,
  ReferEarnScreen,
  NotificationScreen,
  RelationshipScreen,
  ReportsScreen,
  CompleteDetailScreen,

  ReturnsCalculator,
  FundDetailScreen,
  PortfolioSummary,
  AmountHistoryScreen,

  FundsHomeScreen,

  UpiScreen,
  AMCScreen,
  EMandateScreen,
  EnterScreen,
  DashboardScreen,
  HamburgerMenu2Screen,
  HamburgerMenu4Screen,
  HamburgerMenu5Screen,
  HamburgerMenu5TabScreen,
  HamburgerMenu6Screen,
  HamburgerMenu7Screen,
  HamburgerMenu8Screen,
  HamburgerMenu9Screen,
  HamburgerMenu10Screen

} from './src/screens'

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
    // <AppContainer />
    <PortfolioSummary/>
);
}