import { useNavigate } from "react-router-dom"

const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/item/${id}`)
    }

    return (
        <div className="item-card" onClick={handleClick}>
            {imageUrl && (
                <div className="item-image">
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
        </div>
    )
}
export default ItemCard