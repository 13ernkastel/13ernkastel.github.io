import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../assets/styles/Project.scss";
import {
  selectedWork,
  coverageByOrg,
  coverageByRepo,
  coverageFocus,
} from "../data/site";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Merged upstream work</h1>
      <p className="section-copy">
        The cards below are the cleaner view of what has landed: reviewable upstream
        patches, docs hardening, and security remediation with public GitHub history.
      </p>
      <div className="projects-grid">
        {selectedWork.map((item) => (
          <div className="project-card" key={`${item.repo}-${item.title}`}>
            <p className="card-kicker">{item.repo}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              <h2>{item.title}</h2>
            </a>
            <p>{item.description}</p>
            <a className="card-link" href={item.url} target="_blank" rel="noreferrer">
              View merged PR <OpenInNewIcon fontSize="inherit" />
            </a>
          </div>
        ))}
      </div>

      <div className="coverage-section" id="coverage">
        <div className="coverage-header">
          <h2>Coverage</h2>
          <p>{coverageFocus}</p>
        </div>

        <div className="coverage-grid">
          <div className="coverage-panel">
            <h3>By organization</h3>
            <table>
              <thead>
                <tr>
                  <th>Org</th>
                  <th>PRs</th>
                  <th>Highlights</th>
                </tr>
              </thead>
              <tbody>
                {coverageByOrg.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.count}</td>
                    <td>{row.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="coverage-panel">
            <h3>By repository</h3>
            <table>
              <thead>
                <tr>
                  <th>Repository</th>
                  <th>PRs</th>
                  <th>Contribution areas</th>
                </tr>
              </thead>
              <tbody>
                {coverageByRepo.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.count}</td>
                    <td>{row.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
