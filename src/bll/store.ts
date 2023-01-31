import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddlewear, { ThunkDispatch } from 'redux-thunk'
import { registerReducer, RegisterActionsType } from './registerReducer'
import { loginReducer, LoginActionsType } from './loginReducer'
import { recoveryReducer, RecoveryActionsType } from './recoveryReducer'
import { newReducer, NewActionsType } from './newReducer'
import { profileReducer, ProfileActionsType } from './profileReducer'

const rootReduser = combineReducers({
    register: registerReducer,
    login: loginReducer,
    recovery: recoveryReducer,
    new: newReducer,
    profile: profileReducer,
})

export const store = legacy_createStore(rootReduser, applyMiddleware(thunkMiddlewear))

export type AppStateType = ReturnType<typeof rootReduser>

export type AppActionsType =
    | RegisterActionsType
    | LoginActionsType
    | RecoveryActionsType
    | NewActionsType
    | ProfileActionsType

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppActionsType>