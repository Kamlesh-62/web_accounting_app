import { useState, useEffect } from "react";
import {projectAuth} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false);

    const signup = async (email, password, displayName) => {

        // here we are adding this two state because if below code will fail then setError will have error message, but once function will restart, but setError will have error message in state so we always start setError nll will fresh start of state....
        setError(null)
        setPending(true)

        try{
            // login
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user)

            if(!response){
                throw new Error('signup fail...')
            }

            // add display name to user
            await response.user.updateProfile({displayName})

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: response.user })


            if (!isCancelled) {
                setError(null)
                setPending(false)
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setPending(false)
            }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    
    return{ signup , error, pending }

}