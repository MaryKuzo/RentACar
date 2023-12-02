import styled from "styled-components";
import bgImg from "../../assets/img/hero-img.jpeg";

export const Container = styled.div`
  display: flex;
`;

export const HeroContainer = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
    ),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  border-radius: 22px;
  margin-top: 48px;
  background: rgba(255, 255, 255, 0.75);

  h1 {
    color: #121417;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.5;
  }

  h2 {
    margin-bottom: 24px;
  }

  p {
    color: #121417;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;

export const NavigationLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 15px;

  a {
    border-radius: 22px;
    padding: 18px 24px;
    background:#3470ff;

    &.active {
      background: #3470ff;


      &:hover,
      &:focus {
        background: #0b44cd;
      }
    }

    &:hover,
    &:focus {
      background:  #0b44cd;
    }
  }
`;
