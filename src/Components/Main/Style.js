import styled from 'styled-components'

export const MotherBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #17151C;
    
`

export const Card = styled.div`
    display: flex;
    width: 25vw;
    margin-top: 1.5vw;
    position: relative;
    justify-content: center;
`

export const ImageContainer = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 350px;
    overflow: hidden;

`

export const Image = styled.img`
    width: 21vw;

`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #801625;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 21vw;
`

export const Info = styled.li`
    font-family: 'Playfair Display', serif;
    color: #E2A03D;
    font-size: 1vw;
`