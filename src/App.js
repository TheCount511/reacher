import * as React from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import { styled, Typography } from "@mui/material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<SettingsIcon />}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        startIcon={<AddIcon />}
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="h2">
        h1.Heading
      </Typography>
      <BlueButton variant="contained" disabled>
        unique button
      </BlueButton>
      <BlueButton variant="contained">
        My button
      </BlueButton>
    </div>
  );
}

export default App;
