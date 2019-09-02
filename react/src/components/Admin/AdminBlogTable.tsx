import React, { FunctionComponent, useState, useEffect, ChangeEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Toolbar from "@material-ui/core/Toolbar";
import Spacer from "../Layout/Spacer";
import BlogDialog from "../Dialogs/BlogDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import { Blog, BlankBlog } from "../../models/blog";
import { GetAllBlogs, CreateBlog, UpdateBlog, DeleteBlog } from "../../services/blog_service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boldText: {
      fontWeight: 500
    },
    button: {
      margin: theme.spacing(1)
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    grid: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    icon: {
      color: "#9e9e9e"
    },
    paper: {
      width: "100%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
  })
);

const AdminBlogTable: FunctionComponent = props => {
  const classes = useStyles({});
  const [blog, setBlog] = useState<Blog>(BlankBlog());
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [openCreateEdit, setCreateEdit] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [openDelete, setDelete] = useState<boolean>(false);
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    setLoading(true);
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const result = await GetAllBlogs();
    if (result) {
      setBlogs(result);
    }
    setLoading(false);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: ChangeEvent<HTMLInputElement>) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleCreateEditClose() {
    setCreateEdit(false);
  }

  function handleDeleteClose() {
    setDelete(false);
  }

  function handleOpenCreate() {
    setBlog(BlankBlog());
    setCreateEdit(true);
  }

  function handleOpenUpdate(index: number) {
    setBlog(Object.assign({}, blogs[index]));
    setCreateEdit(true);
  }

  function handleOpenDelete(index: number) {
    setSelected(index);
    setDelete(true);
  }

  async function handleCreate(blog: Blog) {
    setLoading(true);
    setCreateEdit(false);
    await CreateBlog(blog);
    await fetchBlogs();
  }

  async function handleUpdate(blog: Blog) {
    setLoading(true);
    setCreateEdit(false);
    await UpdateBlog(blog);
    await fetchBlogs();
  }

  async function handleDelete() {
    setLoading(true);
    setDelete(false);
    const deleteId: string = blogs[selected].blogId;
    await DeleteBlog(deleteId);
    await fetchBlogs();
  }

  const smContent = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    <div className="mb-48">
      {blogs
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((blog: Blog, index: number) => (
          <Paper key={blog.blogId} className={classes.paper}>
            <Toolbar>
              <p className={classes.boldText}>{blog.title}</p>
              <Spacer />
              <IconButton size="small" onClick={() => handleOpenUpdate(index)}>
                <EditIcon className={classes.icon} />
              </IconButton>
              <IconButton size="small" onClick={() => handleOpenDelete(index)}>
                <DeleteIcon className={classes.icon} />
              </IconButton>
            </Toolbar>
          </Paper>
        ))}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={blogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );

  const content = smAndDown ? (
    smContent
  ) : (
    <Paper className={classes.paper}>
      <Toolbar>
        <h6>Blogs</h6>
        <Spacer />
        <Button
          className={classes.button}
          color="primary"
          onClick={handleOpenCreate}
        >
          Create
        </Button>
      </Toolbar>
      {loading && (<LinearProgress />)}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((blog: Blog, index: number) => (
              <TableRow key={blog.blogId}>
                <TableCell component="th" scope="row">
                  {blog.title}
                </TableCell>
                <TableCell align="right">{blog.description}</TableCell>
                <TableCell align="right">
                  <IconButton
                    size="small"
                    onClick={() => handleOpenUpdate(index)}
                  >
                    <EditIcon className={classes.icon} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDelete(index)}
                  >
                    <DeleteIcon className={classes.icon} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={blogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="content-container full-height"
      >
        <Grid item md={10} sm={10} xs={12}>
          {content}
        </Grid>
        <BlogDialog
          open={openCreateEdit}
          blog={blog}
          handleClose={handleCreateEditClose}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
        <DeleteDialog
          open={openDelete}
          handleClose={handleDeleteClose}
          handleDelete={handleDelete}
        />
      </Grid>
    </div>
  );
};

export default AdminBlogTable;
