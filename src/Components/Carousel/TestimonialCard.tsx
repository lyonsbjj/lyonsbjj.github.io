import {
   Box,
   Card,
   CardContent,
   Divider,
   IconButton,
   Modal,
   Paper,
   Typography,
   useTheme,
} from "@mui/material";
import React from "react";
import { Testimonial, siteNames } from "../../Content/Testimonials";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { elevation } from "../../Constants";
import ReactMarkdown from "react-markdown";
import CloseIcon from "@mui/icons-material/Close";

const TestimonialCard: React.FC<ITestimonialCardProps> = ({ testimonial }) => {
   const [open, setOpen] = React.useState(false);
   const theme = useTheme();

   const content = (props: {
      lineClamp: number | string;
      cursor?: string;
      userSelect?: string;
   }) => (
      <>
         <Box
            sx={{
               p: 1,
               flex: 1,
               display: "flex",
               alignItems: "center",
               userSelect: props.userSelect ?? "auto",
            }}
         >
            <Typography
               onClick={() => setOpen(true)}
               sx={{
                  WebkitLineClamp: props.lineClamp,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  cursor: props.cursor ?? "default",
                  "> p": {
                     marginTop: "0 !important"
                  }
               }}
            >
               <ReactMarkdown children={testimonial.content} />
               {/* {testimonial.content} */}
            </Typography>
         </Box>
         <Divider variant="middle" />
         <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box>
               <Typography
                  sx={{ pt: "1rem", color: theme.palette.primary.main }}
               >
                  {testimonial.name}
               </Typography>
               <Typography
                  sx={{
                     fontStyle: "italic",
                     fontSize: "14px",
                     color: theme.palette.primary.dark,
                  }}
               >
                  {testimonial.role}
               </Typography>
            </Box>
            <IconButton
               sx={{
                  width: "3rem",
                  mt: "1rem",
                  color: theme.palette.primary.main,
               }}
               href={testimonial.link}
               target="_blank"
               title="Open review in new tab"
            >
               {testimonial.siteName === siteNames.google ? (
                  <GoogleIcon />
               ) : (
                  <FacebookIcon />
               )}
            </IconButton>
         </Box>
      </>
   );

   return (
      <>
         <Card
            elevation={elevation}
            // variant="outlined"
            sx={{
               maxInlineSize: "20rem",
               display: "flex",
               flex: 1,
               borderRadius: "5%",
               height: "17rem",
               border: "1px solid",
               borderColor: theme.palette.divider,
            }}
         >
            <CardContent
               sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
               {content({
                  lineClamp: 6,
                  cursor: "pointer",
                  userSelect: "none",
               })}
            </CardContent>
         </Card>
         <Modal open={open} onClose={() => setOpen(false)} disableAutoFocus>
            <Paper
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "1rem",
                  border: "1px solid",
                  borderColor: theme.palette.divider,
                  maxWidth: "30rem",
                  minWidth: "20rem",
               }}
            >
               <Box>
                  <Box sx={{ paddingLeft: "1rem", marginBottom: '-0.5rem' }}>
                     <IconButton
                        onClick={() => setOpen(false)}
                        title="Close Testimonial Modal"
                        size="large"
                        edge="start"
                     >
                        <CloseIcon />
                     </IconButton>
                  </Box>
                  {content({ lineClamp: "unset" })}
               </Box>
            </Paper>
         </Modal>
      </>
   );
};

export interface ITestimonialCardProps {
   testimonial: Testimonial;
}

export default TestimonialCard;
