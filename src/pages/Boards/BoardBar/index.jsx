import React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip } from "@mui/material";
import { Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_tyles = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    backgroundColor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingX: 2,
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid red",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label="VMT MERN Stack Board"
          clickable
          sx={MENU_tyles}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_tyles}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Drive"
          clickable
          sx={MENU_tyles}
        />
        <Chip
          icon={<BoltIcon />}
          label="Atuomatic Actions"
          clickable
          sx={MENU_tyles}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_tyles}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{ "& .MuiAvatar-root": { width: 34, height: 34, fontSize: 16 } }}
        >
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="MinhThienDev">
            {" "}
            <Avatar alt="MinhThienDev" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
