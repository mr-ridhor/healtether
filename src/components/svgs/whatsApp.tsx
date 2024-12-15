import * as React from "react";


interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
const WhatsAppIcon: React.FC<SVGComponentProps> = ({ className, ...props }) => (

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.1805 5.31015C21.048 4.17706 19.7025 3.27917 18.2216 2.66817C16.7406 2.05717 15.1534 1.74512 13.5514 1.75C6.82812 1.75 1.355 7.19578 1.35227 13.8906C1.34929 16.0224 1.91122 18.1169 2.98086 19.9609L1.25 26.25L7.7168 24.5618C9.50684 25.5315 11.5106 26.0391 13.5465 26.0384H13.5514C20.2741 26.0384 25.7467 20.592 25.75 13.8977C25.7541 12.3012 25.4406 10.7197 24.8278 9.24543C24.215 7.77114 23.3151 6.43343 22.1805 5.31015ZM13.5514 23.9892H13.547C11.7322 23.9897 9.95029 23.5041 8.38672 22.5827L8.01648 22.3639L4.17906 23.3658L5.20336 19.6421L4.96219 19.2593C3.9474 17.6527 3.40974 15.7909 3.4118 13.8906C3.4118 8.32726 7.96234 3.80078 13.5552 3.80078C16.2382 3.79599 18.8132 4.85708 20.7139 6.75069C22.6146 8.64429 23.6853 11.2153 23.6905 13.8983C23.6883 19.4622 19.1399 23.9892 13.5514 23.9892ZM19.1126 16.4319C18.808 16.2799 17.3079 15.546 17.0301 15.4448C16.7523 15.3437 16.5472 15.2928 16.3443 15.5969C16.1414 15.9009 15.5568 16.5812 15.3791 16.7863C15.2013 16.9914 15.0236 17.0138 14.719 16.8618C14.4144 16.7098 13.4316 16.3898 12.2673 15.3562C11.3612 14.5518 10.7498 13.5587 10.572 13.2552C10.3943 12.9516 10.5529 12.787 10.7055 12.6361C10.8427 12.4999 11.0101 12.2817 11.1627 12.1045C11.3152 11.9273 11.3661 11.8005 11.4673 11.5981C11.5684 11.3958 11.5181 11.2186 11.4421 11.0671C11.3661 10.9156 10.7563 9.4221 10.5026 8.81453C10.2548 8.22281 10.0038 8.3032 9.8168 8.2939C9.63906 8.28515 9.43398 8.28296 9.23219 8.28296C9.07792 8.28698 8.92614 8.32275 8.78631 8.38806C8.64649 8.45336 8.52163 8.54678 8.41953 8.6625C8.14008 8.96656 7.35258 9.70156 7.35258 11.1934C7.35258 12.6853 8.44633 14.1291 8.59727 14.3314C8.7482 14.5337 10.7465 17.5979 13.8041 18.912C14.3718 19.1552 14.9519 19.3684 15.542 19.5508C16.2721 19.7816 16.9366 19.7493 17.4616 19.6711C18.0473 19.5841 19.2663 18.9372 19.5195 18.2284C19.7727 17.5197 19.7732 16.9127 19.6972 16.7863C19.6212 16.66 19.4177 16.5834 19.1126 16.4319Z"
      fill="#0C091F"
    />
  </svg>
);
export default WhatsAppIcon;