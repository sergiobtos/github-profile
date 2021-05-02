export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile(){
    var token = "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";
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