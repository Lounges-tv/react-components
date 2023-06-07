import React from "react";
import { IconProps } from "../../types";

export default function ShortlistIcon({ className, fill, stroke }: IconProps) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
      <path
        d="M5.4 10.2 1 14V2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v11.9l-4.4-3.7-.6-.5-.6.5Z"
        fill={fill || 'transparent'}
        stroke={stroke || "#fff"}
        stroke-width="2"
      />
    </svg>
  );
}
