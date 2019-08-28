import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import homeimage from "../assets/home.jpg";
import stemlogo from "../assets/stem_green.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  bodyText: {
    marginBottom: theme.spacing(1)
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: -theme.spacing(1)
  },
  expansionSummary: {
    fontWeight: 500
  }
}));

const Home: React.FunctionComponent = props => {
  const classes = useStyles({});
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const stemImg = <img className="home-logo" src={stemlogo}/>;

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs className="header-grid">
          <img src={homeimage} className="header-image" alt=""/>
          <h1 className="header-text">Growing your business<br/>Growing your career</h1>
        </Grid>
        <Grid container justify="center" className="content-container">
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <h2 className="content-title">Who We Are</h2>
          </Grid>
          {smAndDown && (
            <Grid item sm={10} xs={12} className="mb-24 text-center">
              {stemImg}
            </Grid>
          )}
          <Grid item md={6} sm={10} xs={12}>
            <Typography className={classes.bodyText}>
              Stem Skills &amp; Recruitment is a specialist recruitment consultancy, which also aims to support the growth of industries it recruits for.
            </Typography>
            <Typography className={classes.bodyText}>
              Based in Wales, we provide expertise in recruitment for Science, Technology, Engineering and Manufacturing businesses across the region.
            </Typography>
            <Typography className={classes.bodyText}>
              Our approach to recruitment is simple and transparent, and whilst providing short-term solutions to find you the right candidate or job, we also invest into long-term solutions for your recruitment and career needs.
            </Typography>
            <Typography className={classes.bodyText}>
              Whether you are a business looking to recruit, or a candidate looking to take the next step in your career, then we are here to listen to your requirements and expectations, offer market advice and knowledge, and work with you to find you the right match.
            </Typography>
          </Grid>
          {!smAndDown && (
            <Grid item md={2} className="ml-16">
              {stemImg}
            </Grid>
          )}
          <Grid item md={8} sm={10} xs={12} className="mt-24 mb-24">
            <h2 className="content-title mt-24 mb-24">What We Do</h2>
            <ExpansionPanel elevation={0} defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.expansionSummary}>
                  Clients
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <Typography>
                      Stem supports science, technology, engineering and manufacturing businesses in Wales by providing permanent recruitment services. We provide experience and expertise in recruiting for a wide range of roles and are dedicated to finding the right candidates to help your business grow. Take a look at our client services page to find out more information, or if you have a vacancy and need help, then email {" "}
                      <a href="mailto:info@stemrecruit.co.uk">info@stemrecruit.co.uk.</a>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.button} color="primary" component={Link} to="/services">Services</Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.expansionSummary}>
                  Candidates
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <Typography>
                      If you’re looking to take the next step in your career, then we can help. All of our services to candidates may be free, but we take the same time and care in finding YOU the right fit as we do for our clients. To see our current job opportunities with our clients, take a look at our find a job page, or alternatively you can register with us by sending your CV to {" "}
                      <a href="mailto:jobs@stemrecruit.co.uk">jobs@stemrecruit.co.uk.</a> {" "} and we will be in contact as soon as we have any suitable job opportunities.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button className={classes.button} color="primary" component={Link} to="/jobs">Jobs</Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Home);
