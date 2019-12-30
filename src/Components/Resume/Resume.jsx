import React, { useState } from "react";
import "./Resume.scss";
import "../../Assets/Disney2018.jpeg";
import Icon from "../FontAwesome/Icon";
import { faUps, faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const [change, setChange] = useState(false);
  const [intel, setIntel] = useState(false);
  const [safe, setSafe] = useState(false);

  const classChange = () => {
    setChange(prevState => setChange(!change));
  };

  const moreSafe = () => {
    setChange(preState => setSafe(!safe));
  };

  const moreIntel = () => {
    setIntel(!intel);
  };

  return (
    <div className="container-fluid">
      <div className="row example-centered">
        <div className="col-sm-12 example-title">
          <h2 id='push'> Experience Timeline </h2>
        </div>

        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan"> => Present</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  <b>
                    UPS (World Port) <br></br>
                  </b>
                  Comprehensive Health & Safety Process Committee (CHSP)
                </h3>

                <blockquote>
                  <q>
                    Training is the cornerstone of safety at UPS, and management
                    training is the logical precursor to an informed and safe
                    workforce. UPS invests $175 million per year on safety
                    training. UPS employees receive nearly 3.8 million hours of
                    safety training annually, including Safe Work Methods. UPS
                    Safe Work Methods have been developed to help address the
                    major sources of known risk to our employees.
                  </q>
                </blockquote>
                <tag id={!safe ? "safe" : "no-safe"} onClick={moreSafe}>
                  ...continue reading
                </tag>
                <br />
                {safe ? (
                  <blockquote>
                    {" "}
                    I wanted to join UPS for a few reasons, first the benefits.
                    Secondly I have LOVED airplanes since boyhood--Mavrick &
                    Goose forever changed my life. Third, I truely wanted to
                    know how that kind of operation is run! Its so different
                    from the normal operation, as soon as I considered the
                    position--I was all in. I currently work only part-time,
                    enough to experience the administrative aspects, gain the
                    benefits and feel the tarmac adrenaline.
                  </blockquote>
                ) : null}
                <h3>Highlights</h3>

                <ul className="ExperienceListParent">
                  <Icon size={"sm"} icon={faUps} color={"red"}>
                    Facility and equipment audits
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Safety compliance training
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Audit root cause analysis
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Safety Outreach
                  </Icon>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">&lt;= July 2, 2019</span>
              </div>
              <div className="timeline-marker"></div>
            </li>
            <br />

            <div className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan"> => October 23, 2019</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Parsed.io <br></br>Mobile App Developer
                </h3>

                <blockquote>
                  Since this is here, it does kind of beg the question
                  <b style={{ color: "goldenrod" }}>?</b> Yes, I did fully dev
                  this site (using JS, JSX, React, React-Router Flux, etc, . .
                  .) I was fortunate to be given a seat among such a great team.
                  I worked on both large and small scale projects ranging from
                  internationalizing currently existing applications to creating
                  video streaming applications from scratch.
                  <tag id={!intel ? "intel" : "no-intel"} onClick={moreIntel}>
                    ...continue reading
                  </tag>
                </blockquote>
                {intel ? (
                  <blockquote>
                    I love technology and for many years I swore I would take
                    the time to learn it! I have always had more than a natural
                    aptitude towards the Internet of Things, apparently that
                    term is a real thing (smh). I learned SQL inadvertently
                    through google sheets while at Techstyle Fashion Group.
                    <br />
                  </blockquote>
                ) : null}
                <h3>Highlights</h3>

                <ul className="ExperienceListParent">
                  <Icon size={"sm"} icon={faReact}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    Learn, Learn, Learn
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    Fulfill sprints and assigned tickets
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    make amazing Apps
                  </Icon>
                </ul>
              </div>
            </div>
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">&lt;= March 1, 2019 </span>
              </div>
              <div className="timeline-marker"></div>
            </li>
            <br />
            <br />

            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">=> October 02, 2018</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Director of Security Operations
                </h3>
                <p>
                  <strong>Techstyle Fashion Group</strong>
                </p>

                <blockquote>
                  "Company’s rightly focus on product quality and customer
                  service. From my management experience those two driving
                  forces are only two factors in a company’s economy. On the
                  ground, managing shrinkage and loss is crucial to maintaining
                  those profits. My focus was on the losses generated from
                  employee turn-over, injury, theft and damage to create a
                  positive company impact.{" "}
                  <tag id={!change ? "tag" : "tagged"} onClick={classChange}>
                    ...continue reading
                  </tag>
                </blockquote>
                {change ? (
                  <blockquote>
                    {" "}
                    <p>
                      Nearing the end of college I stepped into a position of an
                      area manager for a security firm in Louisville.
                      Opportunity presented itself and I usurped a position as
                      the Security Operations Manager for Techstyle Fashion
                      Group.{" "}
                    </p>
                    <p>
                      {" "}
                      A lot of growth occurred while I was there:
                      <br /> the acquisition of Shoe Dazzle and Madden
                      Shoes...horizontal growth--beyond footwear--into other
                      areas of fashion... Kate Hudson launched her athletic
                      apparel brand: Fabletics . . . then the launch Rhianna’s
                      Savage X Finty brand.{" "}
                    </p>
                    <p>
                      I mention that here because with the kind of growth and
                      rapid success that Techstyle enjoyed, came with its own
                      challenges: management constantly trying to keep pace with
                      its own evolution. As such my role continually evolved
                      over the course of my 6 years there into their Security
                      Director.{" "}
                    </p>
                    Working alongside three staffing agencies and seven internal
                    operational departments, for a company consisting of 1000+
                    employees. I effectively coordinated a 40+ member security
                    team.{" "}
                    <p>
                      {" "}
                      I was wholly responsible for evaluating, mentoring, and
                      developing managers/supervisors. All Scheduling; Hiring,
                      on-boarding & developing employees; Managing workload and
                      streamlining operations; RFPs ; Data compiling and
                      analysis; Integrating SOPs into and throughout multiple
                      departments / areas.{" "}
                    </p>
                    I injected modernity into the security program by Fully
                    developing Web Technologies that leveraged complete
                    workflows & streamlined operations. Which: <br /> <br />
                    1] watered-down operational complexities (Lessened Skill Set
                    requirements)
                    <br />
                    2] markedly decreased training & development time (Better
                    On-Boarding)
                    <br /> 3] automated security reporting and auditing
                    (Modernized Security)
                    <br /> 4] yielded clearer insights to areas of focus (Data
                    Analysis)
                    <br /> 5] immeasurably increased oversight (Operational
                    Control) <br />
                    6] created absolute transparency between security and other
                    departments. (Synergy)
                    <br /> After maturing at Techstyle I wanted to delve further
                    into coding, not just to expand on knowledge of frameworks,
                    languages and API's but to better understand the technology
                    side of the operational workflow (i.e., its struggles and
                    possibilities). This choice certainly broadened my overall
                    knowledge-base being all companies heavily leverage
                    technology into their work models."
                  </blockquote>
                ) : null}
                <h3>Highlights</h3>
                <ul className="ExperienceListParent">
                  <Icon size={"sm"} icon={faAngleRight}>
                    Maintained a 87% Employee Retention Rate over 6.5 years
                  </Icon>
                  <Icon size={"sm"} icon={faAngleRight}>
                    Kept Shrinkage at or below 1.8
                  </Icon>
                  <Icon size={"sm"} icon={faAngleRight}>
                    Exceeded expectations on quarterly / annual reviews
                  </Icon>
                  <Icon size={"sm"} icon={faAngleRight}>
                    Continually decreased department budgets
                  </Icon>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">&lt;= Feb 28, 2011</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
