import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8400",
      black: "#222",
      white: "#f1f1f1",
      lightGray: "#e4e4e4",
      gray: "#6b7688",
    },
    background: {
      default: "#222",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
});
