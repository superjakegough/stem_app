import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import servicesimage from "../assets/services.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Services: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={servicesimage} className="header-image" alt=""/>
          <div className="header-text">Services</div>
        </Grid>
        <Grid container justify="center" className="content-container">
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <h2 className="content-title mb-24">Client Services</h2>
            <Typography>Stem is a specialist permanent recruitment consultancy providing sustainable recruitment solutions for the science, technology, engineering and manufacturing industries in Wales. Our approach to recruitment is simple but that of care, integrity, attention to detail, and solutions that make a genuine difference, short-term and long-term.</Typography>
            <h2 className="content-title mb-24">Our Recruitment Process</h2>
            <Typography>We provide a thorough 5-stage recruitment and vetting process which ensures that we not only find the right fit for our clients, but also the right fit for the candidate, ensuring all parties are satisfied.</Typography>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <h2 className="content-title mt-24 mb-24">Industries</h2>
            <Typography>We have expertise and experience in recruiting for the following industries:</Typography>
            <ul className="mb-24">
              <li><Typography>Automotive</Typography></li>
              <li><Typography>Aerospace</Typography></li>
              <li><Typography>Pharmaceutical</Typography></li>
              <li><Typography>Life Science</Typography></li>
              <li><Typography>Medical Device</Typography></li>
              <li><Typography>Electronic</Typography></li>
              <li><Typography>Semiconductor</Typography></li>
              <li><Typography>FMCG</Typography></li>
              <li><Typography>Food Manufacturing</Typography></li>
              <li><Typography>Oil &amp; Gas</Typography></li>
              <li><Typography>Chemicals Manufacturing</Typography></li>
              <li><Typography>Materials Manufacturing</Typography></li>
              <li><Typography>Heavy Industry</Typography></li>
              <li><Typography>Digital</Typography></li>
              <li><Typography>Technology</Typography></li>
            </ul>
            <Typography>If you would like to find out more about how Stem can help grow your business, or if you have a vacancy and need help, then call us on 029 2120 2879, or email {" "}
            <a href="mailto:info@stemrecruit.co.uk">info@stemrecruit.co.uk.</a></Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
