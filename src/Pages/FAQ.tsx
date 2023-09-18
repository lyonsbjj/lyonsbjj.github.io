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

interface FaqQuestions {
   question: string;
   answer: string;
   additionalContent?: React.ReactNode;
}

const FAQ: React.FC = () => {
   const questions: FaqQuestions[] = [
      {
         question: "When should I get there?",
         answer: `Show up 5-10 mins early. You are ALWAYS welcome to join class late, but that's unnecessary pressure on day one. We don't need any special paperwork for you to try to try class, but we love to warm up beforehand and get to chat with the group.`,
      },
      {
         question: "Where is it?",
         answer: `Our address is 7575 Lyons Rd. Portland, MI 48875.

Park by the gym and be respectful of our wonderful neighbors! YES this is also a residential address (blue/gray house with a three-car garage is ours) and you'll be able to drive down our driveway and around our fence to park in front of the gym. If that area is full, you are able to drive around the LEFT side of the gym to park in the back, or simply park in the driveway. If you see the neighbors big dog "Oakley" out and about, just know he has an E-fence and is stuck in his yard.`,
         additionalContent: (
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
               <iframe
                  title="google-maps-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.3025706314493!2d-84.9277810226857!3d42.88756260161086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88229d6a24e10b11%3A0xe762097983806d2e!2sLyons%20Brazilian%20Jiu-Jitsu!5e0!3m2!1sen!2sus!4v1695042772737!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </Box>
         ),
      },
      {
         question: "What should I wear?",
         answer: `Until you have a gi, or proper no-gi attire, wear soft/athletic clothing. Jewelry/buckles/zippers all have the potential to scratch or get caught when grappling. Super loose clothing is also at greater risk of getting snagged and torn. We do have a changing room.`,
      },
      {
         question: "Do I wear a belt?",
         answer: `If you have received a Brazilian Jiu-Jitsu belt from a gym in the past, wear it! If you have not, don't worry- you'll earn those on the mat!`,
      },
      {
         question: "Anything special I need?",
         answer: `Until our restroom is finished, be sure to use the bathroom before class! A quick hygiene check is a great idea too!`,
      },
   ];

   return (
      <Box sx={{ paddingTop: "0.5rem" }}>
         {questions.map((question, index) => (
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
