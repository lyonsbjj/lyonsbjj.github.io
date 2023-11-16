import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { faqQuestions } from '../Content';

export const FAQ: React.FC = () => {

   return (
      <Box>
         {faqQuestions.map((question, index) => (
            <Accordion key={index}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>{question.question}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <ReactMarkdown children={question.answer} />
                  {question.additionalContent}
               </AccordionDetails>
            </Accordion>
         ))}
      </Box>
   );
};

export default FAQ;
