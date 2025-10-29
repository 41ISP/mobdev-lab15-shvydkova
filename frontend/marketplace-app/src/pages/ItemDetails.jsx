import { useNavigate, useParams } from "react-router-dom"
import { useItemStore } from "../store/useItemStore"
import { useUserStore } from "../store/store"
import BidField from "../components/BidField"

const ItemDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { items } = useItemStore()
    const { jwt } = useUserStore()

    const item = items?.filter(item => item.id == id)[0]

    const handleClick = () => {
        navigate("/")
    }

    const { title, description, price, userId, username, imageUrl, createdAt, highestBid, bidCount } = item
    const isOwner = jwt && userId == jwt.userId

    return (
        <div className="container">
            <div className="item-details">
                <div className="item-card" onClick={handleClick}>
                    {imageUrl && (
                        <div className="item-image-det">
                            <img src={imageUrl} alt={title} />
                        </div>
                    )}
                    <div className="item-title">{title}</div>
                    <div className="item-meta">
                        <span className="item-username">{username}</span>
                        <span className="item-desc">{description}</span>
                        <span className="item-price">{price}₽</span>
                        {highestBid && (
                            <span className="item-highest-bid">Highest bid: {highestBid}₽</span>
                        )}
                        <span className="item-bid-count">Total bids: {bidCount || 0}</span>
                        <span className="item-created">{new Date(createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                {jwt && !isOwner && (
                    <BidField itemId={id} currentPrice={highestBid || price}/>
                )}
                <div className="bids-info">
                    <h3>Bids Information</h3>
                    <div className="bids-stats">
                        <span>Bids: {bidCount || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails