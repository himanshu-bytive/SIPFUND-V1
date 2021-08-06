import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AuthStack, OthersStack, RootNavigator, TabNavigator } from './MainNavigator';

const AppNavigator = createSwitchNavigator({
    Auth: AuthStack,
    Root: RootNavigator,
    Tab: TabNavigator
},
    {
        initialRouteName: 'Auth'
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
