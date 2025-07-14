import { useColorScheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Container } from "@mui/material";
import theme from "./theming";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    console.log("Selected mode:", selectedMode);
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ minWidth: 120, m: 1 }} size="small">
      <InputLabel id="label-select-k-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-k-light-mode"
        id="select-k-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {" "}
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {" "}
            <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  console.log("prefersDarkMode", prefersDarkMode);
  console.log("prefersLightMode", prefersLightMode);
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => {
            return theme.trelloCustom.appBarHeight;
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        Board Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: (theme) =>
            `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
