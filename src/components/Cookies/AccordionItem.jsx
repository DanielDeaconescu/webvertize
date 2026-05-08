import { useState } from "react";
import styled from "styled-components";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  padding-right: 48px;
  cursor: pointer;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;

  border-top: ${(props) => (props.isOpen ? "4px solid #1b3c53" : "unset")};
`;

const NumberTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const NumberTitleInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Number = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ced4da;
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
`;

const Icon = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const ContentBox = styled.p`
  padding-top: 1rem;
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
  transition: all 0.3s ease;
  text-align: justify;
`;

function AccordionItem({ num, title, text, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  const { t } = useTranslation();

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <Item onClick={handleToggle} isOpen={isOpen}>
      <NumberTitle className="d-flex">
        <NumberTitleInner>
          <Number>{num < 9 ? `0${num}` : num}</Number>
          <Title className="fs-4">{title}</Title>
        </NumberTitleInner>

        <Icon>
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </Icon>
      </NumberTitle>

      {isOpen && <ContentBox className="fs-5">{t(children)}</ContentBox>}
    </Item>
  );
}

export default AccordionItem;
