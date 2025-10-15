import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import cataloniaFlag from "../images/catalonia-flag.png";
import espanaFlag from "../images/espana-flag.png";
import englandFlag from "../images/england-flag.png";
import "./reset.css";
import texts from "../static/texts.json";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #f7931e 0%, #f15a24 100%);
  display: flex;
  font-family: "Chewy", system-ui;
  color: #ededed;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  width: 100%;
  top: 0;
`;
const LanguageFlag = styled.img`
  height: 2rem;
  margin-right: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(24, 27, 31, 0.3) 0px 0px 0px 2px;
  }
`;

const Wrapper = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 25vw, 4rem);
  font-weight: 300;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.h2`
  font-size: clamp(2rem, 12vw, 3rem);
  font-weight: 200;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

const Contact = styled.h3`
  font-size: clamp(1.3rem, 5vw, 1.5rem);
  font-weight: 100;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

const IndexPage: React.FC<PageProps> = () => {
  enum Lang {
    CAT = "cat",
    ESP = "esp",
    ENG = "eng",
  }

  enum Text {
    TITLE = "title",
    SUBTITLE = "subtitle",
    CONTACT = "contact",
  }
  const [selectedLang, setSelectedLang] = useState(Lang.CAT);

  return (
    <Main>
      <Header>
        {selectedLang !== Lang.ENG && (
          <LanguageFlag
            src={englandFlag}
            onClick={() => setSelectedLang(Lang.ENG)}
          />
        )}
        {selectedLang !== Lang.ESP && (
          <LanguageFlag
            src={espanaFlag}
            onClick={() => setSelectedLang(Lang.ESP)}
          />
        )}
        {selectedLang !== Lang.CAT && (
          <LanguageFlag
            src={cataloniaFlag}
            onClick={() => setSelectedLang(Lang.CAT)}
          />
        )}
      </Header>
      <Wrapper>
        <Title>{texts[selectedLang][Text.TITLE]}</Title>
        <Subtitle>{texts[selectedLang][Text.SUBTITLE]}...</Subtitle>
        <Contact>
          ({texts[selectedLang][Text.CONTACT]}{" "}
          <a href="mailto:contact@capyslice.com">contact[at]capyslice.com</a>)
        </Contact>
      </Wrapper>
    </Main>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>CapySlice</title>;
