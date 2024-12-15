import React from "react";

interface TrandingUpProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const TrandingUp: React.FC<TrandingUpProps> = ({ className, ...props }) => (
  <svg
    width={26}
    height={27}
    viewBox="0 0 26 27"
    className={className} // Correctly apply the className prop
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread additional props
  >
    <g clipPath="url(#clip0_248_320)">
      <path
        d="M24.4154 7.47046L14.1237 17.7621L8.70703 12.3455L0.582031 20.4705"
        stroke="#0C091F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.918 7.47046H24.418V13.9705"
        stroke="#0C091F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_248_320">
        <rect
          width={26}
          height={26}
          fill="white"
          transform="translate(0 0.485107)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default TrandingUp;
