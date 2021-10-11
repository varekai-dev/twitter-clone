import { Grid, Paper } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Home = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <TwitterIcon color="primary" />
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};
