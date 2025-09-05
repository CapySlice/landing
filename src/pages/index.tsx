import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import { MouseAnimation } from "../components/mouse-animation/mouse-animation";
import logo from "../images/logo.jpg";

import "./reset.css";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e68700;
  display: flex;
  font-family: "Chewy", system-ui;
  color: #ededed;
`;

const Header = styled.header`
  position: fixed;
  width: 100vw;
  background: #171717;
`;
const HeaderWrapper = styled.div`
  width: 50vw;
  margin: auto;
  gap: 1.5rem;
  display: flex;
  padding: 1rem 0;
`;

const Logo = styled.img`
  width: 6rem;
  height: 6rem;
  objectfit: cover;
  border-radius: 50%;
`;
const HeaderTitle = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 6rem;
`;

const Wrapper = styled.section`
  margin: auto auto 0 auto;
  display: flex;
  height: 70vh;
`;
const SorryWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;
`;
const LoadingIcon = styled.img``;
const SorryTitle = styled.h3`
  font-size: 5rem;
  font-weight: 300;
`;
const SorrySubtitle = styled.h4`
  font-size: 3rem;
  font-weight: 200;
  margin-bottom: 1rem;
`;
const SorryHook = styled.h5`
  font-size: 1.5rem;
`;

const AnimationWrapper = styled.div`
  margin: 10rem auto 0 auto;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Header>
        <HeaderWrapper>
          <Logo src={logo} />
          <HeaderTitle>CapySlice</HeaderTitle>
        </HeaderWrapper>
      </Header>
      <Wrapper>
        <SorryWrapper>
          <LoadingIcon></LoadingIcon>
          <SorryTitle>¡Lo sentimos!</SorryTitle>
          <SorrySubtitle>A tu pizza aún le quedan 5 minutos...</SorrySubtitle>
          <SorryHook>
            (Aunque mientras esperas puedes ponerte en contacto con nosotros más
            abajo)
          </SorryHook>
          <AnimationWrapper>
            <MouseAnimation />
          </AnimationWrapper>
        </SorryWrapper>
      </Wrapper>
    </Main>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>CapySlice</title>;
