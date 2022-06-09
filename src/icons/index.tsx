import React, { SVGProps } from 'react';

interface SVGRProps {
  size?: number;
  color?: string;
}

const Icon = React.memo(
  ({ color, size = 20, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="true"
      {...props}
    >
      <path
        d="M19 13.964C19 18.5 18 19 10 19s-9-1-9-5.036v-3.52C1 8.57 1.575 7.5 4.944 4.79A94.95 94.95 0 0 1 8.46 2.091c.932-.68 2.166-.707 3.1-.03.825.598 1.984 1.48 3.496 2.728C18.5 7.632 19 8.5 19 10.444v3.52Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 20 20"
      />
      <path
        d="M7 16c.375-1.5 0-3 3-3s2.625 1.5 3 3"
        stroke={color || '#0A0C10'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);

Icon.displayName = 'Icon';

export default Icon;
