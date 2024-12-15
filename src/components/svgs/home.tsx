import * as React from "react";


interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const HomeIcon: React.FC<SVGComponentProps> = ({ className, ...props }) => (
  <svg
  className={className}
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 14L13.5 2L25.5 14"
      stroke="#0C091F"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16797 11.332V20.6654C4.16797 21.3726 4.44892 22.0509 4.94902 22.551C5.44911 23.0511 6.12739 23.332 6.83463 23.332H20.168C20.8752 23.332 21.5535 23.0511 22.0536 22.551C22.5537 22.0509 22.8346 21.3726 22.8346 20.6654V11.332"
      stroke="#0C091F"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default HomeIcon;
