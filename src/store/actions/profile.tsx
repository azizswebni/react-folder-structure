import { profileActionType } from '../actionTypes'
import store from '../index'


export const login = ()  => {
    store.dispatch({
        type: profileActionType.UPDATE_PROFILE_DETAILS,
        payload: true
    })
}

