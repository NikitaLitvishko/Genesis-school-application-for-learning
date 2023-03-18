import { Box } from "@mui/material/";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      Something went wrong...
    </Box>
  );
}
