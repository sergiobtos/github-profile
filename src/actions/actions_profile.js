export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';


export function fetchProfile(){
    let { REACT_APP_GITHUB_TOKEN } = process.env;
    
    var token = REACT_APP_GITHUB_TOKEN;
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token "+token});
    return(dispatch) => {
        return fetch('https://api.github.com/users/sergiobtos', {
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json => {
            dispatch(loadProfile(json))
        })
        .catch(err => console.log(err));
    }
}

export function loadProfile(results){
    return {
        type : PROFILE_FETCHED,
        payload : results
    }
}

export function saveProfile(profile){
    let { REACT_APP_GITHUB_TOKEN } = process.env;
    
    var token = REACT_APP_GITHUB_TOKEN;
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token "+token});
    return(dispatch) => {
        return fetch('https://api.github.com/user', {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify(profile)
        })
        .then(response => response.json())
        .then(json => {
            dispatch(loadProfile(json))
        })
        .catch(err => console.log(err));
    }
}