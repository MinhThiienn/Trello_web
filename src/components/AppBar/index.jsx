import React from "react";
import { useState } from "react";
import ModeSelect from "~/components/ModeSelect";
import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/icons-material/Apps";
import TrelloIcon from "~/assets/trello.svg?react";
import { Button, Typography } from "@mui/material";
import WordSpaces from "./Menus/WordSpaces";
import Recent from "./Menus/Recent";
import TextField from "@mui/material/TextField";
import Starred from "./Menus/Starred";
import Template from "./Menus/Template";
import Badge from "@mui/material/Badge";
import { NotificationsNone } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccProfiles from "./Menus/AccProfiles";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
function AppBar() {
  const [searchValue, setsearchValue] = useState();
  return (
    <Box
      sx={{
        width: "100%",
        paddingX: 2,
        height: (theme) => {
          return theme.trelloCustom.appBarHeight;
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {" "}
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{ fontWeight: "Bold", color: "white", fontSize: 20 }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {" "}
          <WordSpaces />
          <Recent />
          <Starred />
          <Template />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {" "}
        <TextField
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          id="outlined-search"
          label="Search"
          type="text"
          size="small"
          sx={{
            minWidth: 120,
            maxWidth: 170,
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                onClick={() => setsearchValue("")}
                fontSize="small"
                sx={{
                  color: searchValue === "" ? "transparent" : "white",
                  cursor: "pointer",
                }}
              />
            ),
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot">
            <NotificationsNone sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <AccProfiles />
      </Box>
    </Box>
  );
}

export default AppBar;
