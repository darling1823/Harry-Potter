import React, {useState} from 'react'
import Logo from '../data/logo.png'
import * as S from './Style'

const Header = () => {

    const [open, setOpen] = useState(false)

    const Mobile = () => {
        <nav>
            <ul>
                <S.List>Home</S.List>
                <S.List>Livros</S.List>
                <S.List>Personagens</S.List>
            </ul>
        </nav>
    }

    return(
    <S.Container>
        <S.MenuB onClick={()=>{setOpen(!open)}}>{open === true ? 'X' : '☰'}</S.MenuB>
        {open && Mobile()}
        <S.Potter>
            <S.Harry src={Logo} alt='Logo'/>
        </S.Potter>
        <S.Navigation>
            <S.MenuList>
                <S.List>Home</S.List>
                <S.List>Livros</S.List>
                <S.List>Personagens</S.List>
            </S.MenuList>
        </S.Navigation>
    </S.Container>
    )
}

export default Header