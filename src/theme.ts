import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4.5rem",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#db2d34",
      light: "#ffefed",
      dark: "#b01c23",
    },
    secondary: {
      main: "#27bc7d",
      light: "#049065",
      dark: "#016043",
      contrastText: "#0099CC",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "p",
          subtitle2: "span",
          body1: "p",
          body2: "span",
        },
      },
    },
    MuiButton:{
      styleOverrides:{
        contained:{
          [":hover"]:{
            color:"white"
          }
        }
      }
    }
  },
});

export default responsiveFontSizes(theme);
