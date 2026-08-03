import React, { useState } from "react";
import "./Resume.scss";

import { faUps, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import ResumeCard from "./ResumeCard";
import AwardsSummary from "./AwardsSummary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  const [moreAboutRetail, setMoreAboutRetail] = useState(false);
  const [moreAboutUPS, setMoreAboutUPS] = useState(false);
  const [moreAboutFIT, setMoreAboutFIT] = useState(false);
  const [moreAboutTechstyle, setMoreAboutTechstyle] = useState(false);
  const [moreAboutParsedIO, setMoreAboutParsedIO] = useState(false);
  const [moreAboutFreeLance, setMoreAboutFreeLance] = useState(false);

  const moreRetail = () => {
    setMoreAboutRetail((prev) => !prev);
  };
  const moreAboutFit = () => {
    setMoreAboutFIT((prev) => !prev);
  };
  const moreFreeLance = () => {
    setMoreAboutFreeLance((prev) => !prev);
  };
  const moreUPS = () => {
    setMoreAboutUPS((prev) => !prev);
  };

  const moreParsedIO = () => {
    setMoreAboutParsedIO((prev) => !prev);
  };

  const moreTechstyle = () => {
    setMoreAboutTechstyle((prev) => !prev);
  };
  // Served from public/ so the PDF versions with the site instead of drifting
  // on an external Drive doc.
  const openHardResume = () => {
    window.open("/MattWellman-Resume.pdf");
  };

  return (
    <div className="parent">
      <div className="hard-resume-block" onClick={openHardResume}>
        <FontAwesomeIcon
          icon={faFileAlt}
          size={"xs"}
		  color={"wheat"}
          className="hard-resume-text"
        />{" "}
        <div className="hard-resume-text">Download R&eacute;sum&eacute; (PDF)</div>
      </div>

      <AwardsSummary />

      <ResumeCard
        company={"Fabletics Retail"}
        startDate={"October 2022"}
        endDate={"Present"}
        duration={""}
        position={"Senior Software Engineer"}
        icon={faAngleRight}
        p1={
          "System design and infrastructure for the Fabletics Retail backend — inventory movement, reconciliation, and the real-time event platform that keeps store inventory accurate."
        }
        highlight1={
          "I support omni retail systems across 134 Fabletics retail stores in the US, 10 stores across the EU, and 15 Savage X Fenty stores in the US."
        }
        progression={[
          {
            period: "Oct 2024 — Present",
            title: "Senior Software Engineer",
            current: true,
          },
          { period: "Aug 2024 — Oct 2024", title: "Software Engineer II" },
          {
            period: "Oct 2022 — Aug 2024",
            title: "Fabletics Omni / Retail Software Engineer",
          },
        ]}
        featureGroups={[
          {
            period: "Oct 2024 — Present",
            title: "Senior Software Engineer",
            items: [
              {
                label: "RFID inventory platform",
                text:
                  "I owned the core architecture and the integration of RFID into the existing retail inventory stack. The rollout reached every store in six months, on time and within budget, replacing twice-yearly physical counts with inventory ownership visibility every 30 minutes.",
              },
              {
                label: "Real-time event framework",
                text:
                  "I built the Kafka event stream behind RFID, replacing implicit integrations with explicit POS, movement, sold and adjustment events across both the Fabletics and Savage X Fenty brands — multi-brand topic design, consumer group management, and a per-store canary rollout.",
              },
              {
                label: "Monitoring and alerting",
                text:
                  "I instrumented the RFID integration before launch, so the platform was observable and its health provable on day one rather than after the first incident.",
              },
              {
                label: "Inventory integrity",
                text:
                  "I consolidated more than fifteen different code paths for moving inventory into one consistent pattern, and fixed a transfer defect where manufacturer-direct stock was added to a store without being removed from the warehouse, silently duplicating inventory.",
              },
              {
                label: "Reconciliation systems",
                text:
                  "I built the BOPIS and receiving reconciliation processes — the receiving job from the ground up, stored procedures through service and endpoint. These keep inventory accounting honest against what physically moved.",
              },
              {
                label: "CRON modernization",
                text:
                  "I moved several CRON workstreams off a legacy Node service into the NestJS monorepo — cart expiry and deletion sweeps, the store event job, and the store-master sync — re-architected to NestJS patterns rather than lifted across.",
              },
              {
                label: "BOPIS order lifecycle",
                text:
                  "I wired cancel, auto-cancel and movement-blocking behaviour so buy-online-pickup-in-store orders resolve correctly at every stage.",
              },
              {
                label: "Shared address validation",
                text:
                  "I packaged Smarty address validation as a NestJS library so every service in the monorepo validates the same way instead of each rolling its own.",
              },
              {
                label: "Automated API regression",
                text:
                  "I added a Postman/Newman GitHub Action that runs collections against QA nightly, with selectable environments for on-demand runs — a standing regression net that needs no manual trigger.",
              },
              {
                label: "Developer tooling and AI workflow",
                text:
                  "Seven improvements over six weeks to an internal Electron/React API testing client used daily by the engineering team, plus an AI-assisted routine that made our delivery process easier to follow.",
              },
              {
                label: "SMS platform",
                text:
                  "Full-stack delivery across the front end and the backend services behind it.",
              },
            ],
          },
          {
            period: "Oct 2022 — Aug 2024",
            title: "Omni / Retail Software Engineer → Software Engineer II",
            items: [
              {
                label: "Monorepo architecture",
                text:
                  "I consolidated the retail backends into modular npm packages so shared functionality could serve every brand — Fabletics, Savage X Fenty, JustFab, ShoeDazzle and Yitty — with automated release management in GitHub Actions, canary and stable pipelines, Jest and TSC gates, and single-command scaffolding for new packages.",
              },
              {
                label: "Amazon Today",
                text:
                  "I led the backend integration, built on that monorepo framework.",
              },
            ],
          },
        ]}
        safe={moreAboutRetail}
        textWhenMore={
          "The through-line in this work is that inventory accuracy is an infrastructure problem, not a reporting one. Before RFID, the business could only establish true inventory ownership twice a year through full physical counts, and every omni-channel fulfillment decision in between was made against an estimate. Fixing that meant more than adding a scanner: the integrations had to become explicit events rather than implicit side effects, the fifteen-odd divergent ways the codebase moved stock had to collapse into one reviewable pattern, and reconciliation had to be able to prove the system's numbers against what physically happened. The rollout was deliberately unglamorous — one canary store, then outward — because a platform that writes inventory to production is one you want to be able to roll back."
        }
        onClickMore={moreRetail}
        teamAward
      />
      <ResumeCard
        company={"Fabletics Fit Mobile App"}
        startDate={"March 2021"}
        endDate={"Present"}
        duration={""}
        position={"Primary Software Engineer, Fabletics FIT"}
        icon={faAngleRight}
        progression={[
          {
            period: "Oct 2021 — Present",
            title: "Primary Software Engineer, Fabletics FIT",
            current: true,
          },
          { period: "Mar 2021 — Oct 2021", title: "Software Engineer, Jr." },
        ]}
        p1={
          "I am the primary full stack mobile developer on the Fabletics FIT app, a member-exclusive workout experience for iOS and Android. The front end is React Native and TypeScript alongside Segment, SailThru, Emarsys and Firebase Analytics; the backend is DynamoDB, Strapi, Postgres, Terraform and GraphQL. I am responsible for every aspect of the app, from feature creation through app store deployment."
        }
        highlight1={
          "The app carries a 4.8-star rating across 5,475+ iOS App Store reviews and 4.6 stars on Android, and I am the only full stack developer at Techstyle Fashion Group."
        }
        highlight2={
          "Before interviewing for this role, I learned the stack — DynamoDB, GraphQL, Apollo Server, TypeScript, urql — and built a working version of the app in it before the interview."
        }
        safe={moreAboutFIT}
        textWhenMore={
          "Fabletics is part of Techstyle Fashion Group, alongside Savage X Fenty, ShoeDazzle, JustFab and FabKids. FIT is the smallest app in that portfolio by scale, but it carries a 60,000 active user base and plays a significant role in membership engagement, retention and analytics. Being smallest is an advantage: FIT is where new design patterns and processes get proven before they roll out across Techstyle's mobile family. It was also the first of those apps to ship on the Android Play Store."
        }
        resp1={
          "Technical planning and architecture for new features, from spec through app store release."
        }
        resp2={
          "Work with production, graphic design, & marketing teams to successfully reach desired company outcomes."
        }
        resp3={
          "Solely responsible (Ground up development: feature creation => app store deployments) for writing all backend and front end changes."
        }
        resp4={""}
        onClickMore={moreAboutFit}
        milestones
      />
      <ResumeCard
        company={"Full Stack React and React-Native Developer"}
        startDate={"September 1,2020"}
        endDate={"March 21, 2021"}
        duration={""}
        position={"React Developer"}
        icon={faAngleRight}
        p1={
          "I build client web applications in React, with backends on Firebase and MERN. Work ranged from marketing sites to internal business tooling, scoped and delivered directly with the client."
        }
        safe={moreAboutFreeLance}
        resp1={"Build Client Web Applications to Requested Standards"}
        resp2={
          "Work with clients to mediate their wants with best / practical approaches."
        }
        resp3={"Create the most cost effective methods in building out sites."}
        resp4={
          "Guarantee site issue resolutions for 2 years of sites finished development"
        }
        onClickMore={moreFreeLance}
      />
      <ResumeCard
        company={"UPS Worldport"}
        startDate={"June 28, 2019"}
        endDate={"August 28, 2020"}
        duration={"1.5 years"}
        position={"Safety Committee Member"}
        icon={faUps}
        textWhenMore={
          "Training is the cornerstone of safety at UPS, and management training is the logical precursor to an informed and safe workforce. UPS invests $175 million pe year on safety training. UPS employees receive nearly 3.8 million hours of safety training annually, including Safe Work Methods. UPS Safe Work Methods have been developed to help address the major sources of known risk to our employees. I was glad to be part of that process."
        }
        safe={moreAboutUPS}
        resp1={"Safety Compliance Training / New Hire Training"}
        resp2={"Facility, Equipment & Employee audits"}
        resp3={"Root Cause Analysis Reporting"}
        resp4={"Developed a Web Application for their Operations"}
        p1={
          "I saw the safety committee running audits on triplicate paperwork and built them a web application to replace it. The platform was approved by Wing D's building managers and the Safety Committee Chairman, and ran in production for the committee. I handed the codebase over to UPS at the end of my time there so the team could keep using it."
        }
        onClickMore={moreUPS}
      />
      <ResumeCard
        company={"Parse IO"}
        startDate={"March 28, 2018"}
        endDate={"September 16, 2019"}
        duration={"6 months"}
        position={"React Native Developer"}
        icon={faReact}
        p1={
          "I worked on React Native projects at ParsedIO ranging from internationalizing existing applications with i18n to building video streaming applications from scratch. Remote developer on a team run by a Scrum/Project Manager, working in daily stand-ups and delivering assigned sprints."
        }
        safe={moreAboutParsedIO}
        resp1={
          "Developed React-Native Applications for iOS and Android to client specs"
        }
        resp2={" Resolve Merge Conflicts and Testing Failures"}
        resp3={
          " Work with 3rd party Back-end Companies to validate / resolve / create endpoints"
        }
        resp4={"Worked exclusively in React Native."}
        textWhenMore={
          "In the duration of this employment and afterwards I studied React to such a point that building anything in this library became intuitive and there is no pressure in development or trouble shooting."
        }
        onClickMore={moreParsedIO}
      />
      <ResumeCard
        company={"Techstyle Fashion Group"}
        startDate={"February 28, 2012"}
        endDate={"October 02, 2018"}
        duration={"6.5 years"}
        position={"Director of Security Operations"}
        icon={faAngleRight}
        p1={
          "Directly regarding development: in my duration there I developed Google Sheet dashboards, Google forms that automated work order requests, tracked 100's of devices, logged all inbound & outbound trailers, and transformed security's workflow that did a great deal to increase operational oversight and decrease operational manpower / hours to save the company thousands a year in resource expenditures. "
        }
        safe={moreAboutTechstyle}
        addendum={"(Pertinent to Development)"}
        addendum2={
          " Fully developing Web Technologies that leveraged entire workflows which:"
        }
        resp1={
          " Watered-down operational complexities (Lessened Skill Set requirements)"
        }
        resp2={
          " Markedly decreased training & development time (Better On-Boarding)"
        }
        resp3={
          " Automated security reporting and auditing (Modernized Security)"
        }
        resp4={" Immeasurably increased oversight (Operational Control)"}
        textWhenMore={
          "After maturing at Techstyle I wanted to delve further into coding, not just to expand on my knowledge of the javascript language and to better understand the technology perspectives of operational workflows (i.e., its struggles and possibilities) but to learn of the javascript libraries and frameworks used to develop entire projects from the ground up. This choice to journey into JavaScript Libraries certainly broadened my overall knowledge-base, I am glad I began this endeavour."
        }
        onClickMore={moreTechstyle}
      />
    </div>
  );
};

export default Resume;
