import React, { PropsWithChildren } from "react";
import Content from "./Content";
import { Typography } from "@mui/material";

const TextContent: React.FC<PropsWithChildren> = ({ children }) => {
   return (
      <Content>
         <Typography variant="body1">{children}</Typography>
      </Content>
   );
};

export default TextContent;
