import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
//import VerifiedUser from "@material-ui/icons/VerifiedUser";
//import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>How do I create a survey?</h2>
          <h5 className={classes.description}>
            Creating surveys are easy and takes a few steps. First is to pick
            and create a kind of survey you require. After you’ve gone through
            adding and reviewing questions you would need to create a campaign
            page where you can assign the survey form you just created to it.
            The final step is to publish your finished campaign page and send it
            out to recipients. For a more details you do take a look at the
            videos below or can view the “Help & Support” link.
          </h5>
        </GridItem>
      </GridContainer>
      {/*<div>*/}
      {/*  <GridContainer>*/}
      {/*    <GridItem xs={12} sm={12} md={4}>*/}
      {/*      <InfoArea*/}
      {/*        title="Free Chat"*/}
      {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
      {/*        icon={Chat}*/}
      {/*        iconColor="info"*/}
      {/*        vertical*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={12} md={4}>*/}
      {/*      <InfoArea*/}
      {/*        title="Verified Users"*/}
      {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
      {/*        icon={VerifiedUser}*/}
      {/*        iconColor="success"*/}
      {/*        vertical*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem xs={12} sm={12} md={4}>*/}
      {/*      <InfoArea*/}
      {/*        title="Fingerprint"*/}
      {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
      {/*        icon={Fingerprint}*/}
      {/*        iconColor="danger"*/}
      {/*        vertical*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*  </GridContainer>*/}
      {/*</div>*/}
    </div>
  );
}
