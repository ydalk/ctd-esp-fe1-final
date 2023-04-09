

export const getPersonajes = async (num: number) => {        
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`) 
        const response = await res.json()
        return response
}


export const getOnePersonaje = async (name: string) => { 
        console.log(name);
               
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`) 
        const response = await res.json()        
        return response
}

export const getIdPersonajes = async (id: number) => {        
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`) 
        const response = await res.json()                
        return response
}

  

