import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AbcIcon from "@mui/icons-material/Abc";

function Memo() {
  return (
    <div>
      <h1>Material UI</h1>
      <h2>元件介紹、 Material Icon</h2>
      <h3>安裝</h3>
      <p>官網：https://mui.com/material-ui/getting-started/overview/</p>
      <p>npm install @mui/material @emotion/react @emotion/styled</p>
      <h3>Box</h3>
      <Box
      // 如果要更改屬性，可以用 sx 屬性，也可以更改 component 屬性，像是component="span"
        mt={2}
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        123
      </Box>
      <h3>Typography</h3>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h1" component="h2"> 
        {/* component表示我要使用h2標籤，variant表示我要使用h1的樣式，所以就是用h2標籤展現h1樣式 */}
        h1. Heading
      </Typography>
      <h3>Link</h3>
      <h3>Button</h3>
      <h3>Material Icon</h3>
      <p>安裝：npm install @mui/icons-material</p>
      <Button variant="contained" color="success">
        123
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <AbcIcon />
      </IconButton>
    </div>
  );
}

export default Memo;
