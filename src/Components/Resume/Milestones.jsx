import React from "react";
import "./Resume.scss";

const Miletstones = () => {
  const mvp = require("../../Assets/mvp.png");
  return (
    <>
      <div>
        <div className="m-title">Awards</div>

        <div className="mvp-image-parent">
        <div className="mvp-text">June 2022: MVP Recognition Award</div>
          <img
            src={mvp}
            alt={"mvp award"}
            className="mvp-image"
            style={{ height: 280, width: 280 }}
          />
        </div>

        <div className="m-title" >App Store Statistics</div>
        <ul>
          <li className="m-bodies">
            Android PlayStore:{" "}
            <span className="h-bodies">
              Downloads (+10,373 in March, 221k lifetime)
            </span>
            <li className="m-bodies">
              PlayStore Rating:<span className="h-bodies"> 4.3 Stars</span>
            </li>
          </li>
          <li className="m-bodies">
            iOS AppStore:{" "}
            <span className="h-bodies">
              {" "}
              Downloads (+9,413 in March, 327k lifetime)
            </span>
            <li className="m-bodies">
              AppStore Rating:<span className="h-bodies"> 4.8 Stars</span>
            </li>
          </li>
        </ul>

        <div className="m-title">Features <span className="features-addendum-text">(Backend and Frontend) </span></div>
        <ul>
          <li className="m-bodies">EU Launch: <span className="h-bodies">logins, specific content, language preferences</span></li>
          <li className="m-bodies">App Wide Pagination</li>
          <li className="m-bodies">User Favorites</li>
          <li className="m-bodies">Shopable Outfits</li>
          <li className="m-bodies">Internationalization</li>
          <li className="m-bodies">App Content Filters</li>
          <li className="m-bodies">Dynamic App Content Settings</li>
        </ul>
      </div>
      <div>
        <div className="m-title">Optimization Milestones</div>
        <ol>
          <li className="m-bodies">
            Created new access patterns in DynamoDB to{" "}
            <span className="h-bodies">
              {" "}
              allow for more powerful querying and scalability
            </span>
          </li>
          <li className="m-bodies">
            Used sparse indexing to extract only pertinent data (i.e., 'what
            category' of data was brought into isolated tables). We also limited
            how much of that category data (i.e., what specific key value pairs
            were needed from the parent table) was brought into the tables. The
            GSI table designs are a milestones in that they{" "}
            <span className="h-bodies">
              {" "}
              allow DynamoDb's Engines to operate better on our data
            </span>
            .
          </li>
          <li className="m-bodies">
            Used ProjectedExpressions where possible to decrease the overall
            payloads wherever possible as well to{" "}
            <span className="h-bodies">
              {" "}
              decrease bandwidth and save user battery
            </span>
            .
          </li>
          <li className="m-bodies">
            Created better methods of sort indexing keys to{" "}
            <span className="h-bodies"> extrapolate data faster</span>
          </li>
          <li className="m-bodies">
            Decreased our apps footprint by Paginating over 70% of app content
            to{" "}
            <span className="h-bodies">
              {" "}
              vastly increase device cache / memory allocation
            </span>
            .
          </li>
          <li className="m-bodies">
            Moved filtering from front end to back end: And Rather than utilize
            an EastSearch Cluster that runs 24/7, we wrote that keywords'
            functionality ourselves. Moving the filters to the backend handled
            the workload exponentially better and{" "}
            <span className="h-bodies">
              {" "}
              gained the app a more proficient way to filter product data
            </span>
            .
          </li>
          <li className="m-bodies">
            Redid whole sections of the app navigation and better integrated
            Branch deep linking so that{" "}
            <span className="h-bodies">
              {" "}
              our CRM teams can now reach members and navigate them almost
              anywhere in the app
            </span>
            .
          </li>
          <li className="m-bodies">
            <span className="h-bodies">
              {" "}
              We incorporated Emarsys Integration for 5 world regions{" "}
            </span>{" "}
            to support the 12 countries the app is available in.
          </li>
          <li className="m-bodies">
            We built in preferred language content and app functionality that
            supports four content languages, and{" "}
            <span className="h-bodies">
              {" "}
              allows users to seamlessly experience language specific content
            </span>
            .
          </li>
          <li className="m-bodies">
            Expanded our country base from 6 to 12{" "}
            <span className="h-bodies">
              added Sweden, Canada, Denmark, Austalia, Austria & Belgium
            </span>
            .
          </li>
        </ol>
      </div>
    </>
  );
};

export default Miletstones;
