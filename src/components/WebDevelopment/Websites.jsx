import {
  faArrowRightToBracket,
  faComments,
  faImages,
  faMapLocationDot,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import websitesImg from '../../assets/custom-websites-image.jpg';
import featuresImg from '../../assets/features_capabilities.jpg';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const StyledSection2 = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const SectionTextContent = styled.div``;

const WebsitesImage = styled.img`
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

const FeaturesImg = styled.img`
  border-radius: 20px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function Websites() {
  return (
    <div className="container">
      {/* Headline + intro paragraph */}
      <StyledSection>
        <div className="row">
          <h2 className="mb-3">
            Custom Websites That Showcase Your Brand and Drive Results
          </h2>
          <div className="col-sm-12 col-xl-6 mb-4">
            <WebsitesImage src={websitesImg} className="img-fluid" />
          </div>
          <div className="col-sm-12 col-xl-6">
            <SectionTextContent>
              <StyledP className="fs-5">
                At Webvertize, we specialize in building fast, modern and
                responsive websites tailored to your brand and business goals.
                Our websites are designed to not only look professional, but
                also to deliver a seamless experience to your visitors on any
                device, whether it's a desktop, tablet or mobile phone.
              </StyledP>
            </SectionTextContent>
          </div>
        </div>
      </StyledSection>
      {/* Features list */}
      <StyledSection2>
        <div className="row">
          <h2 className="mb-3">Features & Capabilities</h2>
          <div className="col-12 mb-4">
            <StyledP className="fs-5">
              We start with presentational websites that highlight your brand
              and services and then enhance them with custom functionalities
              according to your business needs. These functionalities can
              include:
            </StyledP>

            <div>
              <StyledUl className="fs-5">
                <li>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn icon={faComments} />
                          </div>
                          <div>
                            <strong>Live chat</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        Live chat integration to communicate directly with your
                        customers.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn icon={faImages} />
                          </div>
                          <div>
                            <strong>Product Presentations</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        Interactive product presentations and image galleries to
                        showcase offerings.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn icon={faMessage} />
                          </div>

                          <div>
                            <strong>Forms</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        Contact forms and submissions that are securely stored
                        in databases.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn
                              icon={faArrowRightToBracket}
                            />
                          </div>
                          <div>
                            <strong>Login functionality</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        User login functionality and admin dashboards for
                        managing content.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-flex gap-2">
                          <div>
                            <StyledFontAwesomeIocn icon={faMapLocationDot} />
                          </div>
                          <div>
                            <strong>Maps and other interactive elements</strong>
                          </div>
                        </div>
                      </div>
                      <div className="card-text">
                        Maps, embedded media or other interactive elements
                        tailored to your business.
                      </div>
                    </div>
                  </div>
                </li>
              </StyledUl>
            </div>
          </div>
        </div>
      </StyledSection2>
      {/* Value proposition */}
      <StyledSection3>
        <h2 className="mb-3">Designed to Drive Results</h2>
        <p className="fs-5">
          All of our websites are cross-browser compatible, fully optimized for
          speed and designed with accessibility and SEO best practices in mind.
        </p>
        <p className="fs-5">
          We see your website as a powerful tool to connect with customers,
          generate leads and grow your business. Every project is a
          collaboration: we work closely with you to define your objectives,
          refine the design and deliver a website that truly represents your
          brand.
        </p>
        <p className="fs-5">
          Whether you need a simple presentation site or a more complex solution
          with integrated tools, Webvertize delivers websites that are both
          beautiful and functional, giving you a strong foundation for your
          online growth.
        </p>
      </StyledSection3>
    </div>
  );
}

export default Websites;
