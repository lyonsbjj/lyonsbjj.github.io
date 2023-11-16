import React from "react";
import { headerLogo } from '../../Content';

const HeaderIcon: React.FC<IHeaderIconProps> = ({ width }) => {
   return (
      <img
         style={{
            borderRadius: "50%",
            maxWidth: width,
         }}
         src={headerLogo}
         alt="logo"
      />
   );
};

export interface IHeaderIconProps {
   width: string;
}

export default HeaderIcon;
