
export const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return {
                isLoading: true,
            }
        case "USER_LOGIN_SUCCESS":
            return {
                isLoading: false,
                userInfo: action.payload
            }
            case "USER_LOGIN_FAIL":
            return {
                isLoading: false,
                error: action.payload
            }
        default : 
        return state

    }
}