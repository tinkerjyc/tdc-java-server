import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Did you know TDC does a lot more than just surveys?
          </h2>
          <h4 className={classes.description}>
            Seamlessly harness business channels via B2C mindshare. Efficiently
            extend ubiquitous ROI with installed base innovation. Rapidiously
            maintain 2.0 intellectual capital with fully tested functionalities.
            Seamlessly network client-centric testing procedures for
            backward-compatible total linkage. Synergistically mesh orthogonal
            applications through resource-leveling products. Enthusiastically
            reinvent clicks-and-mortar e-markets after innovative scenarios.
            Conveniently administrate best-of-breed channels whereas real-time
            products. Progressively transform value-added best practices
            vis-a-vis timely value. Continually enhance robust e-business for
            flexible niche markets. Compellingly maximize client-centric
            e-business whereas pandemic manufactured products.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Video One"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Video Two"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Video Three"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Four"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
