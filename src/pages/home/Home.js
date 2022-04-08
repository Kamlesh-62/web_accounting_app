import JournalEntryForm from "./JournalEntryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEntryCollection } from "../../hooks/useEntryCollection";
import  EntryList from "./EntryList";
import RevenueExpenseTotal from "./RevenueExpenseTotal";
import './home.scss'


const Home = () => {
    const {user} = useAuthContext()
    const { documents, error} = useEntryCollection(
        'transaction',
        ['uid', '==', user.uid],
        ['createdAt', "desc"]
        )
    
    return(
        <main className="home-page">
            <section className="journalEntryForm-total wrapper">
                <div>
                    <JournalEntryForm uid={user.uid}/>
                </div>
                <div>
                    {documents && <RevenueExpenseTotal documents={documents} /> }
                </div>
            </section>
            <section className="histroy">
                <div>
                    {error && <p>{error}</p>}
                    {documents && <EntryList entries={documents} />}
                </div>
            </section>
        </main>
    )
}
export default Home;