import React from "react";
import './style.css';

const FlexComponent: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="flex-component">
        <div className="flex-component__start">
          Start
        </div>
        <div className="flex-component__first">
          middle-flex 1
        </div>
        <div className="flex-component__second">
          middle-flex 2
        </div>
        <div className="flex-component__end">
          End
        </div>
      </div>
    </div>
  )
}

export default FlexComponent;