import React from "react";
import Sidenav from "../components/sidenav";
import Navbar from "../components/navbar";
import { Box } from "@mui/system";

function Home() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Home</div>
        </Box>
      </Box>
    </>
  );
}

export default Home;
