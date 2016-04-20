

export const LOGIN_POST= 'LOGIN_POST'


export function loginPost(props){
    const request=(props)
    return {
        type:LOGIN_POST,
        payload:request
    }
}

