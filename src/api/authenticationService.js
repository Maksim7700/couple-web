import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/auth/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/user/about`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const teste=(req)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/user/info`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}
