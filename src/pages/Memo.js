import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 12,
    },
    h2: {
      fontSize: 20,
    },
  },
  spacing: [0, 4, 80, 16, 32, 64],
  palette: {
    secondary: {
      main: "#ff4400",
    },
  },
});

function Memo() {
  return (
    <div>
      <h1>Material UI</h1>
      <h2>客製化樣式</h2>
      <h3>Theme & Typography</h3>
      <ThemeProvider theme={theme}> {/* 用 ThemeProvider 包住要套用主題的區域，可以客製化css */}
        <Typography variant="h1" component="h2">
          custom theme
        </Typography>
      </ThemeProvider>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <h3>Theme & Spacing</h3>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" component="h2" mt={2}> {/* mt = margin top 第二個，就是8 */}
          custom theme
        </Typography>

        <h3>Platte 顏色</h3>
        <Button variant="contained" color="secondary">
          123
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Memo;
