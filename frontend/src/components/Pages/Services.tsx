import React from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import LinkButton from "../Layout/LinkButton";
import Recruitment from "../Layout/Recruitment";
import servicesimage from "../../assets/services.jpg";
import servicesPt from "../../assets/servicesPt.jpg";
import { Industry } from "../../models/industry";
import useStylesBase from "../../styles/styles-base";
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
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>
              Client Services
            </h4>
            <p>
              Stem Skills &amp; Recruitment is a specialist permanent recruitment consultancy providing
              sustainable recruitment solutions for the science, technology,
              engineering and manufacturing industries in Wales. Our approach to
              recruitment is simple but that of care, integrity, attention to
              detail, and solutions that make a genuine difference, short-term
              and long-term.
            </p>
            <Recruitment />
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4
              className={clsx(
                classesBase.contentTitle,
                classesBase.mb3,
                classesBase.mt3
              )}
            >
              Industries
            </h4>
            <p>
              We have expertise and experience in recruiting for the following
              industries:
            </p>
            <ul className={classesBase.mb3}>
              <li> Automotive</li>
              <li> Aerospace</li>
              <li> Pharmaceutical</li>
              <li> Life Science</li>
              <li> Medical Device</li>
              <li> Electronic</li>
              <li> Semiconductor</li>
              <li> FMCG</li>
              <li> Food Manufacturing</li>
              <li> Oil &amp; Gas</li>
              <li> Chemicals Manufacturing</li>
              <li> Materials Manufacturing</li>
              <li> Heavy Industry</li>
              <li> Digital</li>
              <li> Technology</li>
            </ul>
            <p>
              If you would like to find out more about how Stem Skills &amp; Recruitment can help grow
              your business, or if you have a vacancy and need help, then call
              us on 029 2120 2879, or email{" "}
              <a href="mailto:info@stemrecruit.co.uk">
                info@stemrecruit.co.uk.
              </a>
            </p>
            <Grid container justify="center" className={classesBase.mb3}>
              <LinkButton to="/">Home</LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
