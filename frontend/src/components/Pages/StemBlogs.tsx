import React, {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent
} from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import blogsimage from "../../assets/blogs.jpg";
import blogsPt from "../../assets/blogsPt.jpg";
import TablePagination from "@material-ui/core/TablePagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import ContentDom from "../Layout/ContentDom";
import LinkButton from "../Layout/LinkButton";
import { Blog } from "../../models/blog";
import { GetAllBlogs } from "../../services/blog_service";
import { convertDate } from "../../helpers/date-helper";
import useStylesBase from "../../styles/styles-base";
import clsx from "clsx";

export default function StemBlogs() {
  const classesBase = useStylesBase();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(3);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const blogsImage = smAndDown ? blogsPt : blogsimage;

  useEffect(() => {
    fetchBlogs();
  }, [blogs.length]);

  async function fetchBlogs() {
    setLoading(true);
    const result: Blog[] = await GetAllBlogs();
    if (result) {
      setBlogs(result);
      setFilteredBlogs(result);
    }
    setLoading(false);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
  }

  function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const regex = new RegExp(`^.*${searchTerm}.*$`, "i");
    if (!searchTerm) {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => regex.test(blog.title)));
    }
  }

  const pagination =
    filteredBlogs.length > 0 ? (
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={filteredBlogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={""}
      />
    ) : (
      <Paper elevation={0} className={classesBase.stemPaper}>
        <p className={classesBase.textCenter}>No blogs found</p>
      </Paper>
    );

  const content = loading ? (
    <Grid
      container
      justify="center"
      className={clsx(classesBase.mt3, classesBase.mb3)}
    >
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <>
      {filteredBlogs
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((blog: Blog) => {
          return (
            <div key={blog.blogId}>
              <Paper elevation={0} className={classesBase.stemPaper}>
                <h6
                  className={clsx(
                    classesBase.primaryText,
                    classesBase.textCenter
                  )}
                >
                  {blog.title}
                </h6>
                <p>{blog.description}</p>
                <ContentDom
                  className={classesBase.shortContentDom}
                  content={blog.content}
                />
                <p>...</p>
                <p>Published: {convertDate(blog.createdAt)}</p>
                <Grid container justify="center">
                  <LinkButton
                    className={classesBase.button}
                    to={{ pathname: `/blog/${blog.blogId}` }}
                  >
                    View
                  </LinkButton>
                </Grid>
              </Paper>
            </div>
          );
        })}
      {pagination}
    </>
  );

  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <img src={blogsImage} className={classesBase.headerImage} alt="" />
        </Grid>
        <Grid
          container
          justify="center"
          className={classesBase.contentContainer}
        >
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <h4 className={clsx(classesBase.contentTitle, classesBase.mb3)}>
              News &amp; Advice Blogs
            </h4>
            <p>
              Keep up to date with the latest industry news, as well as regular
              activites offering recruitment and careers advice provided by Stem Skills &amp; Recruitment.
            </p>
          </Grid>
          <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
            <form onSubmit={handleSubmitSearch}>
              <TextField
                className={clsx(
                  classesBase.textField,
                  classesBase.whiteTextField
                )}
                variant="filled"
                margin="dense"
                fullWidth
                hiddenLabel
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  )
                }}
              />
            </form>
            {content}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
