import { useState } from "react";
import HoverHlsPlayer from "./HoverHlsPlayer";
import Skills from "./Skills";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material/";

export default function Course(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    if (typeof props.meta["courseVideoPreview"] !== "undefined") setHover(true);
  };

  return (
    <Card
      key={props.id}
      onClick={() => (window.location.href = `/course/${props.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHover(false)}
      sx={{
        width: 1,
        maxWidth: 300,
        my: "1%",
        ml: "1%",
        mr: "1%",
        boxShadow: 7,
      }}
    >
      <CardHeader
        title={props.title}
        sx={{ mt: 1, textAlign: "center", height: "85px" }}
      />
      <CardActionArea sx={{ height: "168px" }}>
        {!hover ? (
          <CardMedia component="img" image={props.img} alt={props.title} />
        ) : (
          <HoverHlsPlayer {...props} />
        )}
      </CardActionArea>
      <CardContent>
        {props.description} <br />
        Number of lessons: {props.lessonsCount}. <br />
        Time of execution ~{props.duration} minutes. <br />
        <Skills skills={props.meta.skills} />
        Rating: {props.rating}
      </CardContent>
    </Card>
  );
}
