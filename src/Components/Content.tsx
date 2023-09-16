import { Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { elevation } from '../Constants';

const Content: React.FC<PropsWithChildren<IContentProps>> = ({children}) => {
   return <Paper elevation={elevation} sx={{padding: '2rem', display: 'flex', height: '100%'}}>{children}</Paper>;
};

export interface IContentProps {}

export default Content;
