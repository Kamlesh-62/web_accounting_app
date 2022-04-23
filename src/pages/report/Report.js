import { useEntryCollection } from "../../hooks/useEntryCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import CashflowReport from "./CashflowReport";

const Report = () => {

    const { user } = useAuthContext()
    const { documents } = useEntryCollection(
        'transaction',
        ['uid', '==', user.uid],
        ['createdAt', "desc"]
    )
    
    return(
        <main>
            { documents && <CashflowReport user={user} documents={documents} />}
        </main>
    )
}
export default Report;