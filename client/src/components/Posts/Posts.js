import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

import useStyles from "./Posts.style";

export default function Posts({ currentId, setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.mainContainer} container alignItems="stretch">
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
