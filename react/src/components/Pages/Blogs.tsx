import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import blogsimage from "../assets/blogs.jpg";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Blog from "../../models/blog";
import { GetAllBlogs } from "../../services/blog_service";
import { ConvertDate } from "../../helpers/DateHelper";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  bodyText: {
    marginBottom: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const Blogs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState<Blog[]>([]);
  const [pagedBlogs, setPagedBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [blogsPages, setBlogsPages] = React.useState<number>(1);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const blogsPerPage: number = 3;

  useEffect(() => {
    FetchBlogs();
  }, [blogs.length]);

  async function FetchBlogs() {
    setLoading(true);
    const result = await GetAllBlogs();
    if (result) {
      setBlogs(result);
    }
    onSearch();
    setLoading(false);

  }

  function onPageChange() {
    setBlogsPages(Math.ceil(filteredBlogs.length / blogsPerPage));
    setPagedBlogs(filteredBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage));
  }

  function onSearch() {
    const regex = new RegExp(`^.*${searchTerm}.*$`, "i");
    setPage(1);
    if (!searchTerm) {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => regex.test(blog.title)));
    }
  }

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredBlogs.map((blog: Blog) => {
        return (
          <Paper key={blog.blogId} elevation={0} className={classes.paper}>
            <Typography variant="h6" color="primary" className="text-center">
              {blog.title}
            </Typography>
            <Typography>
              {blog.description}
            </Typography>
            <Typography className="blog-short-content blog-image" dangerouslySetInnerHTML={{__html: blog.content}}>
            </Typography>
            <Typography>...</Typography>
            <Typography className="text-center">{ConvertDate(blog.createdAt)}</Typography>
            <Grid container justify="center">
              <Button className={classes.button} color="primary" component={Link} to={{ pathname: `/blog/${blog.blogId}`}}>View</Button>
            </Grid>
          </Paper>
        );
      })}
    </>
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={blogsimage} className="header-image" alt=""/>
          <div className="header-text">Blogs</div>
        </Grid>
        <Grid container justify="center" className="content-container">
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            <h2 className="content-title mb-24">News &amp; Advice Blogs</h2>
            <Typography className={classes.bodyText}>Keep up to date with the latest industry news, as well as regular activites offering recruitment and careers advice.</Typography>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className="mb-24">
            {content}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Blogs);
