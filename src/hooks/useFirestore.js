import { useReducer, useEffect, useState } from "react";
import { projectFirestore, projectTimestamp } from "../firebase/config";

let initialState = {
    document:null,
    error:null,
    pending:false,
    success:null

}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return { pending: true, document: null, success: false, error: null}
        case 'ADDED_DOC' :
            return{ pending:false, document:action.payload, success:true, error:null}
        case 'DELETED_DOCUMENTS' :
            return{pending:false, document:action.payload, success:true, error: null}
        case 'ERROR' : 
            return { pending: false, document: null, success: false, error: action.payload}
        default:
            return state
    }
}

export const useFireStore = (collection) => {
    const [state, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false)

    // store collection in variable
    const ref = projectFirestore.collection(collection)

    // creating function so we can refrence isCacelled as many time in project. to make code cleaner...
    const isNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    // add new entry
    const addDocument = async (doc) => {

        dispatch({type:'IS_PENDING'})

        try{
            const createdAt = projectTimestamp.fromDate(new Date())
            const addedDoc = await ref.add({...doc, createdAt})
            isNotCancelled({type:'ADDED_DOC', payload: addedDoc})

        }catch(err){
            isNotCancelled({type:'ERROR', payload: err.message})
        }

    }

    // delete entry
    const deleteDocument = async (id) => {
        dispatch({type:'IS_PENDING'})
        try{
            const deletedDoc = await ref.doc(id).delete()
            isNotCancelled({type: 'DELETED_DOCUMENTS', payload:deletedDoc})
        }catch(err){
            isNotCancelled({type:'ERROR', payload: 'Could not delete'})
        }
    }

    // clean up function
    useEffect ( () => {
        return() => setIsCancelled(true);
    },[])

    return {addDocument, deleteDocument, state}
}