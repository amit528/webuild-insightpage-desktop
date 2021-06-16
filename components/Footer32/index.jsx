import React from "react";
import Group86222 from "../Group86222";
import Group324 from "../Group324";
import FacebookAppSymbol3 from "../FacebookAppSymbol3";
import Twitter3 from "../Twitter3";
import Frame53 from "../Frame53";
import Frame6 from "../Frame6";
import Frame7 from "../Frame7";
import "./Footer32.css";

function Footer32(props) {
  const {
    overlapGroup1,
    vector2,
    group862Props,
    group32Props,
    facebookAppSymbolProps,
    twitterProps,
    frame5Props,
    frame6Props,
    frame7Props,
  } = props;

  return (
    <div className="footer">
      <div className="frame-1585">
        <div className="frame-1578">
          <Group86222 group85={group862Props.group85} whiteProps={group862Props.whiteProps} />
          <div className="frame-1584">
            <Group324
              overlapGroup1={group32Props.overlapGroup1}
              text7={group32Props.text7}
              vector2={group32Props.vector2}
              text8={group32Props.text8}
              overlapGroup12={group32Props.overlapGroup12}
              vector3={group32Props.vector3}
              text9={group32Props.text9}
            />
            <div className="frame-1583">
              <FacebookAppSymbol3 src={facebookAppSymbolProps.src} />
              <div className="instagram">
                <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <img
                    className="vector-1"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg"
                  />
                  <img className="vector-2" src={vector2} />
                </div>
              </div>
              <Twitter3 src={twitterProps.src} />
            </div>
          </div>
        </div>
        <Frame53 text40={frame5Props.text40} frame4Props={frame5Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}

export default Footer32;
