import React from 'react';

type Props = {
  className?: string;
};

export const IconPower: React.FC<Props> = (props: Props) => (
  <svg
    width="21"
    height="23"
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.36 5.64C18.6184 6.89879 19.4753 8.50244 19.8223 10.2482C20.1693 11.9939 19.9909 13.8034 19.3096 15.4478C18.6284 17.0921 17.4748 18.4976 15.9948 19.4864C14.5148 20.4752 12.7749 21.0029 10.995 21.0029C9.21509 21.0029 7.47515 20.4752 5.99517 19.4864C4.51519 18.4976 3.36164 17.0921 2.68036 15.4478C1.99909 13.8034 1.82069 11.9939 2.16772 10.2482C2.51475 8.50244 3.37162 6.89879 4.63 5.64M11 1V11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
