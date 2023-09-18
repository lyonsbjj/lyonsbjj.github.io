import { Box, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const DesktopNavMenu: React.FC<IDesktopNavMenuProps> = ({ pages }) => {
   return (
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
         {pages.map((page) => (
            <Link
               component={RouterLink}
               to={page.url}
               color="inherit"
               noWrap
               key={page.title}
               variant="body2"
               sx={{ p: 1, flexShrink: 0 }}
            >
               {page.title}
            </Link>
         ))}
      </Box>
   );
};

export interface IDesktopNavMenuProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
}

export default DesktopNavMenu;
