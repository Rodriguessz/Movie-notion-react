import { useState , useEffect, useContext, createContext } from 'react'

import { useNavigate } from 'react-router-dom';

import { api } from '../services/api'


//Create a context
const AuthContext = createContext({});

//Create a context provider to share informations through the components;
const AuthProvider = ({children}) => {

    const [data, setData] = useState({});
    
    const signIn = async ({ email, password}) => {

        try{
        
            const response = await api.post("/sessions/create", { email, password })

            const { token , user } = response.data;

            //Storage the token and the user item in the localStorage to recover the session when the page is reloaded;
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            //Set the token will be used in the following requests;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            
            //Set the value to the user session state;
            setData({token , user})

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Login failed Please, try again!")
            }
        }

    }

    const signOut = async () => {

        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }


    //Verify if the user is already logged on the system.
    //Triggered every component re-render
    useEffect(() => {

        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if(user && token){
            
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({token, user: JSON.parse(user)})

        }

    }, [])
    
    return(
        <>
            <AuthContext.Provider value={{signIn, signOut ,user: data.user}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


//Hook to return the shared info from the AuthProvider;
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}


export { AuthProvider, useAuth }