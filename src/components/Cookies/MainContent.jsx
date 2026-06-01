import styled from "styled-components";
import AccordionFAQ from "./AccordionFAQ";
import { SectionLabel } from "../../styles/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const StyledMainContent = styled.section`
  padding: var(--section-padding);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
`;

const ContentInner = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const BlockTitle = styled.h3`
  font-family: var(--font-family);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0;
`;

const BlockText = styled.p`
  font-family: var(--font-family);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
`;

const CookieTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CookieRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(---radius-card);
`;

const CookieIcon = styled.div`
  color: ${({ $active }) =>
    $active ? "var(--color-accent)" : "var(--color-text-muted)"};
  font-size: 1rem;
  margin-top: 2px;
  flex-shrink: 0;
`;

const CookieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CookieName = styled.span`
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
`;

const CookieDesc = styled.span`
  font-family: var(--font-family);
  font-size: 0.825rem;
  color: var(--color-text-secondary);
  line-height: 1.55;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-accent);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition);

  &:hover {
    color: var(--color-text);
  }
`;

const activeCookies = [
  {
    name: "Cookie-uri Google Ads (publicitare)",
    desc: "Instalate prin gtag.js (AW-18172690170). Folosite pentru a măsura performanța campaniilor noastre Google Ads — de exemplu, dacă ai completat formularul de contact după ce ai dat click pe o reclamă. Nu stocăm date personale direct.",
  },
];

const inactiveCookies = [
  {
    name: "Cookie-uri de analiză",
    desc: "Ex: Google Analytics — nu sunt instalate.",
  },
  {
    name: "Cookie-uri de sesiune sau autentificare",
    desc: "Nu există conturi de utilizator pe acest site.",
  },
  {
    name: "Cookie-uri de personalizare",
    desc: "Nu personalizăm conținutul pe baza comportamentului tău.",
  },
  {
    name: "Cookie-uri de rețele sociale",
    desc: "Nu există butoane de share sau pixeli de tracking social.",
  },
];

function MainContent() {
  return (
    <StyledMainContent>
      <div className="container">
        <ContentInner>
          <Block>
            <SectionLabel>Ce cookie-uri folosim</SectionLabel>
            <CookieTable>
              {activeCookies.map((c) => (
                <CookieRow key={c.name}>
                  <CookieIcon $active>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </CookieIcon>
                  <CookieInfo>
                    <CookieName>{c.name}</CookieName>
                    <CookieDesc>{c.desc}</CookieDesc>
                  </CookieInfo>
                </CookieRow>
              ))}
            </CookieTable>
          </Block>
          <Block>
            <SectionLabel>Ce cookie-uri NU folosim</SectionLabel>
            <CookieTable>
              {inactiveCookies.map((c) => (
                <CookieRow key={c.name}>
                  <CookieIcon>
                    <FontAwesomeIcon icon={faXmarkCircle} />
                  </CookieIcon>

                  <CookieInfo>
                    <CookieName>{c.name}</CookieName>
                    <CookieDesc>{c.desc}</CookieDesc>
                  </CookieInfo>
                </CookieRow>
              ))}
            </CookieTable>
          </Block>
          <Block>
            <SectionLabel>Cum poți dezactiva cookie-urile</SectionLabel>
            <BlockText>
              Poți controla și dezactiva cookie-urile direct din setările
              browserului tău. De asemenea, poți opta pentru excluderea din
              publicitatea personalizată Google folosind linkul de mai jos.
            </BlockText>
            <ExternalLink
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Setări publicitate Google
            </ExternalLink>
          </Block>
          <Block>
            <SectionLabel>Contact</SectionLabel>
            <BlockText>
              Pentru orice întrebări legate de utilizarea cookie-urilor pe acest
              website, ne poți contacta la{" "}
            </BlockText>
            <ExternalLink href="mailto:contact@webvertize.ro">
              contact@webvertize.ro
            </ExternalLink>
          </Block>
        </ContentInner>
      </div>
    </StyledMainContent>
  );
}

export default MainContent;
