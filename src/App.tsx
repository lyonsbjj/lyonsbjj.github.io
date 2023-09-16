import {
   Container,
   CssBaseline,
   ThemeProvider,
   createTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { localStorageKeys, maxWidth, routes, themes } from "./Constants";
import { Route, Routes } from "react-router-dom";
import Photos from "./Pages/Photos";
import Footer from "./Components/Footer";

const App: React.FC = () => { 
   const getInitialTheme = (): themes => {
      const savedTheme = localStorage.getItem(localStorageKeys.themePreference);
       
      if (savedTheme) {
         return savedTheme === themes.dark ? themes.dark : themes.light;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches  ? themes.dark : themes.light
   }
   
   const [theme, setTheme] = useState<themes>(getInitialTheme());

   const darkTheme = createTheme({
      palette: {
         mode: theme,
      },
   });

   const pages = [
      { title: "Home", url: routes.home },
      { title: "Photos", url: routes.photos },
      { title: "Curriculum", url: routes.curriculum },
   ];

   return (
      <ThemeProvider theme={darkTheme}>
         <Container maxWidth={maxWidth}>
            <CssBaseline />
            <Header pages={pages} title="Lyons BJJ" setTheme={setTheme}/>
            <main style={{ marginTop: '6rem', marginBottom: "3rem" }}>
               <Routes>
                  <Route path={routes.photos} element={<Photos />} />
                  <Route path={routes.home} element={<Home />} />
               </Routes>
            </main>
            <Footer />
         </Container>
      </ThemeProvider>
   );
};

export default App;
