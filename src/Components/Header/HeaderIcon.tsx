import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/lyons-bjj-logo2.png";
import { headerHeight } from "../../Constants";

interface IHeaderIconProps {
   title: string;
}

const HeaderIcon: React.FC<IHeaderIconProps> = ({ title }) => {
   return (
      <>
         <Box sx={{ display: "inline-block", overflow: "hidden" }}>
            <img
               style={{
                  maxWidth: headerHeight,
                  borderRadius: "50%",
                  padding: "0.25rem",
               }}
               src={Logo}
               alt="logo"
            />
         </Box>
         <Typography
            variant="h6"
            noWrap
            sx={{
               mx: 2,
               display: "flex",
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
