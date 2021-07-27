import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SplashScreen, LoginScreen, SignupScreen, OtpScreen, PasswordScreen } from '../screens';
import SideMenu from '../components/SideMenu';

export const AuthStack = createStackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    otp: {
        screen: OtpScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    password: {
        screen: PasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'login',
});