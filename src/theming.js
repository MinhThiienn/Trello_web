import {
  experimental_extendTheme as extendTheme,
  hexToRgb,
} from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
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

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#bdc3c7",
          borderRadius: "4px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#00b894",
          borderRadius: "4px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: "4px", // Custom border radius
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem", // 14px
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.text.primary,
            fontSize: "0.875rem", // 14px
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          };
        },
      },
    },
  },

  colorSchemeSelector: "body[data-theme]",
  cssVarPrefix: "mui",
});

export default theme;
