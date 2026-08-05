import React from "react";
import "./Resume.scss";

// Sits above the career timeline. Attribution matters here: the Masters of
// Innovation is a company award presented to Fabletics, not a personal one —
// it's credited to Fabletics with Matt's role in earning it stated plainly,
// rather than claimed as an individual award.
const AWARDS = [
  {
    id: "mvp",
    when: "June 2022",
    name: "Global MVP Recognition Award",
    scope: "Individual",
    note: "Company-wide individual recognition.",
  },
  {
    id: "allstar",
    when: "Early 2026",
    name: "All Star Team Award",
    scope: "Team — by nomination",
    note:
      "Nominated and awarded to the RFID project team for the fastest and most effective technology rollout in the industry — full store implementation in six months, on time and within budget.",
  },
  {
    id: "manifest",
    when: "2026",
    name: "Inaugural Masters of Innovation",
    scope: "Company Award — Major Contributor",
    note:
      "Presented to Fabletics by Let's Talk Supply Chain and SupplyChainBrain at Manifest: The Future of Supply Chain & Logistics. I was a major contributor to the recognition — I led the core architecture and integration of the retail-inventory programme it was awarded for.",
  },
];

const AwardsSummary = () => {
  return (
    <div className="awards-summary">
      <div className="awards-summary-title">Recognition</div>
      <p className="awards-summary-lede">
        2 distinct Global Recognition Awards at Fabletics &mdash; one
        individual, one by team nomination &mdash; plus an industry award for
        the inventory platform.
      </p>

      <div className="awards-panel">
        <ul className="awards-summary-list">
          {AWARDS.map((a) => (
            <li className="awards-summary-item" key={a.id}>
              <div className="awards-summary-when">{a.when}</div>
              <div className="awards-summary-body">
                <div className="awards-summary-name">
                  {a.name}{" "}
                  <span className="awards-summary-scope">{a.scope}</span>
                </div>
                <div className="awards-summary-note">{a.note}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwardsSummary;
