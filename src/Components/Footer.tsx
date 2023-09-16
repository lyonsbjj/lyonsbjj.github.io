import { Box, Divider } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
   const beltHeight = '8px';
   return (
      <Box
         sx={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            left: "auto",
            right: "0",
         }}
      >
         <Divider />
         <Divider sx={{ height: beltHeight, backgroundColor: 'white'}} />
         <Divider sx={{ height: beltHeight,backgroundColor: '#3533cc'}} />
         <Divider sx={{ height: beltHeight,backgroundColor: '#7d0082'}} />
         <Divider sx={{ height: beltHeight,backgroundColor: '#633100'}} />
         <Divider sx={{ height: beltHeight,backgroundColor: 'black'}} />
      </Box>
   );
};

export default Footer;
