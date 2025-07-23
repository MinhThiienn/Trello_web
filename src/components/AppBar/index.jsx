import React from "react";
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
function AppBar() {
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
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {" "}
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{ fontWeight: "Bold", color: "primary.main", fontSize: 20 }}
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
          <Button variant="outlined" startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {" "}
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          size="small"
          sx={{ minWidth: 120 }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot">
            <NotificationsNone sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>
        <AccProfiles />
      </Box>
    </Box>
  );
}

export default AppBar;
