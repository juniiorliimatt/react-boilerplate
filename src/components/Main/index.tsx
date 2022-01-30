import * as styles from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => {
  return (
    <styles.Wrapper>
      <styles.Logo
        src="img/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <styles.Title>{title}</styles.Title>
      <styles.Description>{description}</styles.Description>
      <styles.Illustration
        src="img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </styles.Wrapper>
  );
};

export default Main;
