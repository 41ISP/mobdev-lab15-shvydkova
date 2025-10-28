
const ItemCard = ({ id, title, description, price, userId, username, status, imageUrl, createdAt, highestBid }) => {

    return (
        <div className="message-card">
            <div className="message-content">{title}</div>
            <div className="message-meta">
                <span className="message-author">{username}</span>
                <span className="message-author">{description}</span>
                <span className="message-author">{price}</span>
                <span className="message-time">{createdAt}</span>
            </div>
        </div>
    )
}
export default ItemCard