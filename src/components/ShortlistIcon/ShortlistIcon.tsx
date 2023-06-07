import React from "react";

export default function ShortlistIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-testid="ShortlistIcon">
        <path
          d="M5 3H19C20.6569 3 22 4.34315 22 6V20.25L12 17L2 20.25V6C2 4.34315 3.34315 3 5 3Z" stroke="black" stroke-width="2"
          fill="evenodd"
        />
      </svg>
    );
}