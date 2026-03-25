import {
  faCheck,
  faInfo,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import CTAButton from './CTAButton';
import { useState } from 'react';

const StyledPackage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: ${(props) =>
    props.type === 'standard' ? '5px solid #1b3c53' : '5px solid grey'};
  border-radius: 1rem;
  background-color: #fff;
  color: #000;
  flex: ${(props) => (props.type === 'standard' ? '1.2' : '1')};
  margin-top: ${(props) => (props.type === 'standard' ? '-12px' : 'unset')};
  margin-bottom: ${(props) => (props.type === 'standard' ? '-12px' : 'unset')};
  color: #6b7280;

  @media (max-width: 576px) {
    order: ${(props) =>
      props.type === 'standard' ? '1' : props.type === 'basic' ? '2' : '3'};
    margin-top: 0;
    margin-bottom: 0;
    padding: 0.85rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    order: ${(props) =>
      props.type === 'standard' ? '1' : props.type === 'basic' ? '2' : '3'};
    margin-top: 0;
    margin-bottom: 0;
    padding: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    order: ${(props) =>
      props.type === 'standard' ? '1' : props.type === 'basic' ? '2' : '3'};
    margin-top: 0;
    margin-bottom: 0;
    padding: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #4d4d4d;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const PopularityBadge = styled.div`
  background-color: #2a566f;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  display: flex;
  align-self: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;

const TitlePriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PriceInner = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #1b3c53;
`;

const Description = styled.div``;

const Main = styled.div`
  border-bottom: 1px solid #4d4d4d;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h5`
  text-transform: uppercase;
`;

const MainList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.type !== 'basic' ? '#2e6b94' : '#9ca3af ')};
  font-size: 1.25rem;
`;

const ListItemInclude = styled.li`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 1.5rem;
`;

const Disclaimer = styled.div`
  border-top: 1px solid #4d4d4d;
  border-bottom: 1px solid #4d4d4d;
  padding: 1rem 0;
  font-style: italic;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #4d4d4d;
`;

const DisclaimerText = styled.div`
  color: #4d4d4d;
  font-size: 0.9rem;
`;

const FooterTitle = styled.h5`
  text-transform: uppercase;
`;

function Package({
  title,
  featuresList,
  maintenanceList,
  price,
  desc,
  type,
  disclaimer,
}) {
  return (
    <StyledPackage type={type}>
      {/* Header */}
      <Header>
        {title.toLowerCase() == 'standard' && (
          <PopularityBadge>Cel mai popular</PopularityBadge>
        )}
        <TitlePriceContainer>
          <Title>{title}</Title>
          <PriceContainer>
            <PriceInner>{price}</PriceInner> lei
          </PriceContainer>
        </TitlePriceContainer>
        <Description>{desc}</Description>
      </Header>
      {/* Main */}
      <Main>
        <MainTitle>Caracteristici</MainTitle>
        <MainList>
          {featuresList.map((f, index) => {
            if (index === 0 && type !== 'basic')
              return <ListItemInclude type={type}>{f}</ListItemInclude>;
            return (
              <ListItem type={type}>
                <StyledFontAwesomeIcon icon={faCheck} type={type} />
                {f}
              </ListItem>
            );
          })}
        </MainList>
      </Main>
      {/* Footer */}
      <Footer>
        <FooterTitle>Mentenanță</FooterTitle>
        <FooterList>
          {maintenanceList.map((item, index) => {
            if (index === 0 && type !== 'basic')
              return <ListItemInclude type={type}>{item}</ListItemInclude>;
            return (
              <ListItem type={type}>
                <StyledFontAwesomeIcon icon={faCheck} type={type} />
                {item}
              </ListItem>
            );
          })}
        </FooterList>
        <Disclaimer>
          <div>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <DisclaimerText>{disclaimer}</DisclaimerText>
        </Disclaimer>
        <CTAButton type={type} />
      </Footer>
    </StyledPackage>
  );
}

export default Package;
