import React from "react";
import HeaderWithBackground from "../HeaderWithBackground";
import InsightsCard82 from "../InsightsCard82";
import InsightsCard92 from "../InsightsCard92";
import InsightsCard102 from "../InsightsCard102";
import InsightsCard112 from "../InsightsCard112";
import InsightsCard122 from "../InsightsCard122";
import InsightsCard132 from "../InsightsCard132";
import InsightsCard142 from "../InsightsCard142";
import Footer32 from "../Footer32";
import "./X06InsightsPageDesktop.css";

function X06InsightsPageDesktop(props) {
  const {
    insights,
    rectangle85,
    text83,
    headerWithBackgroundProps,
    insightsCard82Props,
    insightsCard92Props,
    insightsCard102Props,
    insightsCard112Props,
    insightsCard82Props2,
    insightsCard92Props2,
    insightsCard102Props2,
    footer32Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x06-insights-page-desktop screen">
        <HeaderWithBackground {...headerWithBackgroundProps} />
        <div className="frame-1570">
          <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{insights}</h1>
          <img className="rectangle-85" src={rectangle85} />
          <p className="text-28 typographybody16-regular">{text83}</p>
          <div className="flex-row">
            <InsightsCard82
              x1600I26012676202={insightsCard82Props.x1600I26012676202}
              text37={insightsCard82Props.text37}
              button8Props={insightsCard82Props.button8Props}
            />
            <InsightsCard92
              x1600I26012677202={insightsCard92Props.x1600I26012677202}
              propertyTaxI26012={insightsCard92Props.propertyTaxI26012}
              button8Props={insightsCard92Props.button8Props}
            />
            <InsightsCard102
              x1600I26012678202={insightsCard102Props.x1600I26012678202}
              propertyTaxI26012={insightsCard102Props.propertyTaxI26012}
              button8Props={insightsCard102Props.button8Props}
            />
            <InsightsCard112
              x1600I26012679202={insightsCard112Props.x1600I26012679202}
              propertyTaxI26012={insightsCard112Props.propertyTaxI26012}
              button8Props={insightsCard112Props.button8Props}
            />
          </div>
          <div className="flex-row-1">
            <InsightsCard122
              x1600I26012680202={insightsCard82Props2.x1600I26012680202}
              propertyTaxI26012={insightsCard82Props2.propertyTaxI26012}
              button8Props={insightsCard82Props2.button8Props}
            />
            <InsightsCard132
              x1600I26012681202={insightsCard92Props2.x1600I26012681202}
              propertyTaxI26012={insightsCard92Props2.propertyTaxI26012}
              button8Props={insightsCard92Props2.button8Props}
            />
            <InsightsCard142
              x1600I26012682202={insightsCard102Props2.x1600I26012682202}
              propertyTaxI26012={insightsCard102Props2.propertyTaxI26012}
              button8Props={insightsCard102Props2.button8Props}
            />
          </div>
          <Footer32 {...footer32Props} />
        </div>
      </div>
    </div>
  );
}

export default X06InsightsPageDesktop;
