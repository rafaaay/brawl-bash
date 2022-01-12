import React from "react";
import AdvisorBlock from "../../atoms/advisor_block";

function AdvisorTop() {
  return (
    <div className="section_container top">
      <div className="advisors__heading">
        <h2>Advisors</h2>
      </div>
      <div className="content">
        <AdvisorBlock />
        <AdvisorBlock />
        <AdvisorBlock />
        <AdvisorBlock />
      </div>
    </div>
  );
}

export default AdvisorTop;
