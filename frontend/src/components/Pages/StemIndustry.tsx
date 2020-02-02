import React from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkButton from "../Layout/LinkButton";
import Recruitment from "../Layout/Recruitment";
import servicesimage from "../../assets/services.jpg";
import servicesPt from "../../assets/servicesPt.jpg";
import useStylesBase from "../../styles/styles-base";
import { Industry } from "../../models/industry";

interface StemIndustryProps {
  industry: Industry;
}

export default function StemIndustry(props: StemIndustryProps) {
  const classesBase = useStylesBase();
  const { industry } = props;

  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const servicesImage = smAndDown ? servicesPt : servicesimage;

  return (
    <div>
      <Grid container direction="column" justify="center" wrap="nowrap">
        <Grid item xs={12}>
          <img src={servicesImage} className={classesBase.headerImage} alt="" />
        </Grid>
        <Grid
          container
          justify="center"
          className={classesBase.contentContainer}
        >
          <Grid item md={8} sm={10} xs={12}>
            <h4 className={classesBase.contentTitle}>
              {industry.title}
            </h4>
            <p>{industry.info}</p>
            {industry.categories.map(category => (
              <ExpansionPanel key={category.title} elevation={0} className={classesBase.mb3}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <p className={classesBase.expansionSummary}>
                    {category.title}
                  </p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container direction="column">
                    <Grid item>
                      <ul>
                        {category.subcategories &&
                          category.subcategories.map(subcategory => (
                            <li key={subcategory.title}> {subcategory.title}</li>
                          ))}
                      </ul>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
            <Recruitment />
            <p>
              If you are looking to hire and need help from a {industry.title}{" "}
              agency, then call us on 029 2120 2879, or email{" "}
              <a href="mailto:info@stemrecruit.co.uk">
                info@stemrecruit.co.uk.
              </a>
            </p>
            <Grid container item justify="center">
              <LinkButton to="/services">Services</LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
