import {
   Box,
   Divider,
   Grid,
   Link,
   Typography,
   useMediaQuery,
} from "@mui/material";
import React from "react";
import Content from "../Components/Content";
import { ContactInfo } from "../Content";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { breakpoints } from "../Constants";

const Curriculum: React.FC = () => {
   const isMediumOrLarger = useMediaQuery(`(min-width:${breakpoints.md})`);

   return (
      <Grid container spacing={2} sx={{ minHeight: "50rem" }}>
         <Grid item xs={12} sm={12} md={12} lg={4}>
            <Content sx={{ flexDirection: "column" }}>
               <Typography variant="h4">{ContactInfo.title}</Typography>
               <Divider variant="fullWidth" sx={{ my: "1rem" }} />
               <Box>
                  <Box sx={{ display: "flex", padding: "0.5rem" }}>
                     <BusinessIcon
                        fontSize="large"
                        sx={{ marginRight: "1rem" }}
                     />
                     <Link target="_blank" href={ContactInfo.address.href} sx={{ alignSelf: 'center'}}>
                        {ContactInfo.address.text}
                     </Link>
                  </Box>
                  <Box sx={{ display: "flex", padding: "0.5rem" }}>
                     <PhoneIcon fontSize="large" sx={{ marginRight: "1rem" }} />
                     <Link target="_blank" href={ContactInfo.phone.href} sx={{ alignSelf: 'center'}}>
                        {ContactInfo.phone.text}
                     </Link>
                  </Box>
                  <Box sx={{ display: "flex", padding: "0.5rem" }}>
                     <EmailIcon fontSize="large" sx={{ marginRight: "1rem" }} />
                     <Link target="_blank" href={ContactInfo.email.href} sx={{ alignSelf: 'center'}}>
                        {ContactInfo.email.text}
                     </Link>
                  </Box>
               </Box>
            </Content>
         </Grid>
         <Grid item xs={12} sm={12} md={12} lg={8}>
            <Content>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     width: "100%",
                     height: "100%",
                     minHeight: isMediumOrLarger ? "40rem" : "30rem",
                  }}
               >
                  <iframe
                     title="google-maps-location"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.3025706314493!2d-84.9277810226857!3d42.88756260161086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88229d6a24e10b11%3A0xe762097983806d2e!2sLyons%20Brazilian%20Jiu-Jitsu!5e0!3m2!1sen!2sus!4v1695042772737!5m2!1sen!2sus"
                     style={{ border: 0, flexGrow: 1 }}
                     allowFullScreen={true}
                     // loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </Box>
            </Content>
         </Grid>
      </Grid>
   );
};

export default Curriculum;
