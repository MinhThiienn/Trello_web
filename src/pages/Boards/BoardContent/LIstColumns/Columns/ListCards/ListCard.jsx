import React from "react";
import Box from "@mui/material/Box";
import TrelloCard from "./Cards/Card";

const ListCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2bf",
        },

        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
            5
          )} - ${theme.trelloCustom.columnFooterHeight} - ${
            theme.trelloCustom.columnHeaderHeight
          })`,
      }}
    >
      <TrelloCard />
      <TrelloCard HideMedia />
      <TrelloCard HideMedia />
      <TrelloCard HideMedia />
      <TrelloCard HideMedia />
      <TrelloCard HideMedia /> <TrelloCard HideMedia /> <TrelloCard HideMedia />{" "}
      <TrelloCard HideMedia /> <TrelloCard HideMedia /> <TrelloCard HideMedia />{" "}
      <TrelloCard HideMedia /> <TrelloCard HideMedia /> <TrelloCard HideMedia />
    </Box>
  );
};

export default ListCard;
