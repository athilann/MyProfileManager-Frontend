import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

import netLogo from "assets/img/net-logo.png";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

function NetLogoComp({ ...props }) {
  return <img width="61" height="61" src={netLogo} />;
}
class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk about me</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ipsum nunc, viverra et lobortis ac, accumsan sit amet nunc. In ut
              augue ex. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Vivamus sit amet viverra
              nibh. Ut eleifend risus sit amet ex pulvinar, sit amet hendrerit
              justo vulputate. Curabitur finibus rhoncus elit, ac iaculis nulla
              pretium at. Donec libero nibh, pretium sed tempor pharetra,
              consequat nec lacus. Proin eu posuere urna, sed feugiat enim. In
              dignissim in sapien sit amet laoreet. Nullam sit amet mauris
              tellus. Pellentesque viverra sodales nisl, id congue mi convallis
              et. Phasellus sit amet ipsum non sem auctor suscipit. Fusce sed
              molestie ipsum, sit amet rhoncus est. Vestibulum rhoncus dolor id
              felis pharetra rhoncus. Donec ut iaculis augue.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Accomplishments</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Microsoft .Net"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={NetLogoComp}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Microsoft Azure"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Azure DevOps"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
