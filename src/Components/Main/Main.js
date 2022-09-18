import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as S from './Style'

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
        <S.MotherBox>
        {api.map((item,index)=>(
            index < 25 &&
            <S.Card key={index}>
            <S.ImageContainer>
                <img src={item.image} alt={item.name}/>
            </S.ImageContainer>
            <ul>
                <li>Nome: {item.name}</li>
                <li>Espécie: {item.species}</li>
                <li>Gênero: {item.gender}</li>
                <li>Casa: {item.house}</li>
            </ul>
            </S.Card>
        ))}
        </S.MotherBox>
    )
}

export default Main