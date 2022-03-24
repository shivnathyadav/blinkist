import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    secondary: {
      main: "#0365F2",
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#69A6E3",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          border: "1px solid #E1ECFC",
          boxSizing: "border-box",
          borderRadius: "0px 0px 8px 8px",
          textTransform:"none",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: "#0365F2",
            MuiTypographyRoot: {
              color: "#ffffff",
            },
          },
        },
        endIcon:{
          display:"inline",
        }
      },
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          boxShadow:"none",
          backgroundColor:"white",
          marginBottom:"2px"
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0px",
          borderRadius: "0px 0px 8px 8px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: {
          backgroundColor: "#E1ECFC",
        },
      },
    },
    MuiList:{
      styleOverrides:{
        root:{
          paddingTop:"0px",
          paddingBottom:"0px"
        }
      }
    }
  },
});

export default responsiveFontSizes(theme);
