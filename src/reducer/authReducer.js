export const authInfo =  {
    authUserInfo(state = {}, action){
        switch (action.type) {
            case 'USER_INFO_ADDED': {
                return {...state, ...action.payload};
            }
            default: {
                return state;
            }
        }
    }
}