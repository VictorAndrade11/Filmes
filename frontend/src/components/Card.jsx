import {
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Description } from "./Description";

const Item = styled(Paper)(({ theme, image }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "100%",
  height: "200px",
  marginBottom: "1cm",
  marginTop: "1cm",
  position: "relative",
  overflow: "hidden",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover"
}));

const Fade = styled(Grid)(({ theme, active }) => ({
  borderRadius: "20%",
  filter: "blur(15px)",
  bottom: active ? "-60%" : "-100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: "bottom 0.5s ease-in-out"
}));

const Title = styled(Typography)(({ theme, active }) => ({
  textAlign: "start",
  width: "100%",
  padding: theme.spacing(1),
  position: "absolute",
  bottom: active ? "50px" : "0",
  transition: "bottom 0.5s ease-in-out"
}));

export function Card({ item }) {
  const [isOpen, setOpen] = useState(false);

  const events = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  };

  return (
    <Grid item xs={3} sm={12} md={6} lg={3}>
      <Item {...events} image={item.movie_banner}>
        <Fade active={isOpen} />
        <Title
          variant="subtitle1"
          color="primary"
          sx={{ fontWeight: "bold" }}
          active={isOpen}
        >
          {item.title}
        </Title>
        <Description item={item} active={isOpen} />
      </Item>
    </Grid>
  );
}
