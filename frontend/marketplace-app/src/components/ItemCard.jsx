import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/store"
import { useItemStore } from "../store/useItemStore"
import { deleteItem } from "../api/api"

const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid }) => {
    const navigate = useNavigate()
    const { getItems } = useItemStore()
    const handleClick = () => {
        navigate(`/item/${id}`)
    }
    const jwt = useUserStore((state) => state.jwt)
    const LoggedUserId = () => {
        if (!jwt) return null;
        if (jwt.userId) return jwt.userId;
    };
    const loggedUserId = LoggedUserId();

    const handleDelete = async () => {
        await deleteItem(id)
        getItems()
    }

    return (
        <div className="item-card">
            {imageUrl && (
                <div className="item-image" onClick={handleClick}>
                    <img src={imageUrl} alt={title} />
                </div>
            )}
            <div className="item-title">{title}</div>
            <div className="item-meta">
                <span className="item-username">{username}</span>
                <span className="item-desc">{description}</span>
                <span className="item-price">{price}₽</span>
                {highestBid && (
                    <span className="item-highest-bid">Highest bid: {highestBid}</span>
                )}
                <span className="item-created">{new Date(createdAt).toLocaleDateString()}</span>
            </div>
            {loggedUserId && userId && loggedUserId === userId && (
                <div>
                    <button onClick={handleDelete}
                        className="button-delete">
                        <span>🗑️</span>
                        <span>Удалить</span>
                    </button>
                </div>)}
        </div>
    )
}
export default ItemCard