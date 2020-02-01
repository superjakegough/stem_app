import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import ContentDom from "../Layout/ContentDom";
import LinkButton from "../Layout/LinkButton";
import { Job, BlankJob } from "../../models/job";
import { GetJob } from "../../services/job_service";
import { convertDate } from "../../helpers/date-helper";
import useStylesBase from "../../styles/styles-base";
import { useParams } from "react-router";
import clsx from "clsx";

export default function ViewJob() {
  const classesBase = useStylesBase();
  const [job, setJob] = useState<Job>(BlankJob());
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchJob() {
      if (id) {
        setLoading(true);
        const result = await GetJob(id);
        if (result) {
          setJob(result);
        }
        setLoading(false);
      }
    }
    fetchJob();
  }, [id]);

  const content = loading ? (
    <Grid
      container
      justify="center"
      className={clsx(classesBase.mt3, classesBase.mb3)}
    >
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper key={job.jobId} elevation={0} className={classesBase.viewPaper}>
      <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>
        {job.title}
      </h6>
      <h6>Salary - Benefits</h6>
      <p>{`${job.salary} - ${job.benefits}`}</p>
      <h6>Type</h6>
      <p>{job.jobType}</p>
      <h6>Location</h6>
      <p>{job.jobLocation}</p>
      <h6>Reference</h6>
      <p>{job.jobReference}</p>
      <ContentDom content={job.description} />
      <p>Published: {convertDate(job.createdAt)}</p>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className={classesBase.contentContainer}>
        <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
          {content}
        </Grid>
        <Grid container justify="center" className={classesBase.mb3}>
          <LinkButton className={classesBase.button} to="/jobs">
            Jobs
          </LinkButton>
        </Grid>
      </Grid>
    </div>
  );
}
