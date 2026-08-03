import React from "react";
import "./Resume.scss";

// Team award earned for the RFID rollout — distinct from the personal
// Global MVP Recognition Award in Milestones.jsx.
const TeamAward = () => {
  return (
    <div>
      <div className="award-block">
        <div className="award-eyebrow">Early 2026 &middot; Team Award</div>
        <div className="award-title">
          All Star Team Award{" "}
          <span className="award-scope">RFID Project Team</span>
        </div>
        <blockquote className="award-quote">
          &ldquo;This group has delivered one of the fastest and most effective
          technology rollouts in our industry, completing the full store
          implementation in just six months, on time and within budget, while
          ensuring adoption and measurable benefits from day one. The combined
          effort of these teams has not only transformed how we operate but is
          now being recognized externally by retail, supply chain &amp;
          technology leaders worldwide as a model for innovation and
          execution.&rdquo;
        </blockquote>
        <div className="award-cite">
          Fabletics Worldwide &mdash; All Star Team Award nomination
        </div>
      </div>
    </div>
  );
};

export default TeamAward;
