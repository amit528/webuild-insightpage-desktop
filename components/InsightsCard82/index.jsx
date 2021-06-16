import React from "react";
import Button8 from "../Button8";
import "./InsightsCard82.css";

function InsightsCard82(props) {
  const { x1600I26012676202, text37, button8Props } = props;

  return (
    <div className="insights-card">
      <div className="group-69">
        <div className="x1600-i26012676202 valign-text-middle typographyheadlineh2-extrabold-40">
          {x1600I26012676202}
        </div>
        <div className="text-29 valign-text-middle typographybodycaption-14-semi-bold">{text37}</div>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard82;
