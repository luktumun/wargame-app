import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // primary: "#212121",
      background: {
        default: "#ECF0F1 ",
        paper: "#212121",
      },
      text: {
        primary: '#0A1307  ',
        secondary: "grey",
      }
    }
  });
  
  export default darkTheme;