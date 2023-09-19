import { Box, Fade, IconButton, Modal, useMediaQuery } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const FullScreenImageModal: React.FC<IFullScreenImageModalProps> = ({
   onClose,
   imgSource,
   onNextImageClick,
   onPreviousImageClick,
}) => {
   const small = useMediaQuery("(max-width:600px)");

   return (
      <Modal open={!!imgSource} onClose={onClose}>
         <>
            <IconButton
               onClick={onClose}
               title="Close full screen image"
               size="large"
               sx={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
               }}
               color="inherit"
            >
               <CloseIcon sx={{ scale: "1.75" }} />
            </IconButton>
            {!!onPreviousImageClick && (
               <IconButton
                  onClick={onPreviousImageClick}
                  title="view previous image"
                  size="large"
                  sx={{
                     position: "absolute",
                     ...(small
                        ? { bottom: "3rem", left: "25%" }
                        : { top: "50%", left: "1rem" })
                  }}
                  color="inherit"
               >
                  <NavigateBeforeIcon sx={{ scale: "2.5" }} />
               </IconButton>
            )}
            {!!onNextImageClick && (
               <IconButton
                  onClick={onNextImageClick}
                  title="view next image"
                  size="large"
                  sx={{
                     position: "absolute",
                     ...(small
                        ? { bottom: "3rem", right: "25%" }
                        : { top: "50%", right: "1rem" })
                  }}
                  color="inherit"
               >
                  <NavigateNextIcon sx={{ scale: "2.5" }} />
               </IconButton>
            )}
            <Fade in={!!imgSource}>
               <Box
                  sx={{
                     position: "absolute",
                     display: "flex",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                     bgcolor: "background.paper",
                     border: "2px solid #000",
                     boxShadow: 24,
                  }}
               >
                  <img
                     src={imgSource}
                     alt="BJJ fullscreen"
                     style={{
                        maxHeight: "85vh",
                        maxWidth: "85vw",
                        bottom: 0,
                        left: 0,
                        margin: "auto",
                        overflow: "auto",
                        right: 0,
                        top: 0,
                        objectFit: "contain",
                     }}
                  />
               </Box>
            </Fade>
         </>
      </Modal>
   );
};

export interface IFullScreenImageModalProps {
   onClose: () => void;
   imgSource: string | undefined;
   onNextImageClick?: () => void;
   onPreviousImageClick?: () => void;
}

export default FullScreenImageModal;
