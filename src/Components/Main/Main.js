import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Main = () => {

    const [api, setApi] = useState([])

    useEffect(()=>{
        axios.get('http://hp-api.herokuapp.com/api/characters')
        .then((response)=>{
            setApi(response.data)
        })
        .catch((error)=>{
            console.log("I'm a error myself", error)
        })
    }, [])


    return(
        <>
        {api.map((item)=>(
            <div>
            <ul>
                <li>name: {item.name}</li>
            </ul>
            <img src={item.image} alt={item.name}/>
            </div>
        ))}
        </>
    )
}

export default Main