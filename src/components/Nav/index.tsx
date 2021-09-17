
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Nav = () =>{
    return(
        <S.Nav>
            <label htmlFor="menu-toggle">
                <div className="menu-hamburger">
                <span className="hamburger"></span>
                </div>
            </label>
            <ul>
                <h2><li><Link to="/" >Acessórios</Link></li></h2>
                <h2><li><Link to="">Action</Link> </li> </h2>
                <h2><li><Link to="">Camisetas</Link> </li> </h2>
                <h2><li><Link to="">Quadros</Link></li> </h2>
                <h2><li><Link to="">Empresa</Link></li> </h2>
            </ul>
        </S.Nav>

    );
};

export default Nav;