import ContentCreationCard from './ContentCreationCard';
import Card from './Card';

function Ads() {
  return (
    <div>
      <h1>Advertisment: Content Creation and Ad Campaigns Management</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Content Creation */}
            <ContentCreationCard />
          </div>
          <div className="col-md-4">
            {/* Google Ads Campaigns */}
            <Card
              title="Google Ads Campaigns"
              subtitle="Creating and managing Google Ads Campaigns that best suit your business needs."
              text="Working together in order to create a Google Ads campaign from scratch, choose the most appropriate goals for your business, then managing it and providing monthly reports about its performance."
              link2="Read more about the campaign types"
            />
          </div>
          <div className="col-md-4">
            {/* Facebook Ads Campaigns */}
            <Card
              title="Facebook Ads Campaigns"
              subtitle="Facebook Ads Campaigns with different objectives"
              text="Creating and managing Facebook Ads campaigns with different objectives as per your business needs."
              link2="Read more about the campaign types"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
