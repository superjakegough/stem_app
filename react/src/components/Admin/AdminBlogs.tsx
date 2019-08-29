import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Blog from "../../models/blog";
import { GetAllBlogs } from "../../services/blog_service";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const AdminBlogs: React.FunctionComponent = props => {
  const classes = useStyles({});
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(3);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  useEffect(() => {
    fetchBlogs();
  }, [blogs.length]);

  async function fetchBlogs() {
    setLoading(true);
    const result = await GetAllBlogs();
    if (result) {
      setBlogs(result);
    }
    setLoading(false);
  }

  return (
    <div>
      <Grid container direction="column" justify="center">
      </Grid>
    </div>
  );
};

export default AdminBlogs;
