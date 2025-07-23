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
<<<<<<< HEAD

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
=======
  components: {
>>>>>>> 2764f4c966c245dcdf0f4c2a87ea662f456196ae
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
<<<<<<< HEAD
          borderRadius: "4px",
=======
          borderRadius: "4px", // Custom border radius
>>>>>>> 2764f4c966c245dcdf0f4c2a87ea662f456196ae
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
<<<<<<< HEAD
          fontSize: "0.875rem",
=======
          fontSize: "0.875rem", // 14px
          // "&.Mui-focused": {
          //   color: theme.palette.primary.main,
          // },
>>>>>>> 2764f4c966c245dcdf0f4c2a87ea662f456196ae
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.text.primary,
<<<<<<< HEAD
            fontSize: "0.875rem",
=======
            fontSize: "0.875rem", // 14px
>>>>>>> 2764f4c966c245dcdf0f4c2a87ea662f456196ae
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
