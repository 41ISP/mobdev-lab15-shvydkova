
const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid }) => {

    return (
        <div className="item-card">
            <div className="item-title">{title}</div>
            <div className="item-meta">
                <span className="item-username">{username}</span>
                <span className="item-desc">{description}</span>
                <span className="item-price">{price}</span>
                <span className="item-created">{createdAt}</span>
                <span className="item-img">{imageUrl}</span>
            </div>
        </div>
    )
}
export default ItemCard