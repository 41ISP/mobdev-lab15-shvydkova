import { useState } from "react"
import { createBid } from "../api/api"
import { useItemStore } from "../store/useItemStore"
import Button from "./Button"
import Input from "./Input"

const BidField = ({ itemId, currentPrice }) => {
    const [amount, setAmount] = useState("")
    const [error, setError] = useState("")
    const { getItems } = useItemStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        try {
            await createBid(itemId, amount)
            setAmount("")
            getItems()
        } catch (err) {
            setError(err.message)
        } 
    }

    return (
        <div className="bid-field">
            <h3>Place Your Bid</h3>
            <form onSubmit={handleSubmit} className="bid-form">
                <Input placeholder={`${currentPrice}`} value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <Button type="submit">Send</Button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}

export default BidField