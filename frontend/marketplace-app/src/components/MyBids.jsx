import { useEffect, useState } from "react"
import { fetchMyBids } from "../api/api"
import { useUserStore } from "../store/store"
import { Link, useNavigate } from "react-router-dom"

const MyBids = () => {
    const [bids, setBids] = useState([])
    const { jwt } = useUserStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (!jwt) {
            navigate("/signin")
            return
        }

        const loadMyBids = async () => {
            try {
                const bidsData = await fetchMyBids()
                setBids(bidsData)
            } catch (err) {
                console.error(err)
            }
        }
        loadMyBids()
    }, [])

    return (
        <div className="container">
            <h1>My Bids</h1>
                <div className="my-bids-list">
                    {bids.map(bid => (
                        <div key={bid.id} className={`bid-card ${bid.isWinning ? 'winning' : 'outbid'}`} onClick={() => navigate(`/item/${bid.itemId}`)}>
                            <div className="bid-item-info">
                                <h3>{bid.itemTitle}</h3>
                                <p className="bid-amount">Your bid: {bid.amount}₽</p>
                                <p className="bid-status">Status: {bid.isWinning ? 'Winning' : 'Outbid'}</p>
                                <p className="bid-time">CreatedAt: {new Date(bid.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default MyBids