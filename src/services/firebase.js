import {collection, getDocs, getFirestore} from "firebase/firestore"

export const getDocuments = (colName) =>{
    const db = getFirestore()
    const colRef = collection(db,colName)
    return getDocs(colRef).then(snapshot =>{
        const allData = snapshot.docs.map(document =>({id:document.id, ...document.data}))
    return allData
    })
}