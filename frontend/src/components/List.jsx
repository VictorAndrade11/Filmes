import React from "react";
import { Grid, Box } from "@mui/material";

import { Card } from "./Card";
import { usePagination } from "../hooks/Films.Storage";

function List() {
  const { page, items } = usePagination();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container style={{ width: "80vw" }} spacing={3}>
        {items[page - 1]?.map((film) => (
          <Card item={film} />
        ))}
      </Grid>
    </Box>
  );
}

export default List;
