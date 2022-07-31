import React, { useEffect, useState } from "react";
import { IconButton, Box, Grid } from "@mui/material";

import { ReactComponent as ReloadIcon } from "../assets/reload.svg";
import { ReactComponent as GoToUpIcon } from "../assets/goToUp.svg";
import styled from "@emotion/styled";
import { usePagination } from "../hooks/Films.Storage";

const ReloadIconStyled = styled(ReloadIcon)(({ loading }) => ({
  animation: loading ? "rotate 1s linear infinite" : "none",
  "@keyframes rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  }
}));

function ActionButtons() {
  const { isLoading, fetchData } = usePagination();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box sx={{ position: "fixed", right: "20px", bottom: 10 }}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
          <IconButton>
            <ReloadIconStyled
              loading={isLoading}
              onClick={fetchData}
              fontSize="small"
            />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          {isScrolled && (
            <IconButton onClick={scrollToTop}>
              <GoToUpIcon fontSize="small" />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActionButtons;
