import {
   Container,
   CssBaseline,
   ThemeProvider,
   createTheme,
   useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { breakpoints, localStorageKeys, maxWidth, routes, themes } from "./Constants";
import { Route, Routes, useLocation } from "react-router-dom";
import Photos from "./Pages/Photos";
import Schedule from "./Pages/Schedule";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
   const location = useLocation();
   const medium = useMediaQuery(`(max-width:${breakpoints.md})`);
   const getInitialTheme = (): themes => {
      const savedTheme = localStorage.getItem(localStorageKeys.themePreference);

      if (savedTheme) {
         return savedTheme === themes.dark ? themes.dark : themes.light;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
         ? themes.dark
         : themes.light;
   };

   const [theme, setTheme] = useState<themes>(getInitialTheme());

   const darkTheme = createTheme({
      palette: {
         mode: theme,
      },
   });

   const pages = [
      { title: "Home", url: routes.home },
      { title: "Schedule", url: routes.schedule },
      { title: "Photos", url: routes.photos },
      { title: "FAQ", url: routes.faq },
      { title: "Contact", url: routes.contact }
   ];

   React.useEffect(() => {
      window.gtag("event", "page_view", {
         page_path: location.pathname,
         page_search: location.search,
         page_hash: location.hash,
         page_title: location.pathname,
      });
   }, [location]);

   return (
      <ThemeProvider theme={darkTheme}>
         <Container maxWidth={maxWidth}>
            <CssBaseline />
            <Header pages={pages} title="Lyons BJJ" setTheme={setTheme} />
            <main
               style={{
                  marginTop: medium ? "4.5rem" : "6.5rem",
                  marginBottom: "3rem",
               }}
            >
               <Routes>
                  <Route path={routes.photos} element={<Photos />} />
                  <Route path={routes.schedule} element={<Schedule />} />
                  <Route path={routes.contact} element={<Contact />} />
                  <Route path={routes.faq} element={<FAQ />} />
                  <Route path={routes.home} element={<Home />} />
               </Routes>
            </main>
            {/* <Footer /> */}
         </Container>
      </ThemeProvider>
   );
};

export default App;
