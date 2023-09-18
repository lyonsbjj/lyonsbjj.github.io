import {
   Box,
   ImageList,
   ImageListItem,
   ImageListItemBar,
   useMediaQuery,
} from "@mui/material";
import React from "react";

interface Image {
   thumbnail: {
      uri: string;
      name?: string;
   };
}

const images: Image[] = [
   {
      thumbnail: {
         uri: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/352494183_238825822238046_930578791629914522_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=d6m63cMVC1IAX-8Kl8h&_nc_ht=scontent-ord5-1.xx&oh=00_AfAE03wX7ihcF4o6YUvcGioBRCFhKi2zHFjJKAZ-H3UfiQ&oe=650DEA75",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/375858032_283849461069015_2719873419760268979_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=4P6Cvz1hD9wAX9mM0i1&_nc_ht=scontent-ord5-2.xx&oh=00_AfA67vDANCuMEu4sz0BH-z-GvNWTuualY5dHbFdeNeF5sQ&oe=650DCE55",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/362298710_261025063351455_1552751918041987004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=LfU8tAA15UoAX8oEmi8&_nc_ht=scontent-ord5-2.xx&oh=00_AfBYnon-Y1EinsS0vcgHIHkbnhfSmOBbP3mXqeoLzRONSg&oe=650E0202",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/352713793_238437292276899_2783470173549439343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=4fIT_PxS95cAX8Zi45W&_nc_ht=scontent-ord5-2.xx&oh=00_AfBAyaISnqfbcAEDHqDTSmtfm-bpSOQybacb8k63Xx2vEQ&oe=650D2EA0",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/353055493_238437238943571_4074894969683806361_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=LZIiloKx3oEAX9qQAvL&_nc_ht=scontent-ord5-2.xx&oh=00_AfDFLPpv1QHtOf6a4HhJoNcQH8aUc2oJtD0PSq9YNQnEKA&oe=650D6E84",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/352523257_6271260842929795_2959790090676808907_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5614bc&_nc_ohc=eJfp90EE-VYAX_Ol6gi&_nc_oc=AQnEIbi_50EYQNBqS5BKZPQMZaCEYtccjM8kAAOjl1Gf3R96J9ugJQoyrOYDQ7hhThk&_nc_ht=scontent-ord5-2.xx&oh=00_AfDWTINsUCJtxyf6gGrjVKvXKaBP1QABh9oSobINdrkBig&oe=650CB30A",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/347233033_198013793150343_5885461333045493659_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=puLI7Ejuby8AX9GLxU4&_nc_oc=AQl9IaMqpiFjmhcFlqVL9wT68BimuYU1ZVFe-wgUGNhfg0RM8SCjlM2aqAO0FWXNYpQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfCHgXVT4W0lFQ9hbYZqk3fLAwGqQs6ncnPaTxueOdY7OA&oe=650D23B5",
      },
   },
   {
      thumbnail: {
         uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/335123048_581665440559111_6803252159337314221_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=iAmdXnxenWcAX_Yi1nR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBD1-oWPV0GXKbE35fhNp9FwWmAA38J3ckLfqEGPZ4rGg&oe=650CDAA7",
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
         <ImageList variant="quilted" cols={getColumnNumber()} gap={8}>
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
