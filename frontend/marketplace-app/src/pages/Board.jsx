import Feed from "../components/Feed"
import ItemField from "../components/ItemField"
import { useUserStore } from "../store/store"

const Board = () => {
    const { jwt } = useUserStore() 
    return (
        <>
        {jwt && <ItemField />}
        <Feed />
        </>
    )
}
export default Board