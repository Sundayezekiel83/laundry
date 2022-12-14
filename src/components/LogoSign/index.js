import {Box, Tooltip, tooltipClasses, styled, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import ripplelogo from '../../assets/image/R_energy.png';



function Logo() {
  

  return (
    <div className="flex justify-between items-center">
            <Link to="/app/overview" className="items-center gap-3 ml-3 mt-4 flex text-sm  font-extrabold tracking-tight dark:text-white text-slate-900">
             <img src={ripplelogo} alt='logo' className='w-12 dark:bg-white dark:rounded-lg' /> <span className='text-[#653434] dark:text-white'>Ripple Finance</span>
            </Link>
        
        </div>
  );
}

export default Logo;
