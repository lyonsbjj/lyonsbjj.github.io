import {
   Box,
   ImageList,
   ImageListItem,
   ImageListItemBar,
   useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import FullScreenImageModal from "./FullScreenImageModal";
import { breakpoints } from '../Constants';

interface Image {
   thumbnail: {
      uri: string;
      name?: string;
   };
}

const images: Image[] = [
   {
      thumbnail: {
         uri: "/assets/photos/photo1.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo2.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo3.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo4.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo5.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo6.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo7.jpg",
      },
   },
   {
      thumbnail: {
         uri: "/assets/photos/photo8.jpg",
      },
   },
];

const ImageDisplay: React.FC = () => {
   const [fullScreenImageIndex, setFullScreenImageIndex] = useState<
      number | undefined
   >(undefined);
   const small = useMediaQuery(`(max-width:${breakpoints.sm})`);
   const large = useMediaQuery(`(max-width:${breakpoints.lg})`);

   const getColumnNumber = (): number => {
      if (small) {
         return 1;
      }

      if (large) {
         return 4;
      }

      return 2;
   };

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
                     onClick={() => setFullScreenImageIndex(index)}
                  />
                  {!!image.thumbnail.name && (
                     <ImageListItemBar title={image.thumbnail.name} />
                  )}
               </ImageListItem>
            ))}
         </ImageList>
         <FullScreenImageModal
            onClose={() => setFullScreenImageIndex(undefined)}
            imgSource={
               fullScreenImageIndex !== undefined
                  ? images[fullScreenImageIndex].thumbnail.uri
                  : undefined
            }
            onPreviousImageClick={
               fullScreenImageIndex === 0
                  ? undefined
                  : () =>
                       setFullScreenImageIndex((index) => {
                          if (index !== undefined) {
                             return index - 1;
                          }
                       })
            }
            onNextImageClick={
               fullScreenImageIndex === images.length - 1
                  ? undefined
                  : () =>
                       setFullScreenImageIndex((index) => {
                          if (index !== undefined) {
                             return index + 1;
                          }
                       })
            }
         />
      </Box>
   );
};

export default ImageDisplay;
