import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import { elevation, maxWidth, themes } from "../../Constants";
import Link from "@mui/material/Link";
import MobileNavMenu from "./MobileNavMenu";
import SettingsMenu from "./SettingsMenu";
import DesktopNavMenu from "./DesktopNavMenu";

interface HeaderProps {
   pages: ReadonlyArray<{
      title: string;
      url: string;
   }>;
   title: string;
   setTheme: (newTheme: themes) => void;
}

const Header: React.FC<HeaderProps> = ({ pages, title, setTheme }) => {
   return (
      <AppBar elevation={elevation} id="site-header">
         <Container maxWidth={maxWidth}>
            <Toolbar>
               <MobileNavMenu pages={pages} />
               <Box
                  sx={{
                     display: { sm: "none", md: "inline-block", paddingTop: "0.25rem", },
                     overflow: "hidden"
                  }}
               >
                  <HeaderIcon width='5rem' />
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
               <DesktopNavMenu pages={pages} />
               <SettingsMenu setTheme={setTheme} />
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Header;
