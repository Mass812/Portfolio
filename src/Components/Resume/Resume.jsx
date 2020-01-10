import React, { useState, useRef, useEffect } from "react";
import "./Resume.scss";
import "../../Assets/Disney2018.jpeg";
import Icon from "../FontAwesome/Icon";
import { faUps, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faCaretSquareRight
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const [change, setChange] = useState(false);
  const [intel, setIntel] = useState(false);
  const [safe, setSafe] = useState(false);

  let title = useRef(null);
  let marker = useRef(null);
  let body = useRef(null);
  let arrow = useRef(null);
  let arrow2 = useRef(null);

  useEffect(() => {
    window.gsap
      .timeline({ duration: 0.5 })
      .fromTo(title, .25, { scale: 1.1 }, { scale: 1, ease: "Power1.easeOut" })
      .fromTo(
        arrow2,
        0.25,
        { opacity: 0, ease: "Back.easeOut", scale: 1.1 },
        { opacity: 1, ease: "Back.easeOut", scale: 1 }
      )
      .fromTo(
        [marker, body],
        1,
        { scale: 0, visibility: "hidden" },
        { visibility: "visible", scale: 1 }
      )
      .fromTo(
        arrow,
        0.75,
        { opacity: 0, ease: "Back.easeOut", scale: 1.1 },
        { opacity: 1, ease: "Back.easeOut", scale: 1 }
      );

    return () => {
      console.log("useEffect in Resume has fired");
    };
  }, []);

  const classChange = () => {
    setChange(prevState => setChange(!prevState));
  };

  const moreSafe = () => {
    setChange(prevState => setSafe(!prevState));
  };

  const moreIntel = () => {
    setIntel(!intel);
  };

  return (
    <div className="container-fluid">
      <div className="row example-centered">
        <div className="col-sm-12 example-title">
          <h2 id="push" ref={cr => (title = cr)}>
            {" "}
            Experience Timeline{" "}
          </h2>
        </div>
        <hr className="sep" />
        <br />
        <br />
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span className="dateOf" ref={cr => (arrow = cr)}>
                  {" "}
                  => Present
                </span>
              </div>
              <div className="timeline-marker" ref={cr => (marker = cr)}></div>
              <div className="timeline-content" ref={cr => (body = cr)}>
                <h3 className="timeline-title">
                  <b>
                    UPS (World Port) <br></br>
                  </b>
                  Comprehensive Health & Safety Process Committee (CHSP)
                </h3>

                <div className="why">
                  <p>
                    I wanted to join UPS for a few reasons, first the benefits
                    (You will find that I am always honest). Secondly I have
                    LOVED airplanes since boyhood--Top Gun in the 90's forever
                    ignited my amazement of getting tons of steel to fly through
                    the air. Lastly, I truly wanted to know: <b>how</b> is an
                    operation of that kind run<b>!</b> I had a friend of mine
                    reach out to me about the safety team there wanting to
                    onboard some experienced individuals with safety-aligned
                    work experience. It's so different from the
                    <i>'normal'</i> operation, as soon as I considered the
                    position--I was all in. I currently work only part-time,
                    enough to experience the administrative aspects, form and
                    nurture relationships with others, gain the amazing benefits
                    and feel the tarmac adrenaline.
                  </p>
                </div>

                <span id={!safe ? "safe" : "no-safe"} onClick={moreSafe}>
                  ...continue reading
                </span>
                <br />

                {safe ? (
                  <div className="why">
                    <p>
                      Training is the cornerstone of safety at UPS, and
                      management training is the logical precursor to an
                      informed and safe workforce. UPS invests $175 million per
                      year on safety training. UPS employees receive nearly 3.8
                      million hours of safety training annually, including Safe
                      Work Methods. UPS Safe Work Methods have been developed to
                      help address the major sources of known risk to our
                      employees. I am glad to be part of this process.
                    </p>
                  </div>
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

            <li className="timeline-item" ref={cr => (arrow2 = cr)}>
              <div className="timeline-info">
                <span className="dateOf">&lt;= July 2, 2019</span>
              </div>
              <div className="timeline-marker"></div>
            </li>

            <br />
            <br />
            <hr className="sep" />
            <br />
            <br />

            <div className="timeline-item">
              <div className="timeline-info">
                <span className="dateOf"> => October 23, 2019</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Parsed.io <br></br>Mobile App Developer
                </h3>

                <div className="why">
                  <p>
                    Since this job is here, it does kind of beg the question{" "}
                    <i className="tooltip">
                      {" "}
                      ?
                      <i className="tooltip-text">
                        I utilized React, React-Router & Javascript to create
                        this site
                      </i>
                    </i>{" "}
                    The answer is Yes. (hover the question mark) I was fortunate
                    in being granted a position on such a great team. I worked
                    on both large and small scale projects, ranging from
                    'internationalizing' currently existing applications . . .
                    to creating video streaming applications from scratch.
                  </p>
                </div>
                <span id={!intel ? "intel" : "no-intel"} onClick={moreIntel}>
                  ..continue reading
                </span>
                {intel ? (
                  <div className="why">
                    <p>
                      I love technology and for many years I swore I would take
                      the time to learn it! I have always had more than a
                      natural aptitude towards the Internet of Things,
                      apparently that term is a real thing (smh). I learned SQL
                      inadvertently through google sheets while at Techstyle
                      Fashion Group.
                    </p>
                  </div>
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
                    Make amazing Apps
                  </Icon>
                </ul>
              </div>
            </div>
            <li className="timeline-item">
              <div className="timeline-info">
                <span className="dateOf">&lt;= March 1, 2019 </span>
              </div>
              <div className="timeline-marker"></div>
            </li>
            <br />
            <br />
            <hr className="sep" />
            <br />
            <br />

            <li className="timeline-item">
              <div className="timeline-info">
                <span className="dateOf">=> October 02, 2018</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Techstyle Fashion Group
                  <br></br>
                  <i>Director of Security Operations</i>
                </h3>
                <>
                  <div className="why">
                    <p>
                      "Company’s rightly focus on product quality and customer
                      service. From my management experience those two driving
                      forces are only two factors in a company’s economy. On the
                      ground, managing shrinkage and loss is crucial to
                      maintaining those profits. My focus was on the losses
                      generated from employee turn-over, injury, theft and
                      damage to create a positive company impact."
                    </p>
                  </div>
                </>
                <>
                  <span id={!change ? "tag" : "tagged"} onClick={classChange}>
                    ...continue reading
                  </span>
                </>
                <div>
                  {change ? (
                    <>
                      <div className="why">
                        <div>
                          <p>
                            Nearing the end of college I stepped into a position
                            of an area manager for a security firm in
                            Louisville. Opportunity presented itself and I
                            usurped a position as the Security Operations
                            Manager for Techstyle Fashion Group.
                          </p>
                        </div>
                        <div>
                          <p> A lot of growth occurred while I was there:</p>

                          <p>
                            The acquisition of Shoe Dazzle and Madden
                            Shoes...horizontal growth--beyond footwear--into
                            other areas of fashion... Kate Hudson launched her
                            athletic apparel brand: Fabletics . . . then the
                            launch Rhianna’s Savage X Finty brand.
                          </p>
                        </div>
                        <div>
                          <p>
                            I mention that here because with the kind of growth
                            and rapid success that Techstyle enjoyed, came with
                            its own challenges: management constantly trying to
                            keep pace with its own evolution. As such my role
                            continually evolved over the course of my 6 years
                            there into their Security Director.
                          </p>
                        </div>
                        <div>
                          <p>
                            Working alongside three staffing agencies and seven
                            internal operational departments, for a company
                            consisting of 1000+ employees. I effectively
                            coordinated a 40+ member security team.
                          </p>
                        </div>
                        <div>
                          <p>
                            <b>I was wholly responsible for:</b>{" "}
                          </p>
                          <ul>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              evaluating, mentoring, and developing
                              managers/supervisors.{" "}
                            </Icon>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              All Scheduling; Hiring, On-boarding & Developing
                              employees
                            </Icon>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              Managing Daily Workloads
                            </Icon>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              RFP Budgeting
                            </Icon>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              Integrating SOPs into and throughout multiple
                              Departments / Areas.
                            </Icon>
                            <Icon icon={faCaretSquareRight} size={"sm"}>
                              Data Compiling and Analysis;
                            </Icon>
                          </ul>
                          <br />
                        </div>
                        <div>
                          I injected modernity into the security program by
                          <i>
                            <u>
                              Fully developing Web Technologies that leveraged
                              complete workflows
                            </u>
                          </i>{" "}
                          & streamlined operations. Which:
                        </div>
                        <br />
                        <ul>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            watered-down operational complexities (Lessened
                            Skill Set requirements)
                          </Icon>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            markedly decreased training & development time
                            (Better On-Boarding)
                          </Icon>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            automated security reporting and auditing
                            (Modernized Security)
                          </Icon>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            yielded clearer insights to areas of focus (Data
                            Analysis)
                          </Icon>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            immeasurably increased oversight (Operational
                            Control)
                          </Icon>
                          <Icon icon={faCaretSquareRight} size={"sm"}>
                            created absolute transparency between security and
                            other departments. (Synergy)
                          </Icon>
                        </ul>

                        <p>
                          After maturing at Techstyle I wanted to delve further
                          into coding, not just to expand on knowledge of
                          frameworks, languages and API's but to better
                          understand the technology side of the operational
                          workflow (i.e., its struggles and possibilities). This
                          choice certainly broadened my overall knowledge-base
                          being all companies heavily leverage technology into
                          their work models.
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>
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
                <span className="dateOf">&lt;= February 28, 2012 </span>
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
