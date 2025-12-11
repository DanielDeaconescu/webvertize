import { useEffect } from 'react';
import styled from 'styled-components';
import discoveryImg from '../../assets/discovery.jpg';
import uiUxImg from '../../assets/ui_ux_design.jpg';
import developmentImg from '../../assets/development.jpg';
import testingImg from '../../assets/testing_optimization.jpg';
import launchImg from '../../assets/launch_support.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faBoxOpen,
  faToolbox,
  faUser,
  faClock,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 1.5rem;
  padding: 4rem 0;
`;

const CardsList = styled.ul`
  list-style: none;
  width: 75%;
  margin: 0;
  margin-bottom: 200px;
  padding: 0;
`;

const Card = styled.li`
  position: sticky;
  top: 6rem;
  transform-origin: center top;
  width: 100%;
  height: 430px;
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 0 0 4rem 0;
  overflow: hidden;
  color: white;

  /* Background image */
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Dark overlay */

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }

  /* Text on top */
  * {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  /* align-items: center; */
  gap: 0.5rem;
`;

export default function ServicesStackedCards() {
  const icons = [faRocket, faBoxOpen, faToolbox, faUser, faClock, faStar];
  const steps = [
    {
      title: 'Discovery',
      objective: {
        title: 'Objective',
        content:
          'Understand your business, goals, audience and competition to create a solid foundation for your project.',
      },
      list: [
        {
          itemTitle: 'Start',
          itemText:
            'We start by learning everything about your business - your objectives, target customers, unique value propositions and competitors.',
        },
        {
          itemTitle: 'Deliverables',
          itemText:
            'Clear project brief, success criteria, digital strategy document.',
        },
        {
          itemTitle: 'Tools & Methods',
          itemText:
            'Questions, strategy workshops, competitor research and analytics review.',
        },
        {
          itemTitle: 'Client Role',
          itemText:
            'Provide business insights, answer questions, share branding materials or information about past campaigns.',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemText: 'Typically 1-2 weeks, depending on project complexity.',
        },
        {
          itemTitle: 'Value',
          itemText:
            'Ensures that all the decisions in design and development are aligned with your business goals, saving time and preventing misalignment later.',
        },
      ],
      image: discoveryImg,
    },
    {
      title: 'UX/UI Design',
      objective: {
        title: 'Objective',
        content:
          'Define the structure and visual identity of your website or app to ensure usability and brand alignment.',
      },
      list: [
        {
          itemTitle: 'Start',
          itemText:
            "Based on the Discovery phase, we create wireframes, user flows and visual mockups that reflect your brand and your audience's needs.",
        },
        {
          itemTitle: 'Deliverables',
          itemText:
            'Wireframes, interactive prototypes, style guide, design assets.',
        },
        {
          itemTitle: 'Tools & Methods',
          itemText: 'Figma, Adobe XD and design workshops.',
        },
        {
          itemTitle: 'Client Role',
          itemText:
            'Review and approve wireframes and mockups and provide feedback on visual preferences.',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemText:
            '2-3 weeks for a standard website; more for complex web applications.',
        },
        {
          itemTitle: 'Value',
          itemText:
            'Helps you visualize your product early, reduces risk of costly changes during development and ensures usability and accessibility.',
        },
      ],
      image: uiUxImg,
    },
    {
      title: 'Development',
      objective: {
        title: 'Objective',
        content:
          'Turn designs into a fully functional, responsive, and high-performance digital product.',
      },
      list: [
        {
          itemTitle: 'Start',
          itemText:
            'We translate designs into clean, optimized code, integrating required functionality, animations and third-party tools.',
        },
        {
          itemTitle: 'Deliverables',
          itemText:
            'Fully functional website or web app, including CMS setup if applicable, initial content upload.',
        },
        {
          itemTitle: 'Tools & Methods',
          itemText:
            'HTML, CSS, JavaScript (React, Vue, etc.), Bootstrap, APIs, version control (Git).',
        },
        {
          itemTitle: 'Client Role',
          itemText:
            'Provide final content and approve major development milestones.',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemText:
            'Usually 3–6 weeks depending on complexity. We provide regular progress updates along the way.',
        },
        {
          itemTitle: 'Value',
          itemText:
            'You get a modern, scalable and performant solution built with best practices.',
        },
      ],
      image: developmentImg,
    },
    {
      title: 'Testing & Optimization',
      objective: {
        title: 'Objective',
        content:
          'Ensure quality, performance and compatibility across devices and browsers.',
      },
      list: [
        {
          itemTitle: 'Start',
          itemText:
            'We conduct extensive testing, including functional testing, responsiveness, accessibility, speed optimization and SEO checks.',
        },
        {
          itemTitle: 'Deliverables',
          itemText: 'Test reports, bug fixes, optimization recommendations.',
        },
        {
          itemTitle: 'Tools & Methods',
          itemText:
            'Browser testing (Chrome, Safari, Firefox), Lighthouse audits, automated and manual QA tests.',
        },
        {
          itemTitle: 'Client Role',
          itemText:
            'Participate in User Acceptance Testing (UAT) and provide feedback on final functionality.',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemText: '1–2 weeks; may vary for complex applications.',
        },
        {
          itemTitle: 'Value',
          itemText:
            'Guarantees a smooth, reliable and user-friendly experience for the users of the digital product.',
        },
      ],
      image: testingImg,
    },
    {
      title: 'Launch & Support',
      objective: {
        title: 'Objective',
        content:
          'Deploy your product live and provide ongoing support to ensure continued success.',
      },
      list: [
        {
          itemTitle: 'Start',
          itemText:
            'We deploy the product to your hosting environment, configure analytics and monitor performance in the initial weeks.',
        },
        {
          itemTitle: 'Deliverables',
          itemText:
            'Live website/web app, training for CMS (if applicable), documentation, post-launch support period.',
        },
        {
          itemTitle: 'Tools & Methods',
          itemText:
            'Hosting setup, monitoring tools, analytics integration, optional maintenance agreements.',
        },
        {
          itemTitle: 'Client Role',
          itemText:
            'Approve final launch, communicate any post-launch updates needed.',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemText:
            'Launch typically 1–2 days after testing; support period as agreed.',
        },
        {
          itemTitle: 'Value',
          itemText:
            'You can confidently go live knowing everything works, and you have a partner to help with improvements and updates.',
        },
      ],
      image: launchImg,
    },
  ];

  useEffect(() => {
    const container = document.querySelector('.js-stack-cards');
    if (!container) return;

    const items = container.getElementsByClassName('js-stack-cards__item');
    let marginY = 64;
    const cardHeight = items[0].offsetHeight;
    const windowHeight = window.innerHeight;
    let scrolling = false;

    function animate() {
      const top = container.getBoundingClientRect().top;
      for (let i = 0; i < items.length; i++) {
        const scrollOffset = cardHeight + marginY * i + marginY / 2 - top;
        if (scrollOffset > 0) {
          const scaling =
            (this.cardHeight - scrolling * 0.05) / this.cardHeight;
          items[i].style.transform = `translateY(${
            marginY * i
          }px) scale(${scaling})`;
        } else {
          items[i].style.transform = `translateY(${marginY * i}px)`;
        }
      }
      scrolling = false;
    }

    function scrollHandler() {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animate);
    }

    // initial position
    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = `translateY(${marginY * i}px)`;
    }

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Section className="container">
      <h2>Our Process - How We Bring Your Project to Life</h2>
      <CardsList className="js-stack-cards">
        {steps.map((step, i) => (
          <Card key={i} bg={step.image} className="js-stack-cards__item">
            <Title>{step.title}</Title>
            <Text className="fs-4">
              <strong>{step.objective.title}</strong>: {step.objective.content}
            </Text>
            <StyledUl>
              {step.list?.map((item, i) => (
                <StyledLi>
                  <div>
                    <FontAwesomeIcon icon={icons[i]} />
                  </div>
                  <div>
                    <strong className="fs-5">{item.itemTitle}</strong>:{' '}
                    {item.itemText}
                  </div>
                </StyledLi>
              ))}
            </StyledUl>
          </Card>
        ))}
      </CardsList>
    </Section>
  );
}
