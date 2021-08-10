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
    CompleteDetailsScreen,
    CompleteDetails2Screen,
    CompleteDetails3Screen,
    CompleteDetails5Screen,
    TopratedFunds5Screen,
    FundsDetails1Screen,
    FundDetail3Screen,
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
    Goals1Screen,
    ProfileScreen,
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

export const RegisterStack = createStackNavigator({
    Register: {
        screen: CompleteDetailsScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register1: {
        screen: CompleteDetails2Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register2: {
        screen: CompleteDetails3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register3: {
        screen: CompleteDetails5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'Register',
});

export const HoldingsStack = createStackNavigator({
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

export const TopratedStack = createStackNavigator({
    Toprated: {
        screen: TopratedFunds5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'Toprated',
});

export const FundsDetailsStack = createStackNavigator({
    FundsDetails: {
        screen: FundsDetails1Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    FundsDetails1: {
        screen: FundDetail3Screen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'FundsDetails',
});

export const OthersStack = createStackNavigator({
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
    Profile: {
        screen: ProfileScreen,
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
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Home',
});


//drawer routes, you can add routes here for drawer or sidemenu
const DrawerRoutes = {
    Reg: {
        name: 'Register',
        screen: RegisterStack
    },
    Hold: {
        name: 'Hold',
        screen: HoldingsStack
    },
    Top: {
        name: 'Top',
        screen: TopratedStack
    },
    Funds: {
        name: 'Funds',
        screen: FundsDetailsStack
    },
    Explore: {
        name: 'Explore',
        screen: ExploreStack
    },
    Plan: {
        name: 'Plan',
        screen: PlanStack
    },
    Others: {
        name: 'Others',
        screen: OthersStack
    },
};

//tab navigator for user end
export const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: ExploreStack,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <Fontisto name={"expressionless"} size={30} color={tintColor} />
            }
        }
    },
    Plan: {
        screen: PlanStack,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                // const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                return <FontAwesome name={"rupee"} size={30} color={tintColor} />
            }
        }
    },
    Dashboard: {
        screen: PlanStack,
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
        initialRouteName: 'Plan',
        contentComponent: SideMenu,
    });