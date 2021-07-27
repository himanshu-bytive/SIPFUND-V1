import React, { useState, useEffect } from 'react';
import AppContainer from './src/navigation/AppNavigator';

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [updateMsg, setUpdateMsg] = useState('');

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    if (__DEV__) {
      setUpdateMsg(language.loading_assets);
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
  );
}