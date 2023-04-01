

export const getPersonajes = async () => {        
        const res = await fetch(`https://rickandmortyapi.com/api/character`) 
        const response = await res.json()
        return response.results
}


export const getOnePersonaje = async (name: string) => {        
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`)  // no esta llegando
        const response = await res.json()
        return response.results
}
    
