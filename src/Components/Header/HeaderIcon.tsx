import React from "react";
import Logo from "../../assets/lyons-bjj-logo2.png";

const HeaderIcon: React.FC<IHeaderIconProps> = ({ width }) => {
   return (
      <img
         style={{
            borderRadius: "50%",
            maxWidth: width,
         }}
         src={Logo}
         alt="logo"
      />
   );
};

export interface IHeaderIconProps {
   width: string;
}

export default HeaderIcon;
