import webAppsImg from "../../assets/web_app_image.jpg";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const SectionTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const WebsAppsImage = styled.img`
  max-width: 600px;
  border-radius: 20px;

  @media (max-width: 576px) {
    width: 300px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 325px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 400px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 450px;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    width: 500px;
  }
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

function WebAppsIntro() {
  return (
    <StyledSection className="container">
      <div className="row">
        <h2 className="mb-3">De ce contează aplicațiile web personalizate</h2>
        <div className="col-sm-12 col-xl-6 d-flex align-items-center justify-content-center">
          <WebsAppsImage src={webAppsImg} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-xl-6">
          <SectionTextContent>
            <StyledP className="fs-5">
              Proiectăm și dezvoltăm aplicații web personalizate, adaptate
              modului real în care funcționează afacerea ta — de la sisteme
              interne de management până la platforme orientate către clienți.
            </StyledP>
            <StyledP className="fs-5">
              Fie că ai nevoie de o platformă de gestionare a sarcinilor pentru
              echipa ta, un dashboard intern pentru monitorizarea operațiunilor
              zilnice, un sistem de ticketing personalizat pentru interacțiunea
              cu clienții sau un sistem de chat live integrat care conectează
              departamentele, aplicațiile noastre sunt construite pentru a
              simplifica complexitatea, a reduce munca repetitivă și a deschide
              noi oportunități de scalare.
            </StyledP>
          </SectionTextContent>
        </div>
      </div>
    </StyledSection>
  );
}

export default WebAppsIntro;
