import { IconProps } from "./icons";

export const SearchIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
  </svg>
);

export const UserIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4039 2.69131C10.9617 4.30221 10.4372 6.08958 9.09741 7.14366C11.3891 8.05315 12.9917 10.1532 13.2641 12.6037C13.3031 12.9677 13.0412 13.2951 12.6774 13.337H12.6041C12.2627 13.3391 11.975 13.083 11.9374 12.7437C11.6343 10.0455 9.35256 8.00568 6.63741 8.00568C3.92227 8.00568 1.6405 10.0455 1.33741 12.7437C1.29691 13.1119 0.965603 13.3775 0.597413 13.337C0.229223 13.2965 -0.0364214 12.9652 0.00407945 12.597C0.275157 10.1537 1.86881 8.05789 4.15075 7.14366C2.81098 6.08958 2.28648 4.30221 2.84422 2.69131C3.40196 1.08041 4.91936 0 6.62408 0C8.3288 0 9.8462 1.08041 10.4039 2.69131ZM3.95741 4.00366C3.95741 5.47642 5.15132 6.67033 6.62408 6.67033C7.33132 6.67033 8.0096 6.38938 8.5097 5.88928C9.00979 5.38918 9.29075 4.71091 9.29075 4.00366C9.29075 2.5309 8.09684 1.337 6.62408 1.337C5.15132 1.337 3.95741 2.5309 3.95741 4.00366Z" fill="currentColor"/>
  </svg>
);

export const HeartIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <g clipPath="url(#clip0_45_390)">
    <path d="M10.5844 21.9469L10.4672 21.8391L2.25469 14.2125C0.815625 12.8766 0 11.0016 0 9.0375V8.88281C0 5.58281 2.34375 2.75156 5.5875 2.13281C7.43437 1.77656 9.32344 2.20312 10.8281 3.2625C11.25 3.5625 11.6438 3.90938 12 4.30781C12.1969 4.08281 12.4078 3.87656 12.6328 3.68438C12.8062 3.53437 12.9844 3.39375 13.1719 3.2625C14.6766 2.20312 16.5656 1.77656 18.4125 2.12812C21.6562 2.74687 24 5.58281 24 8.88281V9.0375C24 11.0016 23.1844 12.8766 21.7453 14.2125L13.5328 21.8391L13.4156 21.9469C13.0312 22.3031 12.525 22.5047 12 22.5047C11.475 22.5047 10.9688 22.3078 10.5844 21.9469ZM11.2078 6.79688C11.1891 6.78281 11.175 6.76406 11.1609 6.74531L10.3266 5.80781L10.3219 5.80312C9.23906 4.58906 7.60313 4.03594 6.00938 4.34062C3.825 4.75781 2.25 6.66094 2.25 8.88281V9.0375C2.25 10.3734 2.80781 11.6531 3.7875 12.5625L12 20.1891L20.2125 12.5625C21.1924 11.6521 21.7495 10.3751 21.75 9.0375V8.88281C21.75 6.66563 20.175 4.75781 17.9953 4.34062C16.4016 4.03594 14.7609 4.59375 13.6828 5.80312L13.6781 5.80781L13.6734 5.8125L12.8391 6.75C12.825 6.76875 12.8063 6.78281 12.7922 6.80156C12.5813 7.0125 12.2953 7.12969 12 7.12969C11.7047 7.12969 11.4187 7.0125 11.2078 6.80156" fill="currentColor"/>
    </g>
    <defs>
    <clipPath id="clip0_45_390">
    <rect width="24" height="24" fill="currentColor"/>
    </clipPath>
    </defs>
  </svg>
);

export const TrashIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronRightIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronLeftIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronUpIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = ({ size = 24, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);