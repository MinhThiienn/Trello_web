import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  // 👇 Đây là phần quan trọng để setMode hoạt động
  colorSchemeSelector: "body[data-theme]",
  cssVarPrefix: "mui", // Tùy chọn, để prefix biến CSS
});

export default theme;
