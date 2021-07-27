import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { AuthStack, RiderRootNavigator, DriverRootNavigator, AdminRootNavigator } from './MainNavigator';

const AppNavigator= createSwitchNavigator({
        Auth: AuthStack,
        },
        {
            initialRouteName: 'Auth'
        }
    );
    const AppContainer = createAppContainer(AppNavigator);
    export default AppContainer;
  