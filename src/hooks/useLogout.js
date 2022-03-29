import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);
    const { dispatch } = useAuthContext();


    const logout = async () =>{
        setError(null)
        setPending(true)

        try{
            await projectAuth.signOut();

            // dispatch logout action
            dispatch({type:'LOGOUT'})

            if(!isCancelled){
                setError(null)
                setPending(false)
            }
        }catch(err){
            if(!isCancelled){
                console.log(err.message)
                setError(err.message)
                setPending(false)
            }
        }
    }

    useEffect ( () => {
        return () => setIsCancelled(true)
    }, [])

    return{logout, error, pending}

}