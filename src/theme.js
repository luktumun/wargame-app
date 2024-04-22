import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      // primary: "#212121",
      background: {
        default: "rgb(236, 157, 190)",
        paper: "#212121",
      },
      text: {
        primary: '#fff',
        secondary: "grey",
      }
    }
  });
  
  export default darkTheme;