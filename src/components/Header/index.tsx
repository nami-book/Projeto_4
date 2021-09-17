import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <picture>
        <img src={"./assets/img/logo.svg"} alt="Logo do site" />
      </picture>
      <h1>Px&Arts </h1>
    </S.Header>
  );
};

export default Header;