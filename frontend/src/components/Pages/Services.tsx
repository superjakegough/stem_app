import React, { FunctionComponent, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LinkButton from "../Layout/LinkButton";
import servicesimage from "../../assets/services.jpg";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    },
    stepper: {
      "& .MuiStepIcon-text": {
        fill: "white"
      }
    }
  })
);

const Services: FunctionComponent = props => {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function getSteps() {
    return [
      "Vacancy registration",
      "Candidate sourcing",
      "Candidate interviews",
      "Job application email",
      "Final interview & candidate submission"
    ];
  }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <>
            <p>
              Via a telephone or face-to-face meeting, we listen to your
              recruitment needs and:
            </p>
            <ul className={classesBase.mb3}>
              <li>
                {" "}
                Discuss the job description and understand the job
                responsibilities.
              </li>
              <li>
                {" "}
                Understand the skills and qualifications that you are looking
                for, identifying essential and desirable requirements.
              </li>
              <li>
                {" "}
                Understand the training, progression and other opportunities the
                vacancy might hold.
              </li>
              <li>
                {" "}
                Understand your business culture and establish behavioural
                competencies that will be needed to fit in with the role and
                company culture.
              </li>
              <li>
                {" "}
                We can provide expert advice as to what skills are available, as
                well as advice on industry trends.
              </li>
              <li>
                {" "}
                Once we have established what you are looking for, we tailor our
                recruitment process to meet your requirements, and begin a
                candidate sourcing and selection process.
              </li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <p>
              We search through our large network of candidates to find you the
              right candidate. We use a variety of sourcing tools including:
            </p>
            <ul className={classesBase.mb3}>
              <li>
                {" "}
                Internal database of science, technology, engineering and
                manufacturing professionals in Wales.
              </li>
              <li>
                {" "}
                UK job boards – including advertising and access to millions of
                CVs UK-wide.
              </li>
              <li> Social media – LinkedIn, Twitter and Facebook.</li>
              <li> Stem Website – advertising on Stem’s website job page.</li>
              <li>
                {" "}
                Networking and events – we network at industry events meeting
                with both active and passive candidates.
              </li>
              <li>
                {" "}
                Education links – for graduate roles, we have strong links with
                Wales’ universities.
              </li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <p>
              Candidates selected from sourcing will be screened further via a
              telephone or face-to-face interview by Stem and will be evaluated
              on the following:
            </p>
            <ul className={classesBase.mb3}>
              <li>
                {" "}
                Current salary, benefits package and expectations vs. what your
                opportunity offers.
              </li>
              <li> Location/commute to your business and hours of work.</li>
              <li>
                {" "}
                Relevant skills, qualifications and behavioural competencies.
              </li>
              <li> Career plans and aspirations.</li>
              <li> Availability.</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <p>
              Following the first stage Stem interview, candidates will be sent
              a job application email including:
            </p>
            <ul className={classesBase.mb3}>
              <li> The job description.</li>
              <li> Job advert.</li>
              <li> Your company website.</li>
              <li>
                {" "}
                An application form with questions or technical test can also be
                sent. The job application email tests the candidate’s interest
                and commitment.
              </li>
            </ul>
          </>
        );
      case 4:
        return (
          <p>
            Once the candidate has reviewed the job application email, Stem will
            conduct a final interview with the candidate to further gauge their
            interest and suitability for the role before presenting you their
            details. Once we have sent you their CV, we will continue to provide
            support during the process from when you first interview the
            candidate, through to the job offer and the candidate’s first day,
            providing feedback and advice to you and the candidate throughout.
          </p>
        );
    }
  }

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={servicesimage} className={classesBase.headerImage} alt="" />
          <div className={classesBase.headerText}>Services</div>
        </Grid>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>Client Services</h4>
            <p>
              Stem is a specialist permanent recruitment consultancy providing
              sustainable recruitment solutions for the science, technology,
              engineering and manufacturing industries in Wales. Our approach to
              recruitment is simple but that of care, integrity, attention to
              detail, and solutions that make a genuine difference, short-term
              and long-term.
            </p>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>Our Recruitment Process</h4>
            <p>
              We provide a thorough 5-stage recruitment and vetting process
              which ensures that we not only find the right fit for our clients,
              but also the right fit for the candidate, ensuring all parties are
              satisfied.
            </p>
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              className={classes.stepper}
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    {getStepContent(index)}
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classesBase.button}
                        >
                          Back
                        </Button>
                        <Button
                          color="primary"
                          onClick={handleNext}
                          className={classesBase.button}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <p>All steps completed - you&apos;ve finished!</p>
                <Button
                  color="primary"
                  onClick={handleReset}
                  className={classesBase.button}
                >
                  Reset
                </Button>
              </Paper>
            )}
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3, classesBase.mt3)}>Industries</h4>
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
              If you would like to find out more about how Stem can help grow
              your business, or if you have a vacancy and need help, then call
              us on 029 2120 2879, or email{" "}
              <a href="mailto:info@stemrecruit.co.uk">
                info@stemrecruit.co.uk.
              </a>
            </p>
            <Grid container justify="center" className={classesBase.mb3}>
              <LinkButton to="/">
                Home
              </LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
