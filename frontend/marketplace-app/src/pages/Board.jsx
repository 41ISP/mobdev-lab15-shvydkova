import Feed from "../components/Feed"
import ItemField from "../components/ItemField"
import { useUserStore } from "../store/store"

const Board = () => {
    const { jwt } = useUserStore() 
    return (
        <>
        <h1>Board</h1>
        {jwt && <ItemField />}
        <Feed />
        </>
    )
}
export default Board