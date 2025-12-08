import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import {
  faBugSlash,
  faCode,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import bgImage from '../assets/our-process-bg.jpg';

const TabWrapper = styled.div`
  background-image: url(${bgImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 9;
  margin-bottom: 4rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.25;
  gap: 1rem;
  position: relative;
  z-index: 9;

  @media (max-width: 576px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TabButton = styled.button`
  border: none;
  border-radius: 50%;
  padding: 1.5rem 0.5rem;
  box-shadow: 0px 8px 0px #9e9e9e;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(to bottom, #456882 0%, #456882 60%, #456882 100%)'
      : 'linear-gradient(to bottom, #eaeaea 0%, #d4d4d4 60%, #c4c4c4 100%)'};
  color: ${({ active }) => (active ? '#fff' : '#444')};
`;

const TabPanel = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 10rem;
  position: relative;
  z-index: 9;
  color: #fff;

  @media (max-width: 1200px) {
    padding: 0;
    gap: 1rem;
  }
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 16px !important;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 20px !important;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 9;
  color: #fff;
`;

const TabListTabPanel = styled.div`
  @media (max-width: 576px) {
    gap: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    gap: 2rem;
  }
`;

const tabs = [
  {
    label: 'Discovery',
    content:
      'We begin by getting to know your business — your goals, audience, competitors, and what makes your brand unique. Together, we define what success means for this project and translate it into clear requirements. The outcome of this phase is a focused digital strategy that guides every design and development decision.',
    icon: faMagnifyingGlass,
    color: '#3e5c76',
  },
  {
    label: 'UX/UI Design',
    content:
      'Based on the strategy, we design the structure and visual identity of your website or application. This includes wireframes, layout, user flows and other design elements that reflect your brand and align with your business goals.',
    icon: faSitemap,
    color: '#527a9a',
  },
  {
    label: 'Development',
    content:
      'We bring the design to life by building a fast, responsive, and modern solution optimized for all devices. Whether it’s a presentational website or a full web application, we code using reliable technologies and integrate all required features as defined in the project scope.',
    icon: faCode,
    color: '#699ec2',
  },
  {
    label: 'Testing & Optimization',
    content:
      'Before launch, we carefully test everything - functionality, performance, accessibility and browser compatibility. We address issues, refine interactions, and optimize the experience so your product is ready for real users.',
    icon: faBugSlash,
    color: '#4a7c9e',
  },
  {
    label: 'Launch & Support',
    content:
      'Once everything meets expectations, we deploy the final product and provide post-launch support according to the agreed terms. We can assist with updates, optimizations, analytics, and improvements — ensuring your digital presence keeps growing.',
    icon: faRocket,
    color: '#2c5a7a',
  },
];

function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabWrapper>
      <TabContainer className="container">
        <TitleContainer>
          <h2>Our Process - How we build your digital presence</h2>
        </TitleContainer>
        <TabListTabPanel className="d-flex">
          <TabList>
            {tabs.map((tab, i) => (
              <TabButton
                key={i}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabList>
          <TabPanel>
            <StyledFontAwesomeIcon
              icon={tabs[activeIndex].icon}
              color={tabs[activeIndex].color}
            />
            <StyledP className="fs-4">{tabs[activeIndex].content}</StyledP>
          </TabPanel>
        </TabListTabPanel>
      </TabContainer>
    </TabWrapper>
  );
}

export default OurProcess;
