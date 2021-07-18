import Cards from './Cards'
import React, { useEffect, useState} from 'react'

const ListCards = () => {

    const [celebridades, setCelebridades] = useState([])
    const[error,setError] = useState(false)
    useEffect(() => {
        const getUsuarios= async () => {
            try{
            const res= await fetch("https://randomuser.me/api/?results=50")
            const data=await res.json()
            console.log(data.result)
            setCelebridades(data.results)
            setError(false)
        }catch(err){
            console.log(err)
            setError(true)
        }
    }
        getUsuarios()
    }, [])
    if(error){
        return <h1 className="alert alert danger" role="alert">
               Error al cargar el api users <a href="https://randomuser.me/api/?results=50" 
               className="alert-link">Verifique el link</a>
               </h1>
    }
    return(
      <div className="container">
        <div className="row">
            { celebridades.map(user=>(
                <div className="col-sm-6 col-md-4 col-lg-3" key={user.login.uuid}>
                    <Cards user={user}/>
                </div>
            ))
            }
        </div>
     </div>
    )
}
export default ListCards