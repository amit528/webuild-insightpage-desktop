import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i260126762022185TimelineData);
  }, []);

  return (
    <div className="i26012676-2022185 component component-wrapper not-ready">
      <div className="master-button-xUGtXW">
        <div className="button-i2601267620-6Xv77l valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i260126762022185TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012676-2022185",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button8;
