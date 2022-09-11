import React from "react";

const Title = ({ text }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg">
        {/* <!-- filterUnits is required to prevent clipping the blur outside the viewBox --> */}

        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
          {/* <!-- We only want horizontal blurring. x: 100, y: 0 --> */}

          <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
        </filter>
      </svg>

      {/* <!-- We use a custom attribute to set the text that the pseudo element should display and blur. In this case, we use the first character of the word. --> */}

      <span filter-content="S">{text}</span>
    </>
  );
};

export default Title;
