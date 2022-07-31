import { Info as InfoIcon } from "@mui/icons-material";
import {
    Grid,
    styled,
    Typography,
    Tooltip,
  } from "@mui/material";

const MoreAbout = styled(Grid)(({ theme, active }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "50px",
    position: "absolute",
    bottom: active ? "0" : "-150px",
    transition: "bottom 0.5s ease-in-out",
    borderRadius: "10px 10px 0 0"
  }));

export const Description = ({ item, active }) => {
  return (
    <MoreAbout
      container
      direction="column"
      justifyContent="space-between"
      active={active}
      boxShadow={2}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={5}>
          <Tooltip arrow title={item.director}>
            <Typography variant="body2">Diretor</Typography>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip arrow title={item.description}>
            <InfoIcon style={{ color: "#000" }} />
          </Tooltip>
        </Grid>
        <Grid item xs={5}>
          <Tooltip arrow title={item.producer}>
            <Typography variant="body2">Produtor</Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </MoreAbout>
  );
};
