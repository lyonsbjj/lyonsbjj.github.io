import { Box } from "@mui/material";
import React, { useState } from "react";
import FullScreenImageModal from "../Components/FullScreenImageModal";
import { scheduleLink } from '../Content';

const Schedule: React.FC = () => {
   const [showModal, setShowModal] = useState(false);
   

   return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
         <img
            id="schedule-image"
            alt="schedule"
            src={scheduleLink}
            style={{
               maxWidth: "-webkit-fill-available",
               maxHeight: "85vh",
               cursor: "pointer",
            }}
            onClick={() => setShowModal(true)}
         />
         <FullScreenImageModal
            onClose={() => setShowModal(false)}
            imgSource={showModal ? scheduleLink : undefined}
         />
      </Box>
   );
};

export default Schedule;
