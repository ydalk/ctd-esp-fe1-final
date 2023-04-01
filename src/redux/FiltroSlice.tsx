import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOnePersonaje, getPersonajes } from "../helper/data.queries";

export const getPersonajeByName = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {        
        const response = getOnePersonaje(name)
        return response
    }
    
)

export const getAllPersonajes = createAsyncThunk(
    '/getAllPersonajes',
    async () => {        
        const response = getPersonajes()
        return response
    }
    
)

interface Personaje {
    id: number
    name: string
    gender: string
    image: string
}

interface initialType {
    personajes: Personaje[],
    loading: boolean
}

const initialState : initialType = {
    personajes: [],
    loading: false
}

const FiltroSlice = createSlice({
    name:'personaje',
    initialState, 
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(getPersonajeByName.fulfilled, (state, action) => {
            state.loading = false
            state.personajes = action.payload
            
        })
        .addCase(getPersonajeByName.pending, (state) =>{
            state.loading = true
        })

        .addCase(getAllPersonajes.fulfilled, (state, action) => {
            state.loading = false
            state.personajes = action.payload;
            
        })
    },
})


export default FiltroSlice.reducer