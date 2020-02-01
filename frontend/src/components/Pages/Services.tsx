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
import { getIndustries } from "../../helpers/industry-helper";
import clsx from "clsx";

export default function Services() {
  const classesBase = useStylesBase();
  const industries: Industry[] = getIndustries();
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const servicesImage = smAndDown ? servicesPt : servicesimage;

  return (
    <div>
      <Grid container direction="column" justify="center">
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
              Client Services
            </h4>
            <p>
              Stem Skills &amp; Recruitment is a specialist permanent
              recruitment consultancy providing sustainable recruitment
              solutions for the science, technology, engineering and
              manufacturing industries in Wales. Our approach to recruitment is
              simple but that of care, integrity, attention to detail, and
              solutions that make a genuine difference, short-term and
              long-term.
            </p>
          </Grid>
          <Grid item md={8} sm={10} xs={12}>
            <h4
              className={classesBase.contentTitle}
            >
              Industries
            </h4>
            <p>
              As STEM skills recruitment specialists, we recruit for a wide
              range of permanent roles from STEM graduate recruitment to senior
              &amp; executive recruitment, in various industries including
              manufacturing, automotive, aerospace, food, FMCG, oil &amp; gas,
              chemical, materials, electronics and compound semiconductors. We
              provide expertise in recruiting for the following STEM jobs:
            </p>
            <div className={clsx(classesBase.mt3, classesBase.mb3)}>
            {industries.map(industry => (
              <ExpansionPanel
                key={industry.path}
                elevation={0}
                className={classesBase.mb3}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <LinkButton to={industry.path}>{industry.title}</LinkButton>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid
                    container
                    direction="column"
                  >
                    <Grid item>
                      <ul>
                        {industry.categories.map(category => (
                          <li key={category.title}> {category.title}</li>
                        ))}
                      </ul>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
            </div>
            <Recruitment />
            <p>
              If you would like to find out more about how Stem Skills &amp;
              Recruitment can help grow your business, or if you have a vacancy
              and need help, then call us on 029 2120 2879, or email{" "}
              <a href="mailto:info@stemrecruit.co.uk">
                info@stemrecruit.co.uk.
              </a>
            </p>
            <Grid container item justify="center">
              <LinkButton to="/">Home</LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
