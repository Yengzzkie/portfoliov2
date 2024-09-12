import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Circle comes first, so it's behind the letter M */}
        <circle
          cx="39" // X-coordinate of the center
          cy="48" // Y-coordinate of the center
          r="39" // Radius of the circle
          stroke="currentColor"
          strokeWidth="5"
          fill="var(--navy)" // Keeps only the stroke (no fill)
        />
        {/* The "M" path is now drawn after the circle, so it appears on top */}
        <path
          d="M28 61 L28 30.3 L33 30.3 L39 46 L45 30.3 L50 30.3 L50 61 L45 61 L45 38.5 L39 54 L33 38.5 L33 61 Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
