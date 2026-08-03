import React from "react";
import "./Resume.scss";

// Sits above the career timeline. Attribution matters here: the Masters of
// Innovation is an industry award given to Fabletics for the RFID programme,
// not an individual award, so it is credited to the project with the role
// stated rather than claimed personally.
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
    scope: "Industry — awarded to Fabletics",
    note:
      "Presented by Let's Talk Supply Chain and SupplyChainBrain at Manifest: The Future of Supply Chain & Logistics, for the retail-inventory programme I led the core architecture and integration on.",
  },
];

const AwardsSummary = () => {
  return (
    <div className="awards-summary">
      <div className="awards-summary-title">Recognition</div>
      <p className="awards-summary-lede">
        Two distinct Global Recognition Awards at Fabletics &mdash; one
        individual, one by team nomination &mdash; plus an industry award for
        the inventory platform.
      </p>

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
  );
};

export default AwardsSummary;
