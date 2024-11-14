import { useState, useEffect, useContext, createContext } from 'react'

import { useNavigate } from 'react-router-dom';

import { api } from '../services/api'


//Create a context
const AuthContext = createContext({});

//Create a context provider to share informations through the components;
const AuthProvider = ({ children }) => {

    const [data, setData] = useState({});

    const signIn = async ({ email, password }) => {

        try {

            const response = await api.post("/sessions/create", { email, password })

            const { token, user } = response.data;

            //Storage the token and the user item in the localStorage to recover the session when the page is reloaded;
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            //Set the token will be used in the following requests;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            //Set the value to the user session state;
            setData({ token, user })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Login failed Please, try again!")
            }
        }

    }

    const signOut = async () => {

        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    const updateProfile = async ({ user, avatarFile }) => {

        try {
       
            if (avatarFile) {
                //Create a multipart/form-data to sent files on request;
                const uploadForm = new FormData();
                //Add the file sent by the user in the form on avatar field;
                uploadForm.append("avatar", avatarFile)

                const { data } = await api.patch("/users/avatar", uploadForm);
                //Set the new avatar to the user
                user.avatar = data.user.avatar;
            }

            //Update the basic user infos
            await api.put("/users/update", user)

            //Update the user info on the localStorage;
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            //Set the new user infos on state shared through the provider;
            setData({token: data.token, user})
        
            alert("Profile successfuly updated!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Failed to update the infos. Please, try again later!")
            }
        }


    }


    //Verify if the user is already logged on the system.
    //Triggered every component re-render
    useEffect(() => {

        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if (user && token) {

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({ token, user: JSON.parse(user) })

        }

    }, [])

    return (
        <>
            <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}


//Hook to return the shared info from the AuthProvider;
function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export { AuthProvider, useAuth }