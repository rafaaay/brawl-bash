import React from "react";

import AdvisorBottom from "../../molecules/advisor_bottom";
import AdvisorTop from "../../molecules/advisor_top";

function Advisors() {
  return (
    <section className="advisors">
      <div className="container">
        <AdvisorTop />
        <AdvisorBottom />
      </div>
    </section>
  );
}

export default Advisors;
