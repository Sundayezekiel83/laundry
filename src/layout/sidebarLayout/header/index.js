import {useContext} from "react";

import {Box, alpha, Stack, lighten, Divider, IconButton, Tooltip, styled, useTheme} from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import {SidebarContext} from "../../../context/SideBarContext";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import HeaderButtons from "./Buttons";
import HeaderUserbox from "./Userbox";
import HeaderMenu from "./Menu";

const HeaderWrapper = styled(Box)(
  ({theme}) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        position: fixed;
        justify-content: space-between;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header() {
  const {sidebarToggle, toggleSidebar} = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack>
      <Box display="flex" alignItems="center">
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: {lg: "none", xs: "inline-block"},
          }}
        >
          <IconButton color="primary" onClick={toggleSidebar}>
            {!sidebarToggle ? <MenuTwoToneIcon fontSize="small" /> : <CloseTwoToneIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
