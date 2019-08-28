import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import blogsimage from "../../assets/blogs.jpg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Blog from "../../models/blog";
import { GetAllBlogs } from "../../services/blog_service";
import { ConvertDate } from "../../helpers/DateHelper";

const useStyles = makeStyles((theme: Theme) => createStyles({
  bodyText: {
    marginBottom: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  },
  textField: {
    flexBasis: 200,
    marginBottom: theme.spacing(4),
    width: "100%",
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
      borderRadius: 8
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: 0,
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
      borderRadius: 8,
    },
  },
}));

const Blogs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

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

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
          <>
            <Paper key={blog.blogId} elevation={0} className={classes.paper}>
              <Typography variant="h6" color="primary" className="text-center">
                {blog.title}
              </Typography>
              <Typography>
                {blog.description}
              </Typography>
              <Typography className="blog-short-content blog-image" dangerouslySetInnerHTML={{__html: blog.content}}>
              </Typography>
              <Typography className={classes.bodyText}>...</Typography>
              <Typography>Published: {ConvertDate(blog.createdAt)}</Typography>
              <Grid container justify="center">
                <Button className={classes.button} color="primary" component={Link} to={{ pathname: `/blog/${blog.blogId}`}}>View</Button>
              </Grid>
            </Paper>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredBlogs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
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
            <TextField
              className={classes.textField}
              variant="filled"
              margin="dense"
              hiddenLabel
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon color="primary"/></InputAdornment>,
              }}
            />
            {content}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Blogs);
