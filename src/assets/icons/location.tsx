import React from "react";

const LocationIcon = ({ props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      {/* Circular background */}
      <rect
        width="49.9614"
        height="50"
        rx="24.9807"
        fill="white"
        fillOpacity="0.41"
      />
      {/* Symmetrical location marker */}
      <path
        d="M15 16.875C14.0729 16.875 13.1666 16.6001 12.3958 16.085C11.6249 15.5699 11.0241 14.8379 10.6693 13.9813C10.3145 13.1248 10.2217 12.1823 10.4026 11.273C10.5834 10.3637 11.0299 9.5285 11.6854 8.87294C12.341 8.21738 13.1762 7.77094 14.0855 7.59007C14.9948 7.4092 15.9373 7.50203 16.7938 7.85682C17.6504 8.2116 18.3824 8.81241 18.8975 9.58327C19.4126 10.3541 19.6875 11.2604 19.6875 12.1875C19.686 13.4302 19.1917 14.6217 18.3129 15.5004C17.4342 16.3792 16.2427 16.8735 15 16.875ZM15 9.375C14.4437 9.375 13.9 9.53995 13.4375 9.84899C12.9749 10.158 12.6145 10.5973 12.4016 11.1112C12.1887 11.6251 12.133 12.1906 12.2415 12.7362C12.3501 13.2818 12.6179 13.7829 13.0113 14.1762C13.4046 14.5696 13.9057 14.8374 14.4513 14.946C14.9969 15.0545 15.5624 14.9988 16.0763 14.7859C16.5902 14.573 17.0295 14.2126 17.3385 13.75C17.6476 13.2875 17.8125 12.7438 17.8125 12.1875C17.8118 11.4418 17.5152 10.7269 16.9879 10.1996C16.4606 9.6723 15.7457 9.37575 15 9.375Z"
        fill="white"
      />
      <path
        d="M15 28.125L7.09126 18.7978C6.98137 18.6578 6.87261 18.5168 6.76501 18.375C5.41406 16.5954 4.68424 14.4218 4.68751 12.1875C4.68751 9.45246 5.774 6.82943 7.70797 4.89546C9.64194 2.96149 12.265 1.875 15 1.875C17.7351 1.875 20.3581 2.96149 22.292 4.89546C24.226 6.82943 25.3125 9.45246 25.3125 12.1875C25.3158 14.4208 24.5863 16.5934 23.2359 18.3722L23.235 18.375C23.235 18.375 22.9538 18.7444 22.9116 18.7941L15 28.125ZM8.26126 17.2453C8.26314 17.2453 8.48064 17.5341 8.53032 17.5959L15 25.2263L21.4781 17.5856C21.5194 17.5341 21.7388 17.2434 21.7397 17.2425C22.8433 15.7885 23.4397 14.0128 23.4375 12.1875C23.4375 9.94974 22.5486 7.80362 20.9662 6.22129C19.3839 4.63895 17.2378 3.75 15 3.75C12.7622 3.75 10.6161 4.63895 9.0338 6.22129C7.45146 7.80362 6.56251 9.94974 6.56251 12.1875C6.56054 14.014 7.15668 15.7907 8.26126 17.2453Z"
        fill="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
