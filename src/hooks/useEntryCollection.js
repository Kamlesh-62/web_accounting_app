import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"

export const useEntryCollection = (collection) => {
    const [documents,setDocuments] = useState([])
    const [error,setError] = useState(null)

    useEffect( () => {
        let ref = projectFirestore.collection(collection)

        const clearSubscribtion = ref.onSnapshot( (snapshot) => {
            console.log(snapshot)
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({...doc, id:doc.id})
            })
            // update state
            setDocuments(results)
            console.log(documents)
            console.log("i am called")
            setError(null)
        },(error) =>{
            console.log(error)
            setError('Could not fetch the data')
        })
        // clear sub..
        return  () => clearSubscribtion();


    },[collection])
    
    return {documents, error}
}
