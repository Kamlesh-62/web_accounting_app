import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email,password) => {
        setError(null)
        setPending(true)
        try{
            const response = await projectAuth.signInWithEmailAndPassword(email,password);

            // dispatch logout action
            dispatch({ type: 'LOGIN', payload:response.user })

            if (!isCancelled) {
                setError(null)
                setPending(false)
            }

        }catch(err) {
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

    return { login, error, pending }
}