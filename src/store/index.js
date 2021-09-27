import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer as AuthRedux } from './AuthRedux';
import { reducer as RegistrationRedux } from './RegistrationRedux';
import { reducer as HomeRedux } from './HomeRedux';
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
});