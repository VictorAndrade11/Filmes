import React from "react";
import { Grid, Pagination } from "@mui/material";
import { usePagination } from "../hooks/Films.Storage";

function Header() {
  const { page, count, handlePage } = usePagination();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: "background.header",
        height: "100px"
      }}
    >
      <Pagination count={count} page={page} onChange={handlePage} />
    </Grid>
  );
}

export default Header;
