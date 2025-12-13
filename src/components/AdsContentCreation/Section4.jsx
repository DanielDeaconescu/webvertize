import styled from 'styled-components';

const Title = styled.h4``;

const Subtitle = styled.div`
  margin-top: -12px;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    padding: 0 1.5rem;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li``;

function Section4() {
  return (
    <div className="container">
      <Title>Why Work With Webvertize</Title>
      <Subtitle>Simple Process, Powerful Results</Subtitle>
      <StyledP>
        At Webvertize, we don't believe advertising should feel complicated,
        stressful or overwhelming. We approach each advertising project as a
        creative journey that we take together - one where ideas flow openly,
        experimentation is ecouraged and the process itself becomes engaging and
        even fun. Great campaigns come from great teamwork and we make sure that
        teamwork feels natural, energizing and genuinely enjoyable.
      </StyledP>
      <StyledUl>
        <Item>
          <div class="card">
            <div class="card-body">
              High-quality creative made for your business
            </div>
          </div>
        </Item>
        <Item>
          <div class="card">
            <div class="card-body">
              Data-driven optimization across platforms
            </div>
          </div>
        </Item>
        <Item>
          <div class="card">
            <div class="card-body">
              Ongoing communication and clear reporting
            </div>
          </div>
        </Item>
        <Item>
          <div class="card">
            <div class="card-body">
              Strategy tailored to your goals and budget
            </div>
          </div>
        </Item>
        <Item>
          <div class="card">
            <div class="card-body">
              A single partner for both creative assets and campaign management
            </div>
          </div>
        </Item>
      </StyledUl>
    </div>
  );
}

export default Section4;
