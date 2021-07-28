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
        screen: Goals_3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Goals',
});

export const PlanStack = createStackNavigator({
    Home1: {
        screen: HomePage1,
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
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <Fontisto name={"expressionless"} size={30} color={tintColor} />
            }
        }
    },
    Plan: {
        screen: FaqScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <FontAwesome name={"rupee"} size={30} color={tintColor} />
            }
        }
    },
    Dashboard: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <FontAwesome name={"signal"} size={30} color={tintColor} />
            }
        }
    },
    You: {
        screen: HomeScreen,
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