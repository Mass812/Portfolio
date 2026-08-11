import React from "react";
import "./Resume.scss";

// Consolidated Fabletics title ladder, surfaced as a page-level highlight under
// Recognition. Reuses the awards-summary row language so the two sections read
// as siblings. The FIT role runs concurrently with the retail ladder.
const STEPS = [
  {
    id: "senior",
    when: "Oct 2024",
    title: "Senior Software Engineer",
    scope: "Current",
    current: true,
  },
  {
    id: "swe2",
    when: "Aug 2024",
    title: "Software Engineer II",
  },
  {
    id: "omni",
    when: "Oct 2022",
    title: "Software Engineer I",
  },
  {
    id: "fit",
    when: "Oct 2021",
    title: "Primary Software Engineer, Fabletics FIT",
    note: "Held concurrently with the retail roles.",
  },
  {
    id: "jr",
    when: "Mar 2021",
    title: "Software Engineer, Jr.",
  },
];

const CareerProgression = () => {
  return (
    <div className="awards-summary">
      <div className="awards-summary-title">Progression</div>
      <p className="awards-summary-lede">
        <span className="gilt">6 years 5 titles</span>.
      </p>

      <div className="awards-panel">
        <ul className="awards-summary-list">
          {STEPS.map((s) => (
            <li className="awards-summary-item" key={s.id}>
              <div className="awards-summary-when">{s.when}</div>
              <div className="awards-summary-body">
                <div className="awards-summary-name">
                  {s.title}
                  {s.scope ? (
                    <span className="awards-summary-scope is-current">
                      {s.scope}
                    </span>
                  ) : null}
                </div>
                {s.note ? (
                  <div className="awards-summary-note">{s.note}</div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerProgression;
