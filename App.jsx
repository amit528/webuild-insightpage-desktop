import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X06InsightsPageDesktop from "./components/X06InsightsPageDesktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|06-insights-page-desktop)">
          <X06InsightsPageDesktop {...x06InsightsPageDesktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const headerWithBackgroundData = {
    unselectedI2601268: "HOME",
    unselectedI26012682: "ABOUT US",
    unselectedI26012683: "PROJECTS",
    unselectedI26012684: "VIDEOS",
    text38: "INSIGHTS",
    unselectedI26012685: "BLOGS",
    unselectedI26012686: "FAQ’S",
    unselectedI26012687: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton22Data,
};

const button8Data = {
    children: "VIEW DETAILS",
};

const insightsCard82Data = {
    x1600I26012676202: "BBMP",
    text37: "Property Tax",
    button8Props: button8Data,
};

const button82Data = {
    children: "VIEW DETAILS",
};

const insightsCard92Data = {
    x1600I26012677202: "BWSSB",
    propertyTaxI26012: "Water Supply",
    button8Props: button82Data,
};

const button83Data = {
    children: "VIEW DETAILS",
};

const insightsCard102Data = {
    x1600I26012678202: "BESCOM",
    propertyTaxI26012: "Electricity Provider",
    button8Props: button83Data,
};

const button84Data = {
    children: "VIEW DETAILS",
};

const insightsCard112Data = {
    x1600I26012679202: "Procedure",
    propertyTaxI26012: "Steps taken for Construction",
    button8Props: button84Data,
};

const button85Data = {
    children: "VIEW DETAILS",
};

const insightsCard122Data = {
    x1600I26012680202: "Vaastu",
    propertyTaxI26012: "Boost positive energy in home",
    button8Props: button85Data,
};

const button86Data = {
    children: "VIEW DETAILS",
};

const insightsCard132Data = {
    x1600I26012681202: "Bye Laws",
    propertyTaxI26012: "Legal Documentation",
    button8Props: button86Data,
};

const button87Data = {
    children: "VIEW DETAILS",
};

const insightsCard142Data = {
    x1600I26012682202: "Tips & Ideas",
    propertyTaxI26012: "Construction Tips & Ideas",
    button8Props: button87Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: white2Data,
};

const group324Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-89@2x.svg",
    text7: "#8, 105, Vishal Park Word, 3rd Cross, Cambridge Road Ulsoor, Bangalore, Bengaluru, Karnataka 560008",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg",
    text8: "+91 8976535221, +91 8755645342",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-92@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-93@2x.svg",
    text9: "contact@webuild.com",
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer32Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-94@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    group862Props: group86222Data,
    group32Props: group324Data,
    facebookAppSymbolProps: facebookAppSymbol3Data,
    twitterProps: twitter3Data,
    frame5Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const x06InsightsPageDesktopData = {
    insights: "Insights",
    rectangle85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-85-1@1x.png",
    text83: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    headerWithBackgroundProps: headerWithBackgroundData,
    insightsCard82Props: insightsCard82Data,
    insightsCard92Props: insightsCard92Data,
    insightsCard102Props: insightsCard102Data,
    insightsCard112Props: insightsCard112Data,
    insightsCard82Props2: insightsCard122Data,
    insightsCard92Props2: insightsCard132Data,
    insightsCard102Props2: insightsCard142Data,
    footer32Props: footer32Data,
};

