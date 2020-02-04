import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Header from "../Layout/Header";
import LinkButton from "../Layout/LinkButton";
import avatar from "../../assets/jack.jpg";
import rec from "../../assets/rec.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      height: 200,
      width: 200,
      margin: "auto",
      marginBottom: theme.spacing(4)
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: -theme.spacing(1)
    },
    divider: {
      margin: theme.spacing(4)
    },
    fillHeight: {
      height: "100%"
    }
  })
);

export default function Home() {
  const classes = useStyles({});
  const classesBase = useStylesBase({});

  return (
    <div>
      <Grid container direction="column" justify="center" wrap="nowrap">
        <Header title="Growing your business," subtitle="growing your career" home/>
        <Grid
          container
          justify="center"
          className={classesBase.contentContainer}
        >
          <Grid item md={8} sm={10} xs={12}>
            <h4 className={classesBase.contentTitle}>Who We Are</h4>
            <p>
              Stem Skills &amp; Recruitment is a specialist recruitment
              consultancy, which also aims to support the growth of industries
              it recruits for.
            </p>
            <p>
              Based in Wales, we provide expertise in recruitment for Science,
              Technology, Engineering and Manufacturing businesses across the
              region.
            </p>
            <p>
              Our approach to recruitment is simple and transparent, and whilst
              providing short-term solutions to find you the right candidate or
              job, we also invest into long-term solutions for your recruitment
              and career needs.
            </p>
            <p>
              Whether you are a business looking to recruit, or a candidate
              looking to take the next step in your career, then we are here to
              listen to your requirements and expectations, offer market advice
              and knowledge, and work with you to find you the right match.
            </p>
          </Grid>
          <Grid
            item
            md={8}
            sm={10}
            xs={12}
          >
            <h4
              className={classesBase.contentTitle}
            >
              What We Do
            </h4>
            <div className={classesBase.mt3}>
            <ExpansionPanel
              elevation={0}
              defaultExpanded={true}
              className={classesBase.mb3}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p className={classesBase.expansionSummary}>Clients</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <p>
                      Stem Skills &amp; Recruitment supports science, technology, engineering and
                      manufacturing businesses in Wales by providing permanent
                      recruitment services. We provide experience and expertise
                      in recruiting for a wide range of roles and are dedicated
                      to finding the right candidates to help your business
                      grow. Take a look at our client services page to find out
                      more information, or if you have a vacancy and need help,
                      then email{" "}
                      <a href="mailto:info@stemrecruit.co.uk">
                        info@stemrecruit.co.uk.
                      </a>
                    </p>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.button} to="/services">
                      Services
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} className={classesBase.mb3}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p className={classesBase.expansionSummary}>Candidates</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <p>
                      If you’re looking to take the next step in your career,
                      then we can help. All of our services to candidates may be
                      free, but we take the same time and care in finding YOU
                      the right fit as we do for our clients. To see our current
                      job opportunities with our clients, take a look at our
                      find a job page, or alternatively you can register with us
                      by sending your CV to{" "}
                      <a href="mailto:jobs@stemrecruit.co.uk">
                        jobs@stemrecruit.co.uk.
                      </a>{" "}
                      and we will be in contact as soon as we have any suitable
                      job opportunities.
                    </p>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.button} to="/jobs">
                      Jobs
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
          </Grid>
          <Grid item sm={10} xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid
            item
            md={4}
            sm={10}
            xs={12}
            className={clsx(
              classesBase.mt3,
              classesBase.mb3,
              classesBase.textCenter
            )}
          >
            <Avatar src={avatar} alt="" className={classes.avatar} />
            <h6>JACK TAYLOR</h6>
            <h6>Founder &amp; Recruitment Consultant</h6>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={clsx(classes.fillHeight, classesBase.ml2, classesBase.mr2)}
            >
              <p>
                I am a personable and technical recruiter with a simple and
                transparent approach that has both client and candidate
                satisfaction at its core. I offer extensive market knowledge of
                the science, technology, engineering and manufacturing
                industries in Wales, along with a large network of candidates
                and clients. I have recruited for a variety of companies; from
                start-ups and SMEs, right through to blue-chip organisations and
                global brands.
              </p>
            </Grid>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.fillHeight}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Location"
                    secondary="Welsh ICE, Caerphilly, CF83 3GG"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary="jack.taylor@stemrecruit.co.uk"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Telephone" secondary="029 2120 2879" />
                </ListItem>
                <ListItem>
                  <img src={rec} className={classesBase.recLogo} alt="" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid container item justify="center">
            <LinkButton className={classes.button} to="/privacy">
              Privacy Notice
            </LinkButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
