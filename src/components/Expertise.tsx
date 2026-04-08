import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faCodeBranch, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { focusAreas } from "../data/site";

const icons = [faShieldHalved, faCodeBranch, faScrewdriverWrench];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Security work in focus</h1>
        <p className="section-copy">
          The current emphasis is AI security and harness engineering:
          reviewing agent workflows, challenging unsafe assumptions, and turning
          those findings into mergeable security patches through collaboration with maintainers.
        </p>
        <div className="skills-grid">
          {focusAreas.map((area, index) => (
            <div className="skill" key={area.title}>
              <FontAwesomeIcon icon={icons[index]} size="3x" />
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Current themes:</span>
                {area.chips.map((chip) => (
                  <Chip key={chip} className="chip" label={chip} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
