import styled from 'styled-components';

const StyledSection3 = styled.section`
  padding-bottom: 4rem;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h4``;
const Subtitle = styled.div`
  margin-top: -12px;
`;

function Section3() {
  return (
    <StyledSection3 className="container">
      <ContentRow className="row">
        <Title>Facebook & Instagram Ads</Title>
        <Subtitle>Reach, Engage and Convert with Meta Advertising</Subtitle>
        <p>
          Meta platforms offer highly targeted advertising options based on
          intrests, behaviors and demographics.{' '}
        </p>
        <h5>Campaign Objectives We Support</h5>
        <StyledUl>
          <li>
            <div class="card">
              <div class="card-body">
                <div>
                  <strong>Awareness</strong> - Maximize reach and recall
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <div>
                  <strong>Traffic</strong> - Drive visitors to sites or landing
                  pages
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <div>
                  <strong>Engagement</strong> - Boost likes, comments and video
                  views
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h5>
                  Leads - Collect client details using instant forms or
                  messaging
                </h5>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h5>App Promotion - Increase installs and in-app activity</h5>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <div class="card-body">
                <h5>Sales - Encourage direct purchases or conversions</h5>
              </div>
            </div>
          </li>
        </StyledUl>
      </ContentRow>
      {/* Campaign Types We Manage */}
      <ContentRow className="row">
        <h4>Available Ad Formats</h4>
        <div className="card">
          <StyledUl className="list-group list-group-flush">
            <li className="list-group-item">Image Ads</li>
            <li className="list-group-item">Video Ads/Reels</li>
            <li className="list-group-item">Carousel Ads</li>
            <li className="list-group-item">Collection Ads</li>
            <li className="list-group-item">Instant Experience Ads</li>
            <li className="list-group-item">Slideshow Ads</li>
            <li className="list-group-item">Stories Ads</li>
            <li className="list-group-item">Poll Ads</li>
            <li className="list-group-item">Augmented Reality Ads</li>
          </StyledUl>
        </div>
      </ContentRow>
    </StyledSection3>
  );
}

export default Section3;
