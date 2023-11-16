import React, { useEffect, useState } from "react";
import { Box, styled, useMediaQuery } from "@mui/material";
import { breakpoints } from "../../Constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const CarouselSwipper: React.FC<ICarouselSwipperProps> = ({ cards, sx }) => {
   const large = useMediaQuery(`(max-width:${breakpoints.lg})`);
   const medium = useMediaQuery(`(max-width:${breakpoints.md})`);
   const small = useMediaQuery(`(max-width:${breakpoints.sm})`);
   const [windowResizing, setWindowResizing] = useState(false);

   const StyledSwiper = styled(Swiper)(({ theme }) => ({
      paddingTop: "1rem !important",
      paddingBottom: "2rem !important",
      ".swiper-button-next": {
         width: "5rem",
         height: "5rem",
         ":hover": {
            borderRadius: "50%",
            backgroundColor: theme.palette.action.hover,
         },
      },
      ".swiper-button-prev": {
         width: "5rem",
         height: "5rem",
         ":hover": {
            borderRadius: "50%",
            backgroundColor: theme.palette.action.hover,
         },
      },
      ...sx,
   }));

   const StyledSwiperSlide = styled(SwiperSlide)({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5%",
      overflow: "hidden",
      paddingTop: "0.25rem",
      paddingBottom: "0.5rem",
   });

   // There is a bug with swiper where if looping is enabled, it errors out on window resize (at certain breakpoints)
   useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleResize = () => {
         clearTimeout(timeout);

         setWindowResizing(true);

         timeout = setTimeout(() => {
            setWindowResizing(false);
         }, 200);
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <Box>
         <StyledSwiper
            navigation={!small}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={small ? 1 : medium ? 2 : large ? 3 : 4}
            spaceBetween={30}
            centeredSlides={true}
            loop={!windowResizing}
            resistanceRatio={0.2}
            grabCursor={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: small,
               pauseOnMouseEnter: true
            }}
            pagination={{
               // dynamicBullets: true,
               enabled: true,
               clickable: true,
            }}
         >
            {cards?.map((card, i) => (
               <StyledSwiperSlide key={i}>{card}</StyledSwiperSlide>
            ))}
         </StyledSwiper>
      </Box>
   );
};

export interface ICarouselSwipperProps {
   cards?: React.ReactNode[];
   sx?: React.CSSProperties;
}

export default CarouselSwipper;
