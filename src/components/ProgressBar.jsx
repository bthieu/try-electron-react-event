import React, { useState } from "react";
import { useGesture } from '@use-gesture/react';


function ProgressBar() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPositionX, setTooltipPositionX] = useState(0);

  // const handleMouseEnter = (e) => {
  //   setTooltipVisible(true);
  //   updateTooltipPosition(e);
  // };

  // const handleMouseLeave = () => {
  //   setTooltipVisible(false);
  // };

  // const handleMouseMove = (e) => {
  //   updateTooltipPosition(e);
  // };

  // const updateTooltipPosition = (e) => {
  //   const { clientX } = e;
  //   setTooltipPositionX(clientX);
  // };

  const bind = useGesture({
    onHover: ({ hovering, xy }) => {
      setTooltipVisible(hovering);
      setTooltipPositionX(xy[0]);
    },
    onMouseMove: ({event}) => {
      const {clientX} = event;
      setTooltipPositionX(clientX);
    },
  });

  return (
    <div
      className="tooltip-container"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onMouseMove={handleMouseMove}
      {...bind()}
    >
      <div className="tooltip-content">Hover over me!</div>
      {tooltipVisible && (
        <div
          className="tooltip"
          style={{ position: 'absolute', left: tooltipPositionX }}
        >
          This is a tooltip
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
