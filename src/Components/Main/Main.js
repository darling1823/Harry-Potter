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
            index < 24 &&
            <S.Card key={index}>
            <S.ImageContainer>
                <S.Image src={item.image} alt={item.name}/>
            </S.ImageContainer>
            <S.List>
                <S.Info>Nome: {item.name}</S.Info>
                <S.Info>Espécie: {item.species}</S.Info>
                <S.Info>Gênero: {item.gender}</S.Info>
                <S.Info>Casa: {item.house}</S.Info>
            </S.List>
            </S.Card>
        ))}
        </S.MotherBox>
    )
}

export default Main