import React, {useState} from 'react'
import Logo from '../data/logo.png'
import * as S from './Style'

const Header = () => {

    const [open, setOpen] = useState(false)

    return(
    <S.Container>
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