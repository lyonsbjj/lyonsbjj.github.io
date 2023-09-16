import React from "react";
import AdbIcon from '@mui/icons-material/Adb';
import { Typography } from '@mui/material';

interface IHeaderIconProps {
   title: string;
}

const HeaderIcon: React.FC<IHeaderIconProps> = ({title}) => {
   return (
      <>
         <AdbIcon sx={{ display: 'flex', mr: 1 }} />
         <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
               mr: 2,
               display: 'flex',
               fontFamily: "monospace",
               fontWeight: 700,
               letterSpacing: ".3rem",
               color: "inherit",
               textDecoration: "none",
            }}
         >
            {title}
         </Typography>
      </>
   );
};

export default HeaderIcon;
