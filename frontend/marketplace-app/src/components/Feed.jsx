import { useEffect } from "react"
import ItemCard from "./ItemCard"
import { useItemStore } from "../store/useItemStore"
import { useUserStore } from "../store/store"

const Feed = ({ myOwn = false }) => {
    const { items, getItems } = useItemStore()
    const { jwt } = useUserStore()

    useEffect(() => {
        const handleFetch = async () => {
            try {
                getItems()
            } catch (err) {
                console.error(err)
            }
        }
        handleFetch()
    }, [])
    return (
        <>
            <div className="items-section">
                <div className="container">
                    <h2 className="section-title">Items</h2>
                    <div className="items-grid">
                        {!myOwn ?
                            items && items.map((item) => (
                                <ItemCard key={item.id} {...item} />
                            ))
                            : items && items
                                .filter(
                                    (item) => item.userId == jwt.userId)
                                .map((item) => (
                                    <ItemCard key={item.id} {...item} />
                                ))}</div>
                </div>
            </div>
        </>
    )
}
export default Feed