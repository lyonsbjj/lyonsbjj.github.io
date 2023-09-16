import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import { elevation, maxWidth, themes } from "../../Constants";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import MobileNavMenu from './MobileNavMenu';
import SettingsMenu from './SettingsMenu';

interface HeaderProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
   title: string;
   setTheme: (newTheme: themes) => void
}

const Header: React.FC<HeaderProps> = ({ pages, title, setTheme }) => {
   return (
      <AppBar elevation={elevation}>
         <Container maxWidth={maxWidth}>
            <Toolbar>
               <MobileNavMenu pages={pages} />
               <HeaderIcon title={title} />
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
               <SettingsMenu setTheme={setTheme} />
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
