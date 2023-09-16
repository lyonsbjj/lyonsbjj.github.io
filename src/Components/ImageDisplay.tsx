import {
   Box,
   ImageList,
   ImageListItem,
   ImageListItemBar,
   useMediaQuery,
} from "@mui/material";
import React from "react";

const images = [
   {
      thumbnail: {
         uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
      },
   },
   {
      thumbnail: {
         uri: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      },
   },
   {
      thumbnail: {
         uri: "https://img.freepik.com/free-photo/view-new-york-city-manhattan-midtown-dusk-with-skyscrapers-illuminated-east-river_268835-754.jpg",
      },
   },
   {
      thumbnail: {
         uri: "https://img.freepik.com/free-photo/view-new-york-city-manhattan-midtown-dusk-with-skyscrapers-illuminated-east-river_268835-754.jpg",
      },
   },
   {
      thumbnail: {
         uri: "https://cdn.pixabay.com/photo/2017/08/01/20/06/city-2567670_640.jpg",
         name: "nature",
      },
   },
   {
      thumbnail: {
         uri: "https://media.gettyimages.com/id/1207663571/photo/empty-pavement-with-modern-architecture.jpg?s=612x612&w=gi&k=20&c=HOXes9ocKgFP2JGi8XGHz2SRs3Rrvmyu2Q6UQ8e5bI4=",
         name: "cats",
      },
   },
   {
      thumbnail: {
         uri: "https://media.istockphoto.com/id/615398376/photo/new-york-city-nyc-usa.jpg?s=612x612&w=0&k=20&c=rlrsrt4jbORPDSOW5df06Ik_X_5iQo1rYQd53xSs4nw=",
         name: "cats",
      },
   },
   {
      thumbnail: {
         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhMWfMxhTNT9dDN2qpGNUJtQgTURtpCJr6w&usqp=CAU",
         name: "cats",
      },
   },
];

const ImageDisplay: React.FC = () => {
   const small = useMediaQuery("(max-width:600px)");
   const large = useMediaQuery("(min-width:1200px)");

   const getColumnNumber = (): number => {
      if (small) {
         return 1;
      }

      if (large) {
         return 4;
      }

      return 2;
   };

   // todo - figure out better solution for image full screen 

   return (
      <Box>
         <ImageList variant="masonry" cols={getColumnNumber()} gap={8}>
            {images.map((image, index) => (
               <ImageListItem key={index}>
                  <img
                     style={{ cursor: "pointer" }}
                     src={image.thumbnail.uri}
                     alt="BJJ"
                     id={`image-${index}`}
                     onClick={() =>
                        document
                           .getElementById(`image-${index}`)
                           ?.requestFullscreen()
                     }
                  />
                  {!!image.thumbnail.name && (
                     <ImageListItemBar title={image.thumbnail.name} />
                  )}
               </ImageListItem>
            ))}
         </ImageList>
      </Box>
   );
};

export default ImageDisplay;
