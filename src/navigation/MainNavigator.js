import React, { useState, useRef, useEffect, useContext } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Fontisto, FontAwesome, AntDesign } from 'react-native-vector-icons';
import {
    SplashScreen,
    LoginScreen,
    OtpScreen,
    PasswordScreen,
    CreatePasswordScreen,
    ForgotPasswordScreen,
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
    Goals1Screen
} from '../screens';
import SideMenu from '../components/SideMenu';

export const AuthStack = createStackNavigator({
    splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
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
    createpassword: {
        screen: CreatePasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    forgotpassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    
}, {
    initialRouteName: 'login',
});

export const OthersStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
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
        screen: Goals3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals4: {
        screen: Goals4Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals5: {
        screen: Goals5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals6: {
        screen: Goals6Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Upi',
});

export const ExploreStack = createStackNavigator({
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
        screen: Goals3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals4: {
        screen: Goals4Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals5: {
        screen: Goals5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Goals6: {
        screen: Goals6Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Goals',
});

export const PlanStack = createStackNavigator({
    Home1: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Goals',
});

//app stack for user end
export const AppStack = {
    Home: {
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
}

//drawer routes, you can add routes here for drawer or sidemenu
const DrawerRoutes = {
    'HomeList': {
        name: 'HomeList',
        screen: createStackNavigator(AppStack, { initialRouteName: 'Home', headerMode: 'none' })
    },
    'FaqList': {
        name: 'FaqList',
        screen: createStackNavigator(AppStack, { initialRouteName: 'Faq', headerMode: 'none' })
    },
};

//tab navigator for user end
export const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: GoalsScreen,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <Fontisto name={"expressionless"} size={30} color={tintColor} />
            }
        }
    },
    Plan: {
        screen: Goals1Screen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <FontAwesome name={"rupee"} size={30} color={tintColor} />
            }
        }
    },
    Dashboard: {
        screen: Goals2Screen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <FontAwesome name={"signal"} size={30} color={tintColor} />
            }
        }
    },
    You: {
        screen: Goals3Screen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <AntDesign name={"user"} size={30} color={tintColor} />
            }
        }
    },
});

//main navigator for user end
export const RootNavigator = createDrawerNavigator(
    DrawerRoutes,
    {
        drawerWidth: 300,
        initialRouteName: 'HomeList',
        contentComponent: SideMenu,
    });