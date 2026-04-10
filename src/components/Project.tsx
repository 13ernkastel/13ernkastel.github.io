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
      <h1>Merged security work</h1>
      <p className="section-copy">
        Start here if you want the clearest view of the work. Every card points to a merged
        upstream fix with public GitHub history, so the issue, patch, and review trail are easy to inspect.
      </p>

      <div className="project-overview-grid">
        <div className="project-overview-card">
          <p className="card-kicker">What lands</p>
          <h2>Public fixes tied to real trust boundaries</h2>
          <p>
            The merged work spans authentication, SSRF, sandboxing, import safety,
            retrieval isolation, and safer runtime defaults in external repositories.
          </p>
        </div>
        <div className="project-overview-card">
          <p className="card-kicker">Why it matters</p>
          <h2>Readable evidence instead of vague claims</h2>
          <p>{coverageFocus}</p>
        </div>
      </div>

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
          <h2>Security coverage</h2>
          <p>
            The tables below show where the public fixes have landed and the main problem
            classes covered in each organization and repository.
          </p>
        </div>

        <div className="coverage-grid">
          <div className="coverage-panel">
            <h3>By organization</h3>
            <div className="table-wrap">
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
          </div>

          <div className="coverage-panel">
            <h3>By repository</h3>
            <div className="table-wrap">
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
    </div>
  );
}

export default Project;
