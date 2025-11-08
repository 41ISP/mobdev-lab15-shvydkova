import { postItem } from "../api/api"
import { useItemStore } from "../store/useItemStore"
import Button from "./Button"
import Input from "./Input"

const ItemField = () => {
    const { getItems } = useItemStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const item = {
                title: e.target.title.value,
                description: e.target.description.value,
                price: e.target.price.value,
                imageUrl: e.target.imageUrl.value,
            }
            await postItem(item)
            getItems()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="create-item-section">
                <div className="container">
                    <div className="create-item-card">
                        <h2 className="create-item-title">Create item</h2>
                        <form onSubmit={handleSubmit} action="" className="create-item-form">
                            <Input placeholder="title" required name="title"></Input>
                            <Input placeholder="description" required name="description"></Input>
                            <Input placeholder="price" required name="price"></Input>
                            <Input placeholder="imageUrl" required name="imageUrl"></Input>
                            <Button>Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemField