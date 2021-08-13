import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];
    // {
    //     // id: 1,
    //     // msg: 'Please login',
    //     // alertType: 'Success'
    // }

    //const { type, payload } = action;
    export default function foo(state = initialState, action ){
        switch (action.type) {
            case SET_ALERT:
                return [...state, action.payload];
            case REMOVE_ALERT:
                return state.filter((alert) => alert.id !== action.payload);
            default:
                return state;
        }
    }