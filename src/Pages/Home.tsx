import { Grid } from "@mui/material";
import React from "react";
import TextContent from '../Components/TextContent';

const Home: React.FC = () => {
   return (
      <Grid container spacing={2}>
         <Grid item sm={12} md={6} lg={8}>
            <TextContent>Brazilian jiu-jitsu (BJJ; Portuguese: jiu-jitsu brasileiro [ʒiw ˈʒitsu bɾaziˈlejɾu, ʒu -]) is a self-defence, martial art and combat sport based on grappling, ground fighting, and submission holds. BJJ approaches self-defense by emphasizing taking an opponent to the ground, gaining a dominant position, and using a number of techniques to force them into submission via joint locks or chokeholds.</TextContent>
         </Grid>
         <Grid item sm={12} md={6} lg={4}>
            <TextContent>Brazilian jiu-jitsu was initially developed in 1925 by Brazilian brothers Carlos, Oswaldo, Gastão Jr., O’Brien, and Hélio Gracie, after Carlos was taught jiu-jitsu by a travelling Japanese judoka, Mitsuyo Maeda, in 1917. Later on, the Gracie family developed their own self-defense system, and published Gracie Jiu-Jitsu.</TextContent>
         </Grid>
         <Grid item sm={12}>
            <TextContent>BJJ eventually came to be its own defined combat sport through the innovations, practices, and adaptation of Gracie jiu-jitsu and Judo, and became an essential martial art for modern MMA.

BJJ revolves around the concept that a smaller, weaker person can successfully defend themselves against a bigger, stronger, heavier opponent by using leverage and weight distribution, taking the fight to the ground and using a number of holds and submissions to defeat them. BJJ training can be used for sport grappling and self-defense situations.[3] Sparring, commonly referred to as "rolling" within the BJJ community, and live drilling plays a major role in training and the practitioner's development. BJJ can also be used as a method of promoting physical fitness, building character, and as a way of life.[4][5]</TextContent>
         </Grid>
      </Grid>
   );
};

export default Home;
