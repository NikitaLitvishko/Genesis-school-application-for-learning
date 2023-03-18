import { useState } from "react";

import HlsPlayer from "./HlsPlayer";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Lessons(props) {
  const [selectedIndex, setSelectedIndex] = useState(props.currentLesson + 1);

  const handleListItemClick = (lesson) => {
    const lessonIndex = lesson.order - 1;
    if (lesson.status === "unlocked") {
      setSelectedIndex(lesson.order);
      localStorage.setItem(`currentLesson-${props.lessonId}`, lessonIndex);
      props.setLesson(lessonIndex);
    }
  };

  return (
    <div>
      <List
        component="nav"
        sx={{
          height: "100%",
          maxHeight: "500px",
          width: "100%",
          overflow: "auto",
        }}
        subheader={
          <ListSubheader sx={{ fontSize: "21px" }}>Lessons</ListSubheader>
        }
      >
        {props.sortedLessons.map((lesson) => (
          <ListItemButton
            sx={{
              height: "100%",
            }}
            selected={selectedIndex === lesson.order}
            onClick={() => handleListItemClick(lesson)}
          >
            <ListItemIcon>
              {lesson.status === "unlocked" ? (
                <PlayCircleFilledWhiteOutlinedIcon />
              ) : (
                <LockOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={`${lesson.order}. ${lesson.title}.`} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}
