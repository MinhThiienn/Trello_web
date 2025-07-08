import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
function App() {
  return (
    <>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
      <div>Minh Thien Dev</div>
      <Typography variant="body2" color="text.secondary">
        Test
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
