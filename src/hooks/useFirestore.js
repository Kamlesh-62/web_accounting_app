import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
    document:
}

const useFireStore = (collection) => {

    const [response, dispatch] = useReducer(firestoreReducer, initialState);

}