import * as S from "./styles";
import logo from "assets/img/logo.svg";

const Header = () => {
  return (
    <S.Header>
      <picture>
        <img src={logo} alt="Logo do site" />
      </picture>
      <h1>Px&Arts</h1>
    </S.Header>
  );
};

export default Header;