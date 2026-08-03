import React from "react";
import "./Resume.scss";

// Accepts either a flat `featuresArray` or `featureGroups` for roles that span
// more than one title. Items may be plain strings or { label, text }; a string
// shaped "Label: detail" is split automatically so existing data keeps working.
const splitItem = (item) => {
  if (item && typeof item === "object") return item;
  const text = String(item);
  const at = text.indexOf(":");
  if (at > 0 && at < 60) {
    return { label: text.slice(0, at), text: text.slice(at + 1).trim() };
  }
  return { label: null, text };
};

const Features = ({
  featuresArray,
  featureGroups,
  title = "Features",
  addendum = "(Developed)",
}) => {
  const groups =
    featureGroups && featureGroups.length
      ? featureGroups
      : featuresArray && featuresArray.length
      ? [{ items: featuresArray }]
      : null;

  if (!groups) return null;

  // Grouped mode: each group head already carries a period + role label, so a
  // "Features" banner above them would just stack two uppercase rows.
  const grouped = Boolean(featureGroups && featureGroups.length);

  return (
    <div className="feature-block">
      {!grouped ? (
        <div className="m-title">
          {title}{" "}
          <span className="features-addendum-text">{addendum}</span>
        </div>
      ) : null}

      {groups.map((group, gi) => (
        <div className="feature-group" key={group.period || gi}>
          {group.period || group.title ? (
            <div className="feature-group-head">
              {group.period ? (
                <span className="feature-group-period">{group.period}</span>
              ) : null}
              {group.title ? (
                <span className="feature-group-title">{group.title}</span>
              ) : null}
            </div>
          ) : null}

          <ul className="feature-list">
            {group.items.map(splitItem).map((item, i) => (
              <li className="feature-item" key={i}>
                {item.label ? (
                  <span className="feature-label">{item.label}</span>
                ) : null}
                <span className="feature-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Features;
