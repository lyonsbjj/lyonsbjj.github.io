import { Box } from "@mui/material";
import React, { useState } from "react";
import FullScreenImageModal from "../Components/FullScreenImageModal";

const Schedule: React.FC = () => {
   const [showModal, setShowModal] = useState(false);
   const scheduleLink =
      "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/353033948_235072785946683_3436439294754026734_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=9VEn9F2P4xMAX_21sKb&_nc_ht=scontent-ord5-2.xx&oh=00_AfAT-qaQjWtzz0o_UP_759-unQvzyT2ejgquKq7yfOVNVA&oe=650D7879";

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
