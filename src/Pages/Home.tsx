import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextContent from "../Components/TextContent";
import Content from "../Components/Content";

import CarouselSwipper from "../Components/Carousel/CarouselSwipper";
import TestimonialCard from "../Components/Carousel/TestimonialCard";
import { Testimonials, homePageContent, homePageLogo } from '../Content';

const Home: React.FC = () => {
   return (
      <Grid container spacing={2}>
         <Grid item sm={12} md={6} lg={4}>
            <Content>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "2rem",
                     }}
                     src={homePageLogo}
                     alt="logo"
                  />
                  <Typography>{homePageContent.main}</Typography>
               </Box>
            </Content>
         </Grid>
         <Grid item sm={12} md={6} lg={8}>
            <TextContent text={homePageContent.text2} />
         </Grid>
         <Grid item xs={12}>
            <Content sx={{ flexDirection: "column" }}>
               <Typography variant="h4">Testimonials</Typography>
               <CarouselSwipper
                  cards={Testimonials.map((t, i) => (
                     <TestimonialCard testimonial={t} key={i} />
                  ))}
               />
            </Content>
         </Grid>
         <Grid item sm={12}>
            <TextContent text={homePageContent.test3} />
         </Grid>
      </Grid>
   );
};

export default Home;
