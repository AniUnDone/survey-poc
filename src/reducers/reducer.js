//import {userActions} from '../actio?ns/actions'

export default function reducer(state=[], action){
    if(action.type ==='userLoggedIn'){
        // console.log('reducer logged in')
        return [
            ...state,
            {
                id: 1,
                status: action.payload.description,
                loggedIn: true
            }
        ]
    }
       
        else if(action.type ==='userLoggedOut')
            return [
                ...state,
                {
                    id: '1',
                    status: action.payload.status,
                    isAdmin: true
                }
            ]
    return state
}