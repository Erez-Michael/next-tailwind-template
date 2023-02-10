import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoLandingPage from "../LogoDesign/LogoLandingPage";

const LandingPage = () => {
  return (
    <Wrapper>
      <StyledLogo>
        <LogoLandingPage />
      </StyledLogo>
      <StyledLanguage>
        <French>
          <NavigationLink to="/accueil">Entrez </NavigationLink>
        </French>
        <span>|</span>
        <English>
          <NavigationLink to="/home">Enter</NavigationLink>
        </English>
      </StyledLanguage>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 auto 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(173, 173, 173);
  background: linear-gradient(
    130deg,
    rgba(173, 173, 173, 1) 0%,
    rgba(242, 242, 242, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;
const StyledLogo = styled.div`
  cursor: pointer;
  position: absolute;
  transition: all ease-in-out;

  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 320px) {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    transform: scale(1.3);
  }
  @media (min-width: 1024px) {
    transform: scale(1.5);
  }
`;
const StyledLanguage = styled.div`
  margin-top: 70vh;
  display: flex;
  flex-direction: row;
  span {
    margin-left: 5px;
  }
  transition: all ease-in-out;

  animation: fadeInAnimation ease 6s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const French = styled.div`
  font-weight: 600;
`;
const English = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: #345272;
  :hover {
    color: wheat;
    transform: scale(1.5);
  }
`;

export default LandingPage;
