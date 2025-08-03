import {
  experimental_extendTheme as extendTheme,
  hexToRgb,
} from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },

  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
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
          backgroundColor: "#dcdde1",
          borderRadius: "4px",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "white",
          borderRadius: "4px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": { borderWidth: "0.5px" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          fontSize: "0.875rem", // 14px
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          "&.MuiTypography-body1": {
            fontSize: "0.875rem", // 14px
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            // color: theme.palette.text.primary,
            fontSize: "0.875rem", // 14px
            // "& .MuiOutlinedInput-notchedOutline": {
            //   borderColor: theme.palette.primary.light,
            // },
            // "&:hover .MuiOutlinedInput-notchedOutline": {
            //   borderColor: theme.palette.primary.main,
            // },
            "& feildset": {
              borderWidth: "0.5px !important",
            },
            "&:hover: feildset": {
              borderWidth: "1px !important",
            },
            "&.Mui-focussed feildset": {
              borderWidth: "1px !important",
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
