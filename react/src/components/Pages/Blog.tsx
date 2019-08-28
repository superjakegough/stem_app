import React, { useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Blog from "../../models/blog";
import { GetBlog } from "../../services/blog_service";
import { ConvertDate } from "../../helpers/DateHelper";

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const Blogs: React.FunctionComponent<RouteComponentProps> = props => {
  const classes = useStyles({});
  const [blog, setBlog] = React.useState<Blog>({
    blogId: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const params: any = props.match.params;

  useEffect(() => {
    FetchBlog();
  }, [blog.blogId]);

  async function FetchBlog() {
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
      <Typography variant="h6" color="primary" className="text-center">
        {blog.title}
      </Typography>
      <Typography>
        {blog.description}
      </Typography>
      <Typography className="blog-image" dangerouslySetInnerHTML={{__html: blog.content}}>
      </Typography>
      <Typography className="text-center">{ConvertDate(blog.createdAt)}</Typography>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className="content-container">
        <Grid item md={8} sm={10} xs={12} className="mb-24">
          {content}
        </Grid>
        <Grid container justify="center" className="mb-48">
          <Button className={classes.button} color="primary" component={Link} to="/blogs">Blogs</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Blogs);
