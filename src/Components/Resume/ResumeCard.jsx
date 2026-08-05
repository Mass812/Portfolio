import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Milestones from "./Milestones";
import TeamAward from "./TeamAward";
import Features from "./Features";
import "./Resume.scss";
import Icon from "../ContactBar/Icon";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const ResumeCard = ({
  onClickMore,
  endDate,
  startDate,
  duration,
  company,
  position,
  icon,
  p1,
  p2,
  textWhenMore,
  safe,
  featuresArray,
  addendum,
  addendum2,
  resp1,
  resp2,
  resp3,
  resp4,
  highlight1,
  highlight2,
  milestones,
  teamAward,
  featureGroups,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const marker = useRef(null);
  const body = useRef(null);
  const arrow = useRef(null);
  const arrow2 = useRef(null);

  // The timeline furniture (date arrows + marker) animates in on mount. The
  // role body is collapsed by default, so it is not part of this tween.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [arrow.current, marker.current, arrow2.current].filter(
        Boolean
      );
      if (!targets.length) return;
      gsap.from(targets, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(1.4)",
        clearProps: "opacity,scale,transform",
      });
    });

    return () => ctx.revert();
  }, []);

  // Reveal the body each time the card is expanded.
  useLayoutEffect(() => {
    if (!open || !body.current) return;
    const ctx = gsap.context(() => {
      gsap.from(body.current, {
        opacity: 0,
        y: -8,
        duration: 0.35,
        ease: "power2.out",
        clearProps: "opacity,y,transform",
      });
    });

    return () => ctx.revert();
  }, [open]);

  return (
    <div className="edge-down">
      <li className="timeline-item">
        <div className="timeline-info">
          <span className="dateOf" ref={arrow}>
            <FontAwesomeIcon
              className="arrow"
              icon={faLongArrowAltRight}
              color={"white"}
              size={"lg"}
            />{" "}
            <span className="arrow-text">{endDate}</span>
            <span className="duration">{duration}</span>
          </span>
        </div>
        <div className="timeline-marker" ref={marker} />
        <div className="timeline-content">
          <button
            type="button"
            className="role-header"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            <span className="role-header-text">
              <span className="timeline-title">{company}</span>
              <span className="position">{position}</span>
              <span className="role-dates">
                {startDate} &mdash; {endDate}
              </span>
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={open ? "role-chevron role-chevron-open" : "role-chevron"}
            />
          </button>

          {open ? (
            <div className="role-body" ref={body}>
              <div className="highlight1">{highlight1}</div>

              <div className="why">
                <div className="p-bodies">{p1}</div>
              </div>

              {p2 ? (
                <div className="why">
                  <div className="p-bodies">{p2}</div>
                </div>
              ) : null}

              {textWhenMore ? (
                <span
                  id={!safe ? "safe" : "no-safe"}
                  role="button"
                  tabIndex={0}
                  onClick={onClickMore}
                  onKeyDown={(e) => e.key === "Enter" && onClickMore()}
                >
                  Continue reading
                </span>
              ) : null}
              <br />

              {safe ? (
                <div className="why">
                  <div className="p-bodies">{textWhenMore}</div>
                </div>
              ) : null}

              {resp1 ? (
                <div>
                  <div className="key-responsibility-title">
                    Key Responsibilities {addendum}
                  </div>

                  <ul className="innerList">
                    <div className="addendum-two"> {addendum2}</div>
                    {resp1 ? (
                      <Icon size={"sm"} icon={icon} color={"red"}>
                        {resp1}
                      </Icon>
                    ) : null}
                    {resp2 ? (
                      <Icon size={"sm"} icon={icon}>
                        {resp2}
                      </Icon>
                    ) : null}
                    {resp3 ? (
                      <Icon size={"sm"} icon={icon}>
                        {resp3}
                      </Icon>
                    ) : null}
                    {resp4 ? (
                      <Icon size={"sm"} icon={icon}>
                        {resp4}
                      </Icon>
                    ) : null}
                  </ul>
                </div>
              ) : null}
              {milestones ? <Milestones /> : null}
              <Features
                featuresArray={featuresArray}
                featureGroups={featureGroups}
              />
              {/* Recognition reads as a capstone after the work, not before it. */}
              {teamAward ? <TeamAward /> : null}

              {highlight2 ? (
                <div className="highlight2">{highlight2}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </li>
      <li
        className="timeline-item-bottom"
        style={{ boxShadow: "none", border: "none" }}
        ref={arrow2}
      >
        <span className="dateOf">
          <FontAwesomeIcon
            className="arrow"
            icon={faLongArrowAltLeft}
            color={"white"}
            size={"lg"}
          />{" "}
          <span className="arrow-text">{startDate}</span>
        </span>

        <div className="timeline-marker-bottom" />
      </li>

      <div className="sep" />
    </div>
  );
};
export default ResumeCard;
