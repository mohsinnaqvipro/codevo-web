import React from "react";

const PhoneIcon = ({ props }: any) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="icon">
        <rect
          id="bg"
          width="49.9614"
          height="50"
          rx="24.9807"
          fill="white"
          fillOpacity="0.41"
        />
        <path
          id="Icon"
          d="M15 17.2222C15 15.9949 15.9949 15 17.2222 15H20.8658C21.3441 15 21.7687 15.306 21.9199 15.7597L23.5842 20.7525C23.759 21.277 23.5215 21.8503 23.027 22.0976L20.5189 23.3517C21.7436 26.068 23.932 28.2564 26.6483 29.4811L27.9024 26.973C28.1497 26.4785 28.723 26.241 29.2475 26.4158L34.2403 28.0801C34.694 28.2313 35 28.6559 35 29.1342V32.7778C35 34.0051 34.0051 35 32.7778 35H31.6667C22.4619 35 15 27.5381 15 18.3333V17.2222Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PhoneIcon;
