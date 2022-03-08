import React, { useState, useRef, useEffect, useContext } from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  SplashScreen,
  VerifyScreen,
  OtpScreen,
  CreateAccountScreen,
  LoginScreen,
  ForgotPasswordScreen,
  CompleteDetailsScreen,
  CompleteDetailsAddressScreen,
  CompleteDetailsBankScreen,
  UploadDocumentScreen,
  AboutUsScreen,
  TopRatedListScreen,
  TopRatedHomeScreen,
  TopRatedSearchScreen,
  TopRatedSubmitScreen,
  FundsHomeScreen,
  HomeScreen,
  UpiScreen,
  PanScreen,
  GoalsListScreen,
  GoalDetailScreen,
  InvestmentListScreen,
  InvestDetailScreen,
  TopRatedFundsScreen,
  TopRatedFundDetailsScreen,
  OwnerChoice,
  GoalsSummaryScreen,
  NoGoalsScreen,
  ProfileScreen,
  ExistingScreen,
  ReferEarnScreen,
  AmountHistoryScreen,
  NotificationScreen,
  RelationshipScreen,
  RmNotFoundScreen,
  ReportsScreen,
  CompleteDetailScreen,
  InvestmentsScreens,
  InvestmentDetailScreens,
  AddInvestmentScreens,
  InvestmentSubmitScreens,
  InvestmentListScreens,
  InvestmentSearchScreens,
  PlanHomeScreen,
  PlanSearchScreen,
  PlanListScreen,
  PlanSubmitScreen,
  DashboardScreen,
  SwitchScreen,
  TransactionHistoryScreen,
  HoldingsScreen,
  ExternalHoldingScreen,
  AddExternalHoldingScreen,
  ZoomDocuments,
} from "../screens";
import { SideMenu } from "../components";
import RedeemScreen from "../screens/HamburgerMenu/RedeemScreen";
import SchemeList from "../screens/HamburgerMenu/SchemeList";
import SwitchCheckout from "../screens/HamburgerMenu/SwitchCheckout";
import RedeemCheckout from "../screens/HamburgerMenu/RedeemCheckout";
import OwnChoiceHoldings from "../screens/Holdings/OwnChoiceHoldings";

export const LoginFlowStack = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    verify: {
      screen: VerifyScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    otp: {
      screen: OtpScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    createAccount: {
      screen: CreateAccountScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    forgotpassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "splash",
  }
);

export const Hamburgmenu = createStackNavigator(
  {
    dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Switch: {
      screen: SwitchScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Redeem: {
      screen: RedeemScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SchemeList: {
      screen: SchemeList,
      navigationOptions: {
        headerShown: false,
      },
    },
    SwitchCheckout: {
      screen: SwitchCheckout,
      navigationOptions: {
        headerShown: false,
      },
    },
    RedeemCheckout: {
      screen: RedeemCheckout,
      navigationOptions: {
        headerShown: false,
      },
    },
    TransactionHistory: {
      screen: TransactionHistoryScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Holdings: {
      screen: HoldingsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ExternalHolding: {
      screen: ExternalHoldingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddExternalHolding: {
      screen: AddExternalHoldingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "dashboard",
  }
);

export const HomePageStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pan: {
      screen: PanScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

export const PlanYourGoalsStack = createStackNavigator(
  {
    PlanHome: {
      screen: PlanHomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    PlanSearch: {
      screen: PlanSearchScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    PlanList: {
      screen: PlanListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    PlanSubmit: {
      screen: PlanSubmitScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "PlanHome",
  }
);

export const InvestmentPlansStack = createStackNavigator(
  {
    InvestmentListAll: {
      screen: InvestmentsScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestmentDetail: {
      screen: InvestmentDetailScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddInvestment: {
      screen: AddInvestmentScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestmentList: {
      screen: InvestmentListScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestmentSearch: {
      screen: InvestmentSearchScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestmentSubmit: {
      screen: InvestmentSubmitScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "InvestmentListAll",
  }
);

export const TopRatedFundsStack = createStackNavigator(
  {
    TopRatedHome: {
      screen: TopRatedHomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TopRatedList: {
      screen: TopRatedListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TopRatedSearch: {
      screen: TopRatedSearchScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TopRatedSubmit: {
      screen: TopRatedSubmitScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "TopRatedHome",
  }
);

export const HoldingsSummaryStack = createStackNavigator(
  {
    Goals: {
      screen: GoalsSummaryScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    NoGoals: {
      screen: NoGoalsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    GoalsList: {
      screen: GoalsListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    GoalDetail: {
      screen: GoalDetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestmentList: {
      screen: InvestmentListScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    InvestDetail: {
      screen: InvestDetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TopRatedFunds: {
      screen: TopRatedFundsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    TopRatedFundDetails: {
      screen: TopRatedFundDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Owner: {
      screen: OwnerChoice,
      navigationOptions: {
        headerShown: false,
      },
    },
    OwnChoiceHoldings: {
      screen: OwnChoiceHoldings,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Goals",
  }
);

export const FundsDetailsStack = createStackNavigator(
  {
    FundsDetails: {
      screen: FundsHomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "FundsDetails",
  }
);

export const RegisterStack = createStackNavigator(
  {
    RegisterDetails: {
      screen: CompleteDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RegisterAddress: {
      screen: CompleteDetailsAddressScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RegisterBankDetails: {
      screen: CompleteDetailsBankScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    UploadDocument: {
      screen: UploadDocumentScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ZoomDocuments: {
      screen: ZoomDocuments,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "RegisterDetails",
  }
);

export const OthersStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Upi: {
      screen: UpiScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Existing: {
      screen: ExistingScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ReferEarn: {
      screen: ReferEarnScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Notifications: {
      screen: NotificationScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Relationship: {
      screen: RelationshipScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    RmNotFound: {
      screen: RmNotFoundScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Reports: {
      screen: ReportsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    CompleteDetail: {
      screen: CompleteDetailScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AmountHistory: {
      screen: AmountHistoryScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Profile",
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: HomePageStack,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({ focused, tintColor }) => {
          const imgSource = focused
            ? require("../../assets/exploreAct.png")
            : require("../../assets/explore.png");
          return (
            <Image
              style={{ width: 28, height: 28, marginTop: 5 }}
              source={imgSource}
            />
          );
        },
      },
    },
    Plans: {
      screen: InvestmentPlansStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const imgSource = focused
            ? require("../../assets/planAct.png")
            : require("../../assets/plan.png");
          return (
            <Image
              style={{ width: 28, height: 28, marginTop: 5 }}
              source={imgSource}
            />
          );
        },
      },
    },
    DashBoard: {
      screen: Hamburgmenu,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const imgSource = focused
            ? require("../../assets/dashboardAct.png")
            : require("../../assets/dashboard.png");
          return (
            <Image
              style={{ width: 28, height: 28, marginTop: 5 }}
              source={imgSource}
            />
          );
        },
      },
    },
    YOU: {
      screen: OthersStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          const imgSource = focused
            ? require("../../assets/userAct.png")
            : require("../../assets/user.png");
          return (
            <Image
              style={{ width: 28, height: 28, marginTop: 5 }}
              source={imgSource}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      tabStyle: {
        //marginTop: 10,
        //marginBottom: -20,
      },
      labelStyle: {
        marginTop: 5,
      },
      activeTintColor: "#ff0000",
      inactiveTintColor: "#000",
    },
  }
);

//main navigator for user end
export const RootNavigator = createDrawerNavigator(
  {
    HomeTab: {
      name: "HomeTab",
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    Investment: {
      name: "Investment",
      screen: InvestmentPlansStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Plan: {
      name: "Plan",
      screen: PlanYourGoalsStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Dashboard: {
      name: "TopRatedHome",
      screen: TopRatedFundsStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    You: {
      name: "Upi",
      screen: OthersStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Hold: {
      name: "Hold",
      screen: HoldingsSummaryStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Funds: {
      name: "Funds",
      screen: FundsDetailsStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Reg: {
      name: "RegisterDetails",
      screen: RegisterStack,
      navigationOptions: {
        headerShown: false,
      },
    },
    Hamburg: {
      name: "Hamburg",
      screen: Hamburgmenu,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    drawerWidth: 300,
    initialRouteName: "HomeTab",
    contentComponent: SideMenu,
    navigationOptions: {
      headerShown: false,
    },
  }
);
