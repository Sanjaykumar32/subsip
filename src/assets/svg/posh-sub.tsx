import React from "react";
import { styled } from "@mui/material";

const LogoCss = styled("svg", {
  shouldForwardProp: (props) => props !== "color",
})<{ color: string }>(({ color }) => ({
  ".cls-1": {
    fontSize: "110.52px",
    fill: color,
    fontFamily: ["HalisGR-Bold", "Halis GR"].join(","),
    fontWeight: 900,
  },
  ".cls-2, .cls-3, .cls-5": { fontSize: "97.89px" },
  ".cls-2": { letterSpacing: "-0.01em" },
  ".cls-3": { letterSpacing: "0em" },
  ".cls-4": { fontSize: "115.3px" },
}));

export interface PoshSubLogoProps {
  variant?: "light" | "dark";
}

export function PoshSubLogo(props: PoshSubLogoProps) {
  const color = props.variant === "light" ? "#ffffff" : "#343d45";

  return (
    <LogoCss
      color={color}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 136.74"
    >
      <text className="cls-1" transform="translate(0 98)">
        P
        <tspan className="cls-2" x="74.16" y="0">
          O
        </tspan>
        <tspan className="cls-3" x="152.76" y="0">
          SH
        </tspan>
        <tspan className="cls-4" x="290.09" y="0">
          S
        </tspan>
        <tspan className="cls-5" x="362.96" y="0">
          UB
        </tspan>
      </text>
    </LogoCss>
  );
}

PoshSubLogo.defaultProps = {
  variant: "light",
};
