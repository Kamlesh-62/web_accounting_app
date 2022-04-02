import JournalEntryForm from "./JournalEntryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEntryCollection } from "../../hooks/useEntryCollection";
import  EntryList from "./EntryList";


const Home = () => {
    const {user} = useAuthContext()
    const { documents, error} = useEntryCollection(
        'transaction',
        ['uid', '==', user.uid],
        ['createdAt', "desc"]
        )
    
    return(
        <div>
            <div>
                {error && <p>{error}</p>}
                {documents && <EntryList entries={documents} />}
            </div>
            <div>
                <JournalEntryForm uid={user.uid}/>
            </div>
        </div>
    )
}
export default Home;