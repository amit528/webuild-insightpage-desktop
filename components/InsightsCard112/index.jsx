import React from "react";
import Button8 from "../Button8";
import "./InsightsCard112.css";

function InsightsCard112(props) {
  const { x1600I26012679202, propertyTaxI26012, button8Props } = props;

  return (
    <div className="insights-card-3">
      <div className="group-69-3">
        <div className="x1600-i26012679202 valign-text-middle typographyheadlineh2-extrabold-40">
          {x1600I26012679202}
        </div>
        <div className="property-tax-i26012-2 valign-text-middle typographybodycaption-14-semi-bold">
          {propertyTaxI26012}
        </div>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard112;
