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
import { localStorageKeys, maxWidth, routes, themes } from "./Constants";
import { Route, Routes } from "react-router-dom";
import Photos from "./Pages/Photos";
import Footer from "./Components/Footer";
import Schedule from './Pages/Schedule';
import FAQ from './Pages/FAQ';
import Curriculum from './Pages/Curriculum';

const App: React.FC = () => {
   const small = useMediaQuery("(max-width:600px)");
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
      { title: "Photos", url: routes.photos },
      { title: "Schedule", url: routes.schedule },
      { title: "Curriculum", url: routes.curriculum },
      { title: "FAQ", url: routes.faq },
   ];

   return (
      <ThemeProvider theme={darkTheme}>
         <Container maxWidth={maxWidth}>
            <CssBaseline />
            <Header pages={pages} title="Lyons BJJ" setTheme={setTheme} />
            <main
               style={{
                  marginTop: small ? '4rem' : '6rem',
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
