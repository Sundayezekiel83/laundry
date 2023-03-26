import {useContext} from "react";
import Scrollbar from "../../../components/Scrollbar";
import {SidebarContext} from "../../../context/SideBarContext";

import {Box, Drawer, Divider, styled, useTheme} from "@mui/material";

import SidebarMenu from "./sidebarMenu";
import Logo from "../../../components/LogoSign";

const SidebarWrapper = styled(Box)(
  ({theme}) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        background-color: #45cccc;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
        
        `
);

function Sidebar() {
  const {sidebarToggle, toggleSidebar} = useContext(SidebarContext);

  const closeSidebar = () => toggleSidebar();

  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Box mt={3}>
          <Box
            mx={2}
            sx={{
              width: "100%",
            }}
          >
            <Logo />
          </Box>
        </Box>

        <SidebarMenu />
      </SidebarWrapper>

      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
              }}
            >
              <Logo />
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10],
            }}
          />
          <SidebarMenu />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
