import React, { useState } from "react";

function ProgressBar() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPositionX, setTooltipPositionX] = useState(0);

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
    updateTooltipPosition(e);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleMouseMove = (e) => {
    updateTooltipPosition(e);
  };

  const updateTooltipPosition = (e) => {
    const { clientX } = e;
    setTooltipPositionX(clientX);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
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
