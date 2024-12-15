import React from "react";

interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const PaymentIcon: React.FC<SVGComponentProps> = ({ className, ...props }) => (
  <svg
    width={26}
    height={28}
    viewBox="0 0 26 28"
    className={className} // Dynamically use the className prop
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread additional props
  >
    <g clipPath="url(#clip0_248_314)">
      <path
        d="M21.3418 14.6862V10.8536C21.3418 10.3453 21.1501 9.85792 20.8087 9.49854C20.4674 9.13916 20.0044 8.93726 19.5217 8.93726H2.2303C1.74757 8.93726 1.28461 9.13916 0.943264 9.49854C0.601921 9.85792 0.410156 10.3453 0.410156 10.8536V24.2678C0.410156 24.776 0.601921 25.2634 0.943264 25.6228C1.28461 25.9822 1.74757 26.1841 2.2303 26.1841H19.5217C20.0044 26.1841 20.4674 25.9822 20.8087 25.6228C21.1501 25.2634 21.3418 24.776 21.3418 24.2678V19.477M6.48944 4.14648L16.8097 1.31034C16.9256 1.27593 17.047 1.26663 17.1665 1.28298C17.286 1.29933 17.4011 1.341 17.5048 1.40547C17.6086 1.46994 17.6989 1.55588 17.7702 1.6581C17.8416 1.76032 17.8925 1.8767 17.92 2.00021L18.4296 4.14648"
        stroke="#0C091F"
        strokeWidth={1.9883}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.1597 14.6863H18.6093C18.1067 14.6863 17.6992 15.1153 17.6992 15.6444V18.5189C17.6992 19.0481 18.1067 19.4771 18.6093 19.4771H23.1597C23.6623 19.4771 24.0697 19.0481 24.0697 18.5189V15.6444C24.0697 15.1153 23.6623 14.6863 23.1597 14.6863Z"
        stroke="#0C091F"
        strokeWidth={1.9883}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_248_314">
        <rect
          width={25.482}
          height={26.8284}
          fill="white"
          transform="translate(0 0.656738)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default PaymentIcon;
