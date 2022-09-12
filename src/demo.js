import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from 'uuid';

import ReactEditorInstance from "./ReactEditorInstance";

export default function BasicGrid() {

  const cells = [uuidv4(),uuidv4(),uuidv4(),uuidv4()]

  return (
    <Box>
      <Grid container spacing={2}>     
        {
          cells.map(id => {
            return <Grid key={id} item md={3}>
              <ReactEditorInstance holder={id} />
            </Grid>     
          })
        }
      </Grid>
    </Box>
  );
}
