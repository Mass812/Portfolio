import React from "react";
import "./Resume.scss";

// Title history for a single employer, newest first. Rendered inside the role
// card so a multi-year tenure reads as progression rather than one flat block.
const RoleProgression = ({ heading = "Progression", roles = [] }) => {
  if (!roles.length) return null;

  return (
    <div className="progression">
      <div className="progression-heading">{heading}</div>
      <ol className="progression-list">
        {roles.map((r) => (
          <li
            className={
              r.current ? "progression-item progression-current" : "progression-item"
            }
            key={r.title + r.period}
          >
            <span className="progression-period">{r.period}</span>
            <span className="progression-title">{r.title}</span>
            {r.note ? (
              <span className="progression-note">{r.note}</span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoleProgression;
