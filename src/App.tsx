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
import { localStorageKeys, maxWidth, routes, themes } from "./constants";
import { Route, Routes } from "react-router-dom";
import Photos from "./Pages/Photos";
import Footer from "./Components/Footer";
import Schedule from './Pages/Schedule';
import FAQ from './Pages/FAQ';
import Curriculum from './Pages/Curriculum';

const App: React.FC = () => {
   const medium = useMediaQuery("(max-width:900px)");
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
      { title: "Curriculum", url: routes.curriculum },
      { title: "Photos", url: routes.photos },
      { title: "FAQ", url: routes.faq },
   ];

   return (
      <ThemeProvider theme={darkTheme}>
         <Container maxWidth={maxWidth}>
            <CssBaseline />
            <Header pages={pages} title="Lyons BJJ" setTheme={setTheme} />
            <main
               style={{
                  marginTop: medium ? '4.5rem' : '6.5rem',
                  marginBottom: "3rem",
               }}
            >
               <Routes>
                  <Route path={routes.photos} element={<Photos />} />
                  <Route path={routes.schedule} element={<Schedule />} />
                  <Route path={routes.curriculum} element={<Curriculum />} />
                  <Route path={routes.faq} element={<FAQ />} />
                  <Route path={routes.home} element={<Home />} />
               </Routes>
            </main>
            <Footer />
         </Container>
      </ThemeProvider>
   );
};

export default App;
