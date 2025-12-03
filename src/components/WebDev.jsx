import Card from './Card';
import styled from 'styled-components';
import bgWebsitesImage from '../assets/websites_image.jpg';
import bgWebAppsImage from '../assets/web_apps_image.jpg';

const StyledWebDev = styled.div`
  height: 650px;
`;

function WebDev() {
  return (
    <StyledWebDev>
      <h1>Web Development: Websites and Web Applications</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card
              title="Websites"
              subtitle="Presentational websites & essential online presence"
              text="Delivering fast, modern and responsive mobile-friendly presentation websites tailored to your brand. Additional features can be integrated based on your business needs - such as live chats, interactive maps, image galleries, contact forms, admin dashboards, login funtionality and more."
              link1="/portfolio"
              link2="/services"
              icon="websites-icon"
              bgWebsitesImage={bgWebsitesImage}
            />
          </div>
          <div className="col-md-6">
            <Card
              title="Web Applications"
              subtitle="Internal tools & custom business solutions"
              text="Custom internal applications designed for small and medium-sized businesses. Streamline your operations with tools built around your specific workflows—such as task management systems, ticketing platforms, live chat applications, inventory tracking, booking systems, and more."
              link1="/portfolio"
              link2="/services"
              icon="web-app-icon"
              bgWebAppsImage={bgWebAppsImage}
            />
          </div>
        </div>
      </div>
    </StyledWebDev>
  );
}

export default WebDev;
