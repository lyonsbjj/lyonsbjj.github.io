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
import { photos } from '../Content';

const ImageDisplay: React.FC = () => {
   const [fullScreenImageIndex, setFullScreenImageIndex] = useState<
      number | undefined
   >(undefined);
   const small = useMediaQuery(`(max-width:${breakpoints.sm})`);
   const isLargeOrBigger = useMediaQuery(`(min-width:${breakpoints.lg})`);

   const getColumnNumber = (): number => {
      if (small) {
         return 1;
      }

      if (isLargeOrBigger) {
         return 4;
      }

      return 2;
   };

   return (
      <Box>
         <ImageList variant="masonry" cols={getColumnNumber()} gap={8}>
            {photos.map((image, index) => (
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
                  ? photos[fullScreenImageIndex].thumbnail.uri
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
               fullScreenImageIndex === photos.length - 1
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
