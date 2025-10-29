import { useUserStore } from "../store/store"

export const registerUser = async (user) => {
    try {
        const req = await fetch("https://kitek.ktkv.dev/marketplace/api/auth/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res

    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

export const loginUser = async (user) => {
    try {
        const req = await fetch("https://kitek.ktkv.dev/marketplace/api/auth/login",
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            })

        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res

    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}
export const fetchPosts = async () => {
    try {
        const res = await fetch(`https://kitek.ktkv.dev/marketplace/api/items`)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
    }

}
export const postItem = async (item) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(`https://kitek.ktkv.dev/marketplace/api/items`,
            {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt.token
                },
            }
        )
        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
    }
}
export const deleteItem = async (id) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(`https://kitek.ktkv.dev/marketplace/api/items/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + jwt.token
            }
        })

        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err.message)
    }
}
export const fetchItemDetails = async (id) => {
    try {
        const res = await fetch(`https://kitek.ktkv.dev/marketplace/api/items/${id}`)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

// Получение ставок на товар
export const fetchItemBids = async (id) => {
    try {
        const res = await fetch(`https://kitek.ktkv.dev/marketplace/api/items/${id}/bids`)
        const json = await res.json()
        return json
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

// Создание ставки
export const createBid = async (itemId, amount) => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(`https://kitek.ktkv.dev/marketplace/api/items/${itemId}/bids`, {
            method: "POST",
            body: JSON.stringify({ amount }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + jwt.token
            }
        })

        const res = await req.json()
        if (!res.success) {
            throw new Error(res.error)
        }
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

// Получение моих ставок
export const fetchMyBids = async () => {
    try {
        const { jwt } = useUserStore.getState()
        const req = await fetch(`https://kitek.ktkv.dev/marketplace/api/bids/my`, {
            headers: {
                "Authorization": "Bearer " + jwt.token
            }
        })
        const res = await req.json()
        return res
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}