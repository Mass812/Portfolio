import React from "react";
import "./Resume.scss";
import mvp from "../../Assets/mvp.png";

const Milestones = () => {
  return (
    <>
      <div>
        <div className="m-title">Awards</div>

        <div className="mvp-image-parent">
        <div className="mvp-text">June 2022: Global MVP Recognition Award</div>
          <img
            src={mvp}
            alt={"mvp award"}
            className="mvp-image"
            style={{ height: 280, width: 280 }}
          />
        </div>

        <div className="m-title" >Scale</div>
        <ul>
          <li className="m-bodies">
            Content library: <span className="h-bodies">900+ video classes, 40+ programs, 100+ audio meditations</span>
          </li>
          <li className="m-bodies">
            Reach: <span className="h-bodies">launched in 12 countries, with content in Spanish, French and German</span>
          </li>
          <li className="m-bodies">
            Lifetime downloads: <span className="h-bodies">327k iOS, 221k Android</span>
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
              allow DynamoDB's Engines to operate better on our data
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
            an EastSearch Cluster that runs 24/7, I wrote a keywords'
            functionality to do the same thing. Moving the filters to the backend handled
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
              Emarsys Integration for 5 world regions{" "}
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
            Expanded our app store and google play presence from 6 to 12 countries{" "}
            <span className="h-bodies">
              added Sweden, Canada, Denmark, Australia, Austria & Belgium
            </span>
            .
          </li>
        </ol>
      </div>
    </>
  );
};

export default Milestones;
