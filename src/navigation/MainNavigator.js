import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { 
    SplashScreen,
    LoginScreen,
    OtpScreen,
    PasswordScreen,
    HomeScreen,
    FaqScreen,
    UpiScreen,
    PanScreen,
    GoalsScreen,
    Goals1Screen, 
    Goals2Screen,
    Goals_3Screen,
    HomePage1,
    
} from '../screens';
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
    home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Faq: {
        screen: FaqScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Upi: {
        screen: UpiScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Pan: {
        screen: PanScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals: {
        screen: GoalsScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals1: {
        screen: Goals1Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals2: {
        screen: Goals2Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals3: {
        screen: Goals_3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Home1: {
        screen: HomePage1,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'login',
});