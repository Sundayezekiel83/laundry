import {Box, alpha, lighten, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";

import Sidebar from "./sidebar";
import Header from "./header";

const SidebarLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />

      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          display: "block",
          flex: 1,
          pt: `${theme.header.height}`,
          [theme.breakpoints.up("lg")]: {
            ml: `${theme.sidebar.width}`,
          },
        }}
      >
        <Box display="block">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
