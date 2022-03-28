import { useState } from "react";
import {projectAuth} from "../firebase/config";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const signup = async (email, password, displayName) => {

        // here we are adding this two state because if below code will fail then setError will have error message, but once function will restart, but setError will have error message in state so we always start setError nll will fresh start of state....
        setError(null)
        setPending(true)

        try{
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user)

            if(!response){
                throw new Error('signup fail...')
            }
            // add display name to user

            await response.user.updateProfile({displayName})

            setPending(false)
            setError(null)
        }
        catch(err) {
            console.log(err)
            setError(err.message)
            setPending(false)
        }

    }

    return{signup , error, pending}

}