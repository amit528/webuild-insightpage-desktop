import React from "react";
import Button8 from "../Button8";
import "./InsightsCard122.css";

function InsightsCard122(props) {
  const { x1600I26012680202, propertyTaxI26012, button8Props } = props;

  return (
    <div className="insights-card-4">
      <div className="group-69-4">
        <div className="x1600-i26012680202 valign-text-middle typographyheadlineh2-extrabold-40">
          {x1600I26012680202}
        </div>
        <p className="property-tax-i26012-3 valign-text-middle typographybodycaption-14-semi-bold">
          {propertyTaxI26012}
        </p>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard122;
