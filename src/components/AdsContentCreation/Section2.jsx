import styled from 'styled-components';
import googleAdsCampaigns from '../../assets/google_ads_campaigns_image.jpg';

const StyledSection2 = styled.section`
  padding-bottom: 4rem;
`;

const GoogleAdsCampaigns = styled.img`
  border-radius: 1.2rem;

  @media (max-width: 576px) {
    max-width: 350px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 500px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 650px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  margin-top: -12px;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

function Section2() {
  return (
    <StyledSection2 className="container">
      <div className="row">
        <TitleContainer>
          <Title>Google Ads Campaigns</Title>
          <Subtitle>Search-Driven Advertising With Measurable Results</Subtitle>
        </TitleContainer>

        <Content>
          <ContentRow className="row mb-4">
            <div className="col-sm-12 col-xl-4 d-flex align-items-center justify-content-center">
              <GoogleAdsCampaigns
                src={googleAdsCampaigns}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-xl-8 d-flex align-items-center justify-content-center">
              <StyledP>
                Google Ads campaigns are most effective when they are built on
                clear goals, precise targeting and ongoing optimization. We work
                with you to design a campaign structure tailored to the
                objectives of your business, continuously refine performance and
                provide transparent reporting so you always understand how your
                investment is working for you.
              </StyledP>
            </div>
          </ContentRow>
        </Content>
        {/* Our Process */}
        <ContentRow className="row">
          <h4>Our Process</h4>
          <StyledUl>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>
                    Account setup using your own Google profile (you retain full
                    ownership)
                  </h5>
                  <p>
                    We begin by helping you set up your Google Ads account
                    (using your own Google profile so you maintain full
                    ownership). Once everything is in place, we give our account
                    the approapriate management access and start shaping a
                    strategy built on clarity, relevance and ongoing
                    optimization.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Strategy development based on goals and budget</h5>
                  <p>
                    Before launching the campaign, we clarify your objectives
                    (whether it's driving leads, phone calls, sales, or website
                    visits) and align these with an appropriate monthly budget.
                    We then develop a campaign structure tailored to your
                    market, services, and target audience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Daily performance monitoring</h5>
                  <p>
                    After launch, we keep a close eye on your campaigns every
                    day. We track performance indicators, check search trends
                    and look for early signals that help us make fast, informed
                    adjustments.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Continuous bid, keyword and targeting optimizations</h5>
                  <p>
                    Your campaigns evolve constantly. We refine bods, update
                    keywords, adjust match types, improve targeting and test new
                    variations to maintain efficiency and relevance. This
                    ensures your ads adapt to real-time behavior and market
                    conditions.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Notifications and assistance with billing thresholds</h5>
                  <p>
                    We monitor billing thresholds to make sure your ads never
                    stop running unexpectedly. When payments are approaching or
                    action is required, we notify you immediately and guide you
                    through what needs to be done.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Implementation of conversion tracking when needed</h5>
                  <p>
                    Some campaigns require additional tracking to measure
                    results accurately. When needed, we set up conversion
                    tracking for form submissions, calls, or other website
                    actions—giving you clear insights into what’s working and
                    what needs improvement.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body">
                  <h5>Monthly performance reports for complete transparency</h5>
                  <p>
                    Each month, you receive a concise and easy-to-understand
                    performance report. We highlight what changed, how your
                    budget was spent, and how the campaign is progressing toward
                    your goals. You always know exactly where your investment is
                    going.
                  </p>
                </div>
              </div>
            </li>
          </StyledUl>
        </ContentRow>
        {/* Campaign Types We Manage */}
        <ContentRow className="row">
          <h4>Google Campaign Types We Manage</h4>
          <div className="card">
            <StyledUl className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Search Campaigns</strong> - Text-based ads shown on
                Google Search.
              </li>
              <li className="list-group-item">
                <strong>Display Campaigns</strong> - Image/banner ads across
                millions of websites.
              </li>
              <li className="list-group-item">
                <strong>Shopping Campaigns</strong> - Product listings with
                images and prices.
              </li>
              <li className="list-group-item">
                <strong>Video Campaigns</strong> - YouTube and Google video
                partner ads.
              </li>
              <li className="list-group-item">
                <strong>App Campaigns</strong> - Mobile app install and
                engagement ads.
              </li>
              <li className="list-group-item">
                <strong>Performance Max</strong> - Multi-channel AI-driven
                campaign across all Google properties.
              </li>
              <li className="list-group-item">
                <strong>Demand Gen</strong> - Visually rich ads on Discover,
                YouTube, and Gmail.
              </li>
              <li className="list-group-item">
                <strong>Local Services Ads</strong> - High-intent ads for
                service-area businesses.
              </li>
              <li className="list-group-item">
                <strong>Hotel/Travel Campaigns</strong> - Specialized ads for
                the travel industry.
              </li>
              <li className="list-group-item">
                <strong>Smart Campaigns</strong> - Simplified, automated
                campaigns for smaller budgets.
              </li>
            </StyledUl>
          </div>
        </ContentRow>
      </div>
    </StyledSection2>
  );
}

export default Section2;
