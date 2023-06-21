import React from 'react';

interface IconProps {
    className?: string;
    fill?: string;
    stroke?: string;
    onClick?: (...v: Array<unknown>) => unknown;
}

declare function ShortlistIcon({ className, fill, stroke, onClick }: IconProps): React.JSX.Element;

declare function ChainlinkIcon({ className, fill, onClick }: IconProps): React.JSX.Element;

export { ChainlinkIcon, ShortlistIcon };
