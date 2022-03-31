import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"

export const useEntryCollection = (collection) => {
    const [documents,setDocuments] = useState(null)
    const [error,setError] = useState(null)

    useEffect( () => {
        let ref = projectFirestore.collection(collection)

        const clearSubscribtion = ref.onSnapshot(snapshot => {
            let results = []

            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id:doc.id})
            })
            // update state
            setDocuments(results)
            setError(null)
            console.log(results)
        },error =>{
            console.log(error)
            setError('Could not fetch the data')
        })
        // clear sub..
        return () => clearSubscribtion();


    },[collection])
    
    return {documents, error} 
}
