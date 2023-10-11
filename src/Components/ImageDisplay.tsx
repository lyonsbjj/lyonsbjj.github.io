import {
   Box,
   ImageList,
   ImageListItem,
   ImageListItemBar,
   useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import FullScreenImageModal from "./FullScreenImageModal";
import { imagePaths } from "../constants/imagePaths";

interface Image {
   thumbnail: {
      uri: string;
      name?: string;
   };
}

const images: Image[] = imagePaths.map((path) => ({
   thumbnail: {
      uri: path,
   },
}));

const ImageDisplay: React.FC = () => {
   const [fullScreenImageIndex, setFullScreenImageIndex] = useState<
      number | undefined
   >(undefined);
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
