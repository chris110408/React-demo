/**
 * Created by leichen on 4/9/16.
 */


export const CHANGE_AUTH= 'CHANGE_AUTH'



export function authenticate(isLoggedIn){
    return {
        type:CHANGE_AUTH,
        payload:isLoggedIn
    }

}