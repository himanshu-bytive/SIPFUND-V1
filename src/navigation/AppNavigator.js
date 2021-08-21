import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { LoginFlowStack, OthersStack, RootNavigator, TabNavigator } from './MainNavigator';

const AppNavigator = createSwitchNavigator({
    Auth: LoginFlowStack,
    Root: RootNavigator,
    Tab: TabNavigator
},
    {
        initialRouteName: 'Auth'
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
