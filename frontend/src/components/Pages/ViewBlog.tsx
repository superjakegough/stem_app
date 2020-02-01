import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import ContentDom from "../Layout/ContentDom";
import LinkButton from "../Layout/LinkButton";
import { Blog, BlankBlog } from "../../models/blog";
import { GetBlog } from "../../services/blog_service";
import { convertDate } from "../../helpers/date-helper";
import useStylesBase from "../../styles/styles-base";
import { useParams } from "react-router";
import clsx from "clsx";

export default function ViewBlog() {
  const classesBase = useStylesBase();
  const [blog, setBlog] = useState<Blog>(BlankBlog());
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlog() {
      if (id) {
        setLoading(true);
        const result = await GetBlog(id);
        if (result) {
          setBlog(result);
        }
        setLoading(false);
      }
    }
    fetchBlog();
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
    <Paper key={blog.blogId} elevation={0} className={classesBase.viewPaper}>
      <h6 className={clsx(classesBase.primaryText, classesBase.textCenter)}>
        {blog.title}
      </h6>
      <p>{blog.description}</p>
      <div></div>
      <ContentDom content={blog.content} />
      <p>Published: {convertDate(blog.createdAt)}</p>
    </Paper>
  );

  return (
    <div>
      <Grid container justify="center" className={classesBase.contentContainer}>
        <Grid item md={8} sm={10} xs={12} className={classesBase.mb3}>
          {content}
        </Grid>
        <Grid container justify="center" className={classesBase.mb3}>
          <LinkButton className={classesBase.button} to="/blogs">
            Blogs
          </LinkButton>
        </Grid>
      </Grid>
    </div>
  );
}
