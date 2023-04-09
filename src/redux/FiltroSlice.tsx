import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIdPersonajes, getOnePersonaje,  getPersonajes } from "../helper/data.queries";

export const getPersonajeByName = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {
        const response = getOnePersonaje(name)
        return response
    }
)

export const getAllPersonajes = createAsyncThunk(
    '/getAllPersonajes',
    async (num: number) => {        
        const response = getPersonajes(num)
        return response
    }
)

export const getPersonajeById = createAsyncThunk(
    '/getPersonajesId',
    async (num: number) => {        
        const response = getIdPersonajes(num)
        return response        
    }
)




interface initialType {
    personajes: string[],
    loading: boolean,
    favoritos: string[],
    isFavorito: boolean,
    detalle : string[],
    page: number
}

const initialState : initialType = {
    personajes: [],
    loading: false,
    favoritos: [],
    isFavorito: false,
    detalle : [],
    page: 1
}

const FiltroSlice = createSlice({
    name:'personaje',
    initialState,
    reducers: {
               
        selectedPersonaje : (state, action) => {
            state.isFavorito = true           
            state.favoritos.push(action.payload)
        },

        getPage : (state, action) => {
            state.page = action.payload            
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getPersonajeByName.fulfilled, (state, action) => {
            state.loading = false
            state.personajes = action.payload.results                
        })

        .addCase(getPersonajeByName.pending, (state) => {
            state.loading = true            
        })
        
        .addCase(getAllPersonajes.fulfilled, (state, action) => {           
            state.loading = false
            state.personajes = action.payload.results
        })  
        
        .addCase(getPersonajeById.fulfilled, (state, action) =>{
            state.loading = false            
            state.detalle = action.payload
        })  
        
    }
})

export const {selectedPersonaje, getPage} = FiltroSlice.actions
export default FiltroSlice.reducer