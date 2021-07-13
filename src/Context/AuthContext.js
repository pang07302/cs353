import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    // const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    
    const http = axios.create({
        baseURL: `http://localhost:8000`
    })  

    const createUser = user => http.post(`/register`, user)
    const login = user => http.post(`/login`, user)
    const getUser = () => http.post(`/account`)
    
    


    // useEffect(() => {
    //    let isMounted = true; 
    //     http.get(`/account`)
    //    .then(res => {

    //         if (isMounted) {
    //             console.log(res)
    //             setCurrentUser(res.data)
    //             setLoading(false)
    //        }
    //     })
    //    .catch(err => { 
    //        console.log(err)
    //     })
    //     return ()=>{
    //         isMounted = false;
    //     }
    // }, [])

    // useEffect(()=>{
    //     let isMounted = true;

    //     async function requestUser(){
           
    //         try{
    //             if(isMounted){
    //                 let res = await http.get(`/account`);
    //                 // console.log(res)
    //                 setCurrentUser(res)
    //                 setLoading(false)
    //             }else{
    //                 setLoading(true)
    //             }
    //         }catch(error){
    //             console.log(error);
    //         }
    //     }
    //     requestUser();
    //     return()=>{
    //         isMounted=false;
    //     }

    // },[]);


    // async function requestUser(){
    //     try{
    //         let res = await http.get(`/account`);
         
    //         setCurrentUser(res.data)
            
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    const value = {
        // currentUser,
        createUser,
        login,
        getUser,
        
        
    }

    return (
        <AuthContext.Provider value={value}>
            { children}
        </AuthContext.Provider>
    )
}