import { Box, Drawer, IconButton, Link, ListItem } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HeaderIcon from "./HeaderIcon";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavMenu: React.FC<IMobileNavMenuProps> = ({ pages }) => {
   const location = useLocation();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   return (
      <Box>
         <IconButton
            onClick={() => setIsDrawerOpen(true)}
            title="Navigation Menu"
            size="large"
            edge="start"
            sx={{ display: { xs:"flex", sm: "flex", md: "none" }, mr: 2 }}
            color='inherit'
         >
            <MenuIcon />
         </IconButton>
         <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box sx={{paddingLeft: '1rem', paddingTop: '0.5rem'}}>
               <IconButton
                  onClick={() => setIsDrawerOpen(false)}
                  title="Close Navigation Menu"
                  size="large"
                  edge="start"
               >
                  <CloseIcon />
               </IconButton>
            </Box>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  px: "1rem"
               }}
            >
               <HeaderIcon width="8rem" />
            </Box>
            {pages.map((page) => (
               <ListItem
                  key={page.title}
                  onClick={() => setIsDrawerOpen(false)}
               >
                  {location.pathname === page.url && <ArrowRightIcon />}
                  <Link
                     component={RouterLink}
                     to={page.url}
                     noWrap
                     key={page.title}
                     variant="body2"
                     sx={{
                        p: 1,
                        flexShrink: 0,
                        ...(location.pathname !== page.url
                           ? { paddingLeft: "33px" }
                           : {}),
                     }}
                  >
                     {page.title}
                  </Link>
               </ListItem>
            ))}
         </Drawer>
      </Box>
   );
};

export interface IMobileNavMenuProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
}

export default MobileNavMenu;
