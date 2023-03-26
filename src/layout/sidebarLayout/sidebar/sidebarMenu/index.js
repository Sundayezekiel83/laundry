import {useContext, useState} from "react";

import {Box, styled} from "@mui/material";
import {SidebarContext} from "../../../../context/SideBarContext";
import {NavLink} from "react-router-dom";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";

function SidebarMenu() {
  const {closeSidebar} = useContext(SidebarContext);

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const [currentColor, setCurrentColor] = useState("#95e8e8");

  return (
    <>
      <div className="overflow-hidden">
        <div>
          <p className="text-gray-600 m-3 mt-4 uppercase">Dashboard</p>
          <NavLink
            onClick={closeSidebar}
            to={`/app/overview`}
            style={({isActive}) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({isActive}) => (isActive ? activeLink : normalLink)}
          >
            <TableChartTwoToneIcon />
            <span className="capitalize ">DashBoard</span>
          </NavLink>
        </div>
      </div>

      {/* <div className="mt-10 ">
        <div>
          <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">Management</p>
          <NavLink
            onClick={closeSidebar}
            to={`/app/view_loan_request`}
            style={({isActive}) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({isActive}) => (isActive ? activeLink : normalLink)}
          >
            <DisplaySettingsTwoToneIcon />
            <span className="capitalize ">View Loan request</span>
          </NavLink>

          <NavLink
            onClick={closeSidebar}
            to={`/app/viewUsers`}
            style={({isActive}) => ({
              backgroundColor: isActive ? currentColor : "",
            })}
            className={({isActive}) => (isActive ? activeLink : normalLink)}
          >
            <AccountCircleTwoToneIcon />
            <span className="capitalize ">View Users</span>
          </NavLink>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default SidebarMenu;
