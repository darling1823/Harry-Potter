import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #CE6A85;
`

export const Navigation = styled.nav`
    width: 100vw;
    background: #1B2021;
`

export const Potter = styled.figure`
    height: 200px;
    display: flex;
    align-items: center;
    overflow: hidden;
`

export const Harry = styled.img`
    width: 30vw;
`

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
`

export const List = styled.li`
    font-family: 'Playfair Display', serif;
    color: #E2A03D;
    font-size: 1.5vw;
`