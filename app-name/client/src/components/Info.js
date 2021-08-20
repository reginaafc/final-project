import React from "react";
import "../assets/css/Info.css";
import { TeamOutlined } from "@ant-design/icons";

function Info(props) {
  return (
    <section className="info-container">
      <div className="row">
        <div className="col-3">
          <p className="teamOutlined">
            <TeamOutlined />
          </p>
        </div>
        <div className="col-8">
          <div className="row-8 about-b">About</div>
          <div className="row-8 info-i">
            Final-project connects nonprofits, donors, and companies in nearly
            every country in the world. We help fellow nonprofits access the
            funding, tools, training, and support they need to serve their
            communities.
          </div>
          <div className="row-8"><a href="/projects" className="buttooon">Donate</a></div>
        </div>
      </div>
    </section>
  );
}

export default Info;
