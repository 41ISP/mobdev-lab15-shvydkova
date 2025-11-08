import { create } from "zustand"
import { fetchPosts } from "../api/api"

export const useItemStore = create((set, get) => ({
    items: undefined,
    getItems: async () => {
        const data = await fetchPosts()
        set((oldStore) => ({...oldStore, items:data}))
    }
}))