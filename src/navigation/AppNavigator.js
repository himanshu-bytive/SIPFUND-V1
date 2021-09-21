import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { LoginFlowStack, RootNavigator } from './MainNavigator';

const AppNavigator = createSwitchNavigator({
    Auth: LoginFlowStack,
    Root: RootNavigator,
},
    {
        initialRouteName: 'Auth'
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;