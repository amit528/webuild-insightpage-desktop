import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./HeaderWithBackground.css";

function HeaderWithBackground(props) {
  const {
    unselectedI2601268,
    unselectedI26012682,
    unselectedI26012683,
    unselectedI26012684,
    text38,
    unselectedI26012685,
    unselectedI26012686,
    unselectedI26012687,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2601268 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601268}
          </div>
          <div className="unselected-i2601268-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012682}
          </div>
          <div className="unselected-i2601268-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012683}
          </div>
          <div className="unselected-i2601268-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012684}
          </div>
          <div className="selected">
            <div className="overlap-group">
              <div className="rectangle-61"></div>
              <div className="text-30 valign-text-middle overpass-bold-shark-14px">{text38}</div>
            </div>
          </div>
          <div className="unselected-i2601268-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012685}
          </div>
          <div className="unselected-i2601268-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012686}
          </div>
          <div className="unselected-i2601268-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012687}
          </div>
        </div>
        <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
      </div>
    </div>
  );
}

export default HeaderWithBackground;
