import React from "react";
import { IconProps } from "../../types";

export default function ChainlinkIcon({ className, fill, onClick }: IconProps) {
    return (
        <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={onClick}>
            <path
                d="M19.718 4.287a4.367 4.367 0 0 0-6.191 0L9.951 7.873a4.404 4.404 0 0 0 0 6.213 1.006 1.006 0 0 0 1.427 0 1.014 1.014 0 0 0 0-1.431 2.375 2.375 0 0 1 0-3.351l3.574-3.586a2.355 2.355 0 0 1 3.339 0 2.375 2.375 0 0 1 0 3.35l-1.137 1.141a1.014 1.014 0 0 0 0 1.431 1.006 1.006 0 0 0 1.426 0l1.137-1.14a4.404 4.404 0 0 0 0-6.213Z"
                fill="#ffffff"
            />
            <path d="M4.282 19.713a4.368 4.368 0 0 0 6.192 0l3.574-3.586a4.404 4.404 0 0 0 0-6.213 1.006 1.006 0 0 0-1.426 0 1.014 1.014 0 0 0 0 1.431 2.375 2.375 0 0 1 0 3.351l-3.574 3.586a2.355 2.355 0 0 1-3.34 0 2.375 2.375 0 0 1 0-3.35l1.137-1.141a1.014 1.014 0 0 0 0-1.431 1.006 1.006 0 0 0-1.426 0L4.282 13.5a4.404 4.404 0 0 0 0 6.213Z"
                fill="#ffffff"

            />
        </svg>
    );
}