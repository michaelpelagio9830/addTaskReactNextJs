import Head from "next/head";
import styles from "../styles/Home.module.css";

import Login from "../components/login";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh", width: "100vw", backgroundColor: "lightgrey" }}
    >
      <Login />
    </Grid>
  );
}
