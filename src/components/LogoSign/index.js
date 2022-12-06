import {Box, Tooltip, tooltipClasses, styled, useTheme} from "@mui/material";
import {Link} from "react-router-dom";

const LogoWrapper = styled(Link)(
  ({theme}) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
`
);

const LogoSign = styled(Box)(
  ({theme}) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

       
`
);

const LogoSignInner = styled(Box)(
  ({theme}) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`
);

const TooltipWrapper = styled(({className, ...props}) => <Tooltip {...props} classes={{popper: className}} />)(
  ({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.colors.alpha.trueWhite[100],
      color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
      fontSize: theme.typography.pxToRem(12),
      fontWeight: "bold",
      borderRadius: theme.general.borderRadiusSm,
      boxShadow: "0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.colors.alpha.trueWhite[100],
    },
  })
);

function Logo() {
  const theme = useTheme();

  return (
    <TooltipWrapper title="Ripple Finance Desktop App" arrow>
      <LogoWrapper to="/app/overview" sx={{width: "100%"}}>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <img alt="500"  className='w-20' src="/R_finance.png" />
        </Box>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
