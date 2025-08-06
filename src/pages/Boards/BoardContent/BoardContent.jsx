import { List } from "@mui/material";
import Box from "@mui/material/Box";
import ListColumns from "./LIstColumns/ListColumns";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        display: "flex",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        overflowX: "auto",
        overflowY: "hidden",
        p: "10px 0",
      }}
    >
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
