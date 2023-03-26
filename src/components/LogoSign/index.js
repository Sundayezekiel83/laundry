import {Box, Tooltip, tooltipClasses, styled, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import ripplelogo from "../../assets/image/R_energy.png";

function Logo() {
  return (
    <div className="flex justify-between items-center">
      <Link to="/app/overview" className="items-center gap-3 ml-3 mt-4 flex text-sm  font-extrabold tracking-tight ">
        {/* <img src={ripplelogo} alt="logo" className="w-12" /> */}
        <span className="text-bold italic">LOGO</span>
        <span className="text-white">Laundry App</span>
      </Link>
    </div>
  );
}

export default Logo;
