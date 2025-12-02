import Card from './Card';

function WebDev() {
  return (
    <div>
      <h1>Web Development: Websites and Web Applications</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card
              title="Websites"
              subtitle="Presentational websites and more"
              text="Starting with presentational websites and adding in new features based on your business needs: live chats, images, maps, admin panels, longin functionnality and more."
              link1="See past work"
              link2="Full Services List"
            />
          </div>
          <div className="col-md-6">
            <Card
              title="Web Applications"
              subtitle="Internal apps for different management tasks"
              text="Internal web applications for small companies that allow completing various management tasks (specific to their business needs), live chat apps, ticketing systems and more."
              link1="See past work"
              link2="Full Services List"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDev;
