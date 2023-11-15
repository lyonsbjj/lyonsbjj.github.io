import { Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { elevation } from "../Constants";

const Content: React.FC<PropsWithChildren<IContentProps>> = ({
   sx,
   children,
}) => {
   return (
      <Paper
         elevation={elevation}
         sx={{ padding: "2rem", display: "flex", height: "100%", ...sx }}
      >
         {children}
      </Paper>
   );
};

export interface IContentProps {
   sx?: React.CSSProperties;
}

export default Content;
