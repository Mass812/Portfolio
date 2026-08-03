import React from "react";
import "./Bio.scss";

const Certifications = () => {
  const cert = [
    {
      id: 1,
      title: "Libraries",
      items: [" React"],
    },
    {
      id: 7,
      title: "Frameworks",
      items: [" React-Native"],
    },
    {
      id: 2,
      title: "BackEnd",
      items: [
        " Terraform",
        " Express",
        " NestJS",
        " Node",
        " MongoDB",
        " Google Firebase Firestore and Cloud Functions",
        " AWS Beanstalk, S3 & DynamoDB",
        " GraphQL",
        " Apollo Server",
        " NoSQL",
        " Postgres (incl. stored procedures)",
      ],
    },
    {
      id: 8,
      title: "Messaging & Event Streaming",
      items: [
        " Apache Kafka (multi-brand topics, consumer groups)",
        " RabbitMQ",
        " Event-driven service architecture",
      ],
    },
    {
      id: 9,
      title: "CI / CD, Testing & Observability",
      items: [
        " GitHub Actions (canary & stable pipelines)",
        " Postman / Newman automated API regression",
        " Jest",
        " Service monitoring & alerting",
      ],
    },
    {
      id: 22,
      title: "App and Play Store Related",
      items: [
        " Android Deployment",
        " iOS Deployment",
        " AppCenter & CodePush",
        " Jenkins",
      ],
    },
    {
      id: 3,
      title: "Languages",
      items: [
        " JavaScript (ES6+)",
        " JSX",
        " TypeScript",
        " Python and C++ (working knowledge)",
      ],
    },

    {
      id: 4,
      title: "FrontEnd",
      items: [
        " CSS, SASS, Styled Components, Inline Styles & Stylesheet",
        " React Navigation (React Native)",
        " React-Router-Dom (React Web)",
        " Urql",
        " React Helmet",
        " Moment, DayJs",
        " GSAP (GreenSock Animations)",
      ],
    },
    {
      id: 5,
      title: "State Management",
      items: [
        " Redux, Thunk & Redux-Persist,",
        " React useContext, useReducer, useState, useMemo, useEffect.",
        " Zustand",
      ],
    },
  ];

  const certifications = cert.map((el) => (
    <div className="knowledge-group" key={el.id}>
      <div className="knowledge-group-title">{el.title}</div>
      <ul className="knowledge-list">
        {el.items.map((n, idx) => (
          <li className="knowledge-item" key={idx}>
            {n.trim()}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section className="bio-section">
      <h2 className="bio-section-title">Knowledge</h2>
      <div className="knowledge-grid">{certifications}</div>
    </section>
  );
};
export default Certifications;
