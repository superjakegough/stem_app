import React from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import Toolbar from "@material-ui/core/Toolbar";
import Spacer from "../Layout/Spacer";
import BlogDialog from "../Dialogs/BlogDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import Blog from "../../models/blog";
import { GetAllBlogs } from "../../services/blog_service";

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
    }
  })
);

const AdminBlogTable: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [blog, setBlog] = React.useState<Blog>({
    blogId: "",
    title: "",
    description: "",
    content: "",
    createdAt: ""
  });
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const [openCreateEdit, setCreateEdit] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number>(0);
  const [openDelete, setDelete] = React.useState<boolean>(false);
  const smAndDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    setLoading(true);
    const result = await GetAllBlogs();
    if (result) {
      setBlogs(result);
    }
    setLoading(false);
  }

  function handleChangePage(event: unknown, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
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
    setBlog({
      blogId: "",
      title: "",
      description: "",
      content: "",
      createdAt: ""
    });
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

  function handleCreate(blog: Blog) {
    setBlogs([...blogs, blog]);
    setCreateEdit(false);
  }

  function handleUpdate(blog: Blog) {
    setBlogs(
      blogs.map((item: Blog) => (item.blogId === blog.blogId ? blog : item))
    );
    setCreateEdit(false);
  }

  function handleDelete() {
    const deleteId: string = blogs[selected].blogId;
    setBlogs(blogs.filter((item: Blog) => item.blogId !== deleteId));
    setDelete(false);
  }

  const table = smAndDown ? (
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

  const content = loading ? (
    <Grid container justify="center" className="mt-24 mb-24">
      <CircularProgress color="primary" />
    </Grid>
  ) : (
    table
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
