import React from "react";
import Content from "./Content";
import { Typography } from "@mui/material";
import ReactMarkdown from 'react-markdown';

const TextContent: React.FC<ITextContentProps> = ({ text }) => {
   return (
      <Content>
         <Typography variant="body1" component='div'>
            <ReactMarkdown children={text} />
         </Typography>
      </Content>
   );
};

export interface ITextContentProps {
   text: string;
}

export default TextContent;
