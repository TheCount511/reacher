import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feeds";
import Rightbar from "./components/rightbar/Rightbar";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import AddPost from "./components/feed/AddPost";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPost/>
    </Box>
  );
}

export default App;
