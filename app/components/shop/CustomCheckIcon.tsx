import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CustomCheckIcon = ({ size = 24, color = "#01AB31" }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Green Circle Background */}
      <Circle cx="12" cy="12" r="12" fill={color} />

      {/* White Check Mark */}
      <Path
        d="M7 12l3 3 6-6"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CustomCheckIcon;
