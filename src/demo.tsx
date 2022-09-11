import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ReactEditorInstance from "./ReactEditorInstance";

export default function BasicGrid() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <ReactEditorInstance key={1} />
        </Grid>
        <Grid item md={6}>
          <ReactEditorInstance key={2} />
        </Grid>
        <Grid item md={6}>
          <ReactEditorInstance key={3} />
        </Grid>
        <Grid item md={6}>
          <ReactEditorInstance key={4} />
        </Grid>
      </Grid>
    </Box>
  );
}
