import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer as AuthRedux } from './AuthRedux';
import { reducer as OwnerChoiceRedux } from './OwnerChoiceRedux';
import { reducer as CartActionsRedux } from './CartActionsRedux';
import { reducer as TransactionHisRedux } from './TransactionHisRedux';
import { reducer as RedemptionRedux } from './RedemptionRedux';
import { reducer as SwitchRedux } from './SwitchRedux';
import { reducer as RegistrationRedux } from './RegistrationRedux';
import { reducer as HomeRedux } from './HomeRedux';
import { reducer as TopRatedFundRedux } from './TopRatedFundRedux';
import { reducer as SideMenuRedux } from './SideMenuRedux';
const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
    ]
}
export default persistCombineReducers(config, {
    auth: AuthRedux,
    registration: RegistrationRedux,
    home: HomeRedux,
    toprated: TopRatedFundRedux,
    sideMenu: SideMenuRedux,
    OwnerChoice: OwnerChoiceRedux,
    CartActions: CartActionsRedux,
    TransactionHis: TransactionHisRedux,
    Redemption: RedemptionRedux,
    Switch: SwitchRedux,

});