import { AUTHENTIFICATION } from '../actions';

const initial_uthentication = {
    loading: false,
    message: "",
    success: false,
    user: {}
}

const initialState = {
    authentication: initial_uthentication,
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case AUTHENTIFICATION:

            return {
                ...state,
                authentication: initial_uthentication
            }
        default:
            return state
    }
}
