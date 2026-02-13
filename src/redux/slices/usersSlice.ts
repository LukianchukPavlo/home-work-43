import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export interface User {
    id: number
    name: string
    email: string
    phone: string
    username: string
    website: string
}

interface UsersState {
    user: User | null
    loading: boolean
    error: string | null
}

const initialState: UsersState = {
  user: null,
  loading: false,
  error: null,
}

export const fetchUserById = createAsyncThunk(
    "users/fetchById",
    async (id: number) => {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return responce.data
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = false
        state.error = "Failed to load user"
      })
  },

})

export default usersSlice.reducer
