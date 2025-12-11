import styled from 'styled-components';

const StyledP = styled.p`
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const WebApplications = styled.div``;

const Section = styled.section``;

function WebApps() {
  return (
    <div className="container">
      <WebApplications>
        {/* Features & Capabilities */}
        <Section>
          <h2>Web Applications</h2>
          <StyledP className="fs-5">
            Modern businesses rely on digital tools to operate efficiently and
            while most ready-made software can work for general needs, it rarely
            fits the unique workflow, structure and priorities of your
            organization.
          </StyledP>
          <StyledP className="fs-5">
            We design and build custom web applications tailored to the way your
            business actually works - from internal management systems to
            customer-facing platforms. Our approach combines strategic planning,
            UX design and reliable development practices to deliver solutions
            that support operational growth rather than force workarounds.
          </StyledP>
          <StyledP className="fs-5">
            Whether you need a task management platform for your team, an
            internal dashboard for tracking daily operations, a custom ticketing
            tool for client interactions or an integrated live chat system that
            connects departments, our applications are built to simplify
            complexity, reduce repetitive work and unlock new scalability
            opportunities.
          </StyledP>
        </Section>
        {/* Built Around Your Workflow */}
        <Section>
          <h2>Features & Capabilities</h2>
          <StyledP className="fs-5">
            At Webvertize, every application we build combines technical
            performance with usability and long-term reliability. Depending on
            the needs of your business, our solution for you may include:
          </StyledP>
          <StyledUl className="fs-5">
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Custom Dashboards & Interfaces</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Interfaces designed around your workflow, not the other way
                    around, enabling faster onboarding and improved
                    productivity.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Role-based Access & Permissions</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Dedicated interfaces for managers, operators, temmates and
                    customers in order to keep the right information in the
                    right hands.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>

                      <div>
                        <strong>Database Integration</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Structured, secure and scalable databases that store your
                    data, make it searchable and support reporting.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Form Workflows & Data Input</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Dynamic forms, validation, user submissions, attachments and
                    internal approval flows that automate manual work.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Ticketing & Support Systems</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Centralize communication, manage requests, track progress
                    and gather insights on recurring issues and needs.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Live Chat & Real-Time Features</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Real-time messaging between employees, support staff and
                    customers - integrated into your existing processes.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Authentication & User Management</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Password-protected access, login systems, account creation
                    or SSO based on your business needs.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Analytics & Reporting</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Make informed decisions through operational metrics, usage
                    logs and performance reports tailored to your KPIs.
                  </div>
                </div>
              </div>
            </li>
          </StyledUl>
        </Section>
        {/* Designed to Drive Results */}
        <Section>
          <h2>Designed to Drive Results</h2>
          <StyledP className="fs-5">
            A custom web application is not just a tool — it’s a lever for
            operational change. Our applications are designed to:
          </StyledP>
          <StyledUl className="fs-5">
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Save Time</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Automate repetitive manual tasks and centralize information
                    into one unified platform.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Improve Accuracy</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Minimize mistakes with data validation, structured forms and
                    clear workflows.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Increase Visibility</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Real-time dashboards help you understand what’s happening
                    across teams or departments.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Support Growth</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Custom tools adapt as your processes get more complex —
                    without forcing you into new software.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Strengthen Teams</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Better tools improve communication, reduce friction, and
                    align everybody around shared goals.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex gap-2">
                      {/* Icon */}
                      <div></div>
                      <div>
                        <strong>Enhance Customer Experience</strong>
                      </div>
                    </div>
                  </div>
                  <div className="card-text">
                    Ticketing, live chat, portals, and automated flows create a
                    smoother experience for your clients.
                  </div>
                </div>
              </div>
            </li>
          </StyledUl>
        </Section>
        {/* Summary Value */}
        <Section>
          <h2>Summary Value</h2>
          <p className="fs-5">
            Instead of trying to adapt flat, generic software to your
            organization, a custom web application allows you to digitize
            processes in a way that makes sense for your specific workflow.
          </p>
          <p className="fs-5">
            From strategy and architecture to UX, development, and post-launch
            support, we build applications meant to support your operations for
            years — not months.
          </p>
        </Section>
      </WebApplications>
    </div>
  );
}

export default WebApps;
