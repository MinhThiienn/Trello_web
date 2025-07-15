import { Container } from "@mui/material";
import AppBar from "~/components/AppBar";
import theme from "~/theming.js";
import BoardBar from "./BoardBar/index.jsx";
import BoardContent from "./BoardContent/index.jsx";
function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;
