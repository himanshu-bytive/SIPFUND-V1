import React, { useState, useRef, useEffect, useContext } from "react";
import {
    Image,
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    SplashScreen,
    VerifyScreen,
    OtpScreen,
    CreateAccountScreen,
    LoginScreen,
    ForgotPasswordScreen,
    CompleteDetailsScreen,
    CompleteDetails2Screen,
    CompleteDetails3Screen,
    CompleteDetails5Screen,

    TopratedFunds5Screen,
    TopRoated2Screen,
    TopRoated6Screen,
    TopRoated8Screen,

    FundsHomeScreen,
    FundDetailScreen,
    HomeScreen,
    UpiScreen,
    PanScreen,
    Goals2Screen,
    Goals3Screen,
    Goals4Screen,
    Goals5Screen,
    Goals6Screen,
    Goals7Screen,
    GoalsScreen,
    Goals1Screen,


    ProfileScreen,
    ExistingScreen,
    ReferEarnScreen,
    AmountHistoryScreen,
    NotificationScreen,
    RelationshipScreen,
    ReportsScreen,
    CompleteDetailScreen,

    Investment,
    Investment2Screens,
    Investment3Screens,
    Investment7Screens,
    Investment4Screens,
    Investment5Screens,
    Investment6Screens,

    Plan1,
    Plan3,
    Plan4,
    Plan5,

    DashboardScreen,
    HamburgerMenu2Screen,
    HamburgerMenu4Screen,
    HamburgerMenu5Screen,
    HamburgerMenu5TabScreen,
    HamburgerMenu7Screen,
    HamburgerMenu9Screen,

} from '../screens';
import { SideMenu } from '../components';

export const LoginFlowStack = createStackNavigator({
    splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    verify: {
        screen: VerifyScreen,
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
    createAccount: {
        screen: CreateAccountScreen,
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
    forgotpassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'verify',
});

export const Hamburgmenu = createStackNavigator({
    dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    hamburgermenu2: {
        screen: HamburgerMenu2Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    hamburgermenu4: {
        screen: HamburgerMenu4Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    HamburgerMenu5: {
        screen: HamburgerMenu5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    HamburgerMenu5Tab: {
        screen: HamburgerMenu5TabScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    HamburgerMenu7: {
        screen: HamburgerMenu7Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    HamburgerMenu7: {
        screen: HamburgerMenu9Screen,
        navigationOptions: {
            headerShown: false,
        }
    },


}, {
    initialRouteName: 'dashboard',
});

export const HomePageStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
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
}, {
    initialRouteName: 'Home',
});

export const PlanYourGoalsStack = createStackNavigator({
    Plan1: {
        screen: Plan1,
        navigationOptions: {
            headerShown: false,
        }
    },
    Plan3: {
        screen: Plan3,
        navigationOptions: {
            headerShown: false,
        }
    },
    Plan4: {
        screen: Plan4,
        navigationOptions: {
            headerShown: false,
        }
    },
    Plan5: {
        screen: Plan5,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Plan1',
});

export const InvestmentPlansStack = createStackNavigator({
    Invest1: {
        screen: Investment,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest2: {
        screen: Investment2Screens,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest3: {
        screen: Investment3Screens,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest7: {
        screen: Investment7Screens,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest4: {
        screen: Investment4Screens,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest5: {
        screen: Investment5Screens,
        navigationOptions: {
            headerShown: false,
        }
    },
    Invest6: {
        screen: Investment6Screens,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'Invest1',
});

export const TopRatedFundsStack = createStackNavigator({
    Toprated1: {
        screen: TopRoated2Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Toprated2: {
        screen: TopratedFunds5Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Toprated3: {
        screen: TopRoated6Screen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Toprated4: {
        screen: TopRoated8Screen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'Toprated1',
});

export const HoldingsSummaryStack = createStackNavigator({
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
    Goals7: {
        screen: Goals7Screen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'Goals',
});

export const FundsDetailsStack = createStackNavigator({
    FundsDetails: {
        screen: FundsHomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    FundsDetails1: {
        screen: FundDetailScreen,
        navigationOptions: {
            headerShown: false,
        }
    },

}, {
    initialRouteName: 'FundsDetails',
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

export const OthersStack = createStackNavigator({
    Upi: {
        screen: UpiScreen,
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
    Existing: {
        screen: ExistingScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    ReferEarn: {
        screen: ReferEarnScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Notifications: {
        screen: NotificationScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Relationship: {
        screen: RelationshipScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Reports: {
        screen: ReportsScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    CompleteDetail: {
        screen: CompleteDetailScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    AmountHistory: {
        screen: AmountHistoryScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'Upi',
});

const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: HomePageStack,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused, tintColor }) => {
                const imgSource = focused ? require('../../assets/exploreAct.png') : require('../../assets/explore.png');
                return <Image style={{width:32, height:32}} source={imgSource} />
            }
        }
    },
    Plan: {
        screen: PlanYourGoalsStack,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                const imgSource = focused ? require('../../assets/planAct.png') : require('../../assets/plan.png');
                return <Image style={{width:32, height:32}} source={imgSource} />
            }
        }
    },
    Dashboard: {
        screen: TopRatedFundsStack,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                const imgSource = focused ? require('../../assets/dashboardAct.png') : require('../../assets/dashboard.png');
                return <Image style={{width:32, height:32}} source={imgSource} />
            }
        }
    },
    You: {
        screen: OthersStack,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                const imgSource = focused ? require('../../assets/userAct.png') : require('../../assets/user.png');
                return <Image style={{width:32, height:32}} source={imgSource} />
            }
        }
    }
}, {
    tabBarOptions: {
        tabStyle: {
            marginTop: 10,
            marginBottom: -20
        },
        labelStyle: {
            marginTop: 10,
        },
        activeTintColor: '#ff0000',
        inactiveTintColor: '#000'
    }
});

//main navigator for user end
export const RootNavigator = createDrawerNavigator({
    HomeTab: {
        name: 'HomeTab',
        screen: TabNavigator,
        navigationOptions: {
            headerShown: false,
        }
    },
    Investment: {
        name: 'Investment',
        screen: InvestmentPlansStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    Hold: {
        name: 'Hold',
        screen: HoldingsSummaryStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    Funds: {
        name: 'Funds',
        screen: FundsDetailsStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    Reg: {
        name: 'Register',
        screen: RegisterStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    Hamburg: {
        name: 'Hamburg',
        screen: Hamburgmenu,
        navigationOptions: {
            headerShown: false,
        }
    },

},
    {
        drawerWidth: 300,
        initialRouteName: 'HomeTab',
        contentComponent: SideMenu,
        navigationOptions: {
            headerShown: false,
        }
});
