import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TextContent from "../Components/TextContent";
import Content from "../Components/Content";
import Logo from "../assets/lyons-bjj-logo.jpg";
import CarouselStepper from "../Components/Header/Carousel/CarouselStepper";
import { Testimonials } from "../Testimonial";
import TestimonialCard from "../Components/Header/Carousel/TestimonialCard";

const businessStatement = `
We provide top tier instruction in Brazilian Jiu-Jitsu in a safe, caring, and positive environment.
`;

const blurb = `
Come check out your new martial arts option in Portland!!
If you've hear of jiu-jitsu, you might already be aware benefits it has to offer.

- Mobility
- Strength
- Control
- Discipline
- Focus

...and that just the tip of the iceberg!

BJJ is a grappling sport like wrestling and Judo, and Jiu-Jitsu teaches technical movement, position, and control with the ultimate goal being to submit your oponent.
We prioritize safety and longevity over everything else, making this sport surprisingly accessibile.
`;

const newComersBlurb = `
For the newcomers who like to do their homework and be extra prepared, here's a quick rundown of our sport and what we do!

Brazilian Jiu-Jitsu is a grappling art focused on controlling and submitting an opponent using pressure and leverage.
Our program is not focused on strikes (punches/kicks), though we do often include details for self defense or bullies.
Our classes and curriculum are similar in style to wrestling and judo, so if you have experience with either, you'll feel that familiarity.
BJJ is one of the safest combat sports AND one of the most effective for self defense and MMA.
If you've never tried a combat sport, you've chosen the perfect program to get your feet wet- We teach in a very safe and accessible way, and have something to offer for all skill levels! 

A typical class goes something like this:

- Quick Warmup (dialing in our focus/discipline as well for kids)
(-kids class includes a weekly "mat chat" to talk about character)
- Demonstrate and drill the technique(s)
- Live training
- Sometimes a quick game to finish out class

The majority of our live training is situational "mini-rounds" where one person is in the position we worked on that day and their opponent is now resisting and fighting back to see if they can win in that position instead.

Then we often follow with "rolling", our version of sparring.
This is basically a friendly wrestling match where we get to try to control our opponent and practice ANY of the positions or techniques that we know for a set amount of time.
In positions we DON'T know, we are encouraged (and reminded) to be playful and explore new moves, escapes, or positions.
Live training in our gym is NOT to see if we can defeat our teammates- we are all on a different journey.
Live training is to help us gauge our progress against OURSELVES, and see how our technique is feeling/working.

That's the secret sauce to BJJ... live training allows us to test our technique in an absolute sort of way.
I never have to wonder "what would this eye gouge be like if I did it on a human?", instead I get to try my techniques (not eye gouges lol) on resisting humans every single class.
The type of confidence that I've developed over the years from training this way can only be described like breathing...
It's like oxygen and I cannot believe how suffocated I used to feel all the time.
Fear is a powerful force these days and I am endlessly proud that I get to help people develop skills that allow them to be calm and present.

Even if you have had the opportunity to step on a BJJ mat before, I guarantee you will not regret coming to check us out!
Schedule's posted below, and you are welcome to drop by any time!

Feel free to comment or message me with questions!`;

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
                     src={Logo}
                     alt="logo"
                  />
                  <Typography>{businessStatement}</Typography>
               </Box>
            </Content>
         </Grid>
         <Grid item sm={12} md={6} lg={8}>
            <TextContent text={blurb} />
         </Grid>
         <Grid item xs={12}>
            <Content sx={{ flexDirection: "column" }}>
               <Typography variant="h4">Testimonials</Typography>
               <CarouselStepper
                  cards={Testimonials.map((t, i) => (
                     <TestimonialCard testimonial={t} key={i} />
                  ))}
               />
               {/* <TestimonialCard testimonial={Testimonials[0]} /> */}
            </Content>
         </Grid>
         <Grid item sm={12}>
            <TextContent text={newComersBlurb} />G
         </Grid>
      </Grid>
   );
};

export default Home;
