import React, { FunctionComponent, useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import ContentDom from "../Layout/ContentDom";
import LinkButton from "../Layout/LinkButton";
import { Blog, BlankBlog } from "../../models/blog";
import { GetBlog } from "../../services/blog_service";
import { ConvertDate } from "../../helpers/DateHelper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    paper: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(3)
    }
  })
);

const ViewBlog: FunctionComponent<RouteComponentProps> = props => {
  const classes = useStyles({});
  const [blog, setBlog] = useState<Blog>(BlankBlog());
  const [loading, setLoading] = useState<boolean>(false);
  const params: any = props.match.params;

  useEffect(() => {
    fetchBlog();
  }, [blog.blogId]);

  async function fetchBlog() {
    setLoading(true);
    const result = await GetBlog(params.id);
    if (result) {
      setBlog(result);
    }
    setLoading(false);
  }

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <Paper key={blog.blogId} elevation={0} className={classes.paper}>
      <h6 className="primary-text text-center">{blog.title}</h6>
      <p>{blog.description}</p>
      <div></div>
      <ContentDom className="blog-image" content={blog.content} />
      <p>Published: {ConvertDate(blog.createdAt)}</p>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className="content-container">
        <Grid item md={8} sm={10} xs={12} className="mb-24">
          {content}
        </Grid>
        <Grid container justify="center" className="mb-24">
          <LinkButton
            className={classes.button}
            to="/blogs"
          >
            Blogs
          </LinkButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(ViewBlog);
