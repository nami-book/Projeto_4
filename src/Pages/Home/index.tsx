import { Header, Nav,Project,Footer} from "components";
import { projects } from "services/data";
import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <S.Main>
        {projects.map((item) => (
          <Project key={item.id}>
            <h4>{item.cliente}</h4>
            <p>{item.comentario}</p>
          </Project>
        ))}
      </S.Main>
      <Footer />
    </>
  );
};

export default Home;