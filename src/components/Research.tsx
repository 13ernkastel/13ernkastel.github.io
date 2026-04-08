import React from "react";
import "../assets/styles/Research.scss";
import { researchRecords } from "../data/site";

function Research() {
  return (
    <div className="research-container" id="research">
      <div className="items-container">
        <h1>Public research appendix</h1>
        <p className="section-copy">
          This section stays secondary to the merged-work archive. It is here for traceability:
          public research records tied back to NVD and GitHub references only.
        </p>

        <div className="research-table-wrap">
          <table className="research-table">
            <thead>
              <tr>
                <th>CVE</th>
                <th>Project</th>
                <th>Severity</th>
                <th>NVD</th>
                <th>GitHub reference</th>
              </tr>
            </thead>
            <tbody>
              {researchRecords.map((record) => (
                <tr key={record.cve}>
                  <td>
                    <a href={record.nvdUrl} target="_blank" rel="noreferrer">
                      {record.cve}
                    </a>
                  </td>
                  <td>{record.project}</td>
                  <td>
                    <span className={`severity-pill ${record.severity.toLowerCase()}`}>
                      {record.severity}
                    </span>
                  </td>
                  <td>
                    <a href={record.nvdUrl} target="_blank" rel="noreferrer">
                      NVD
                    </a>
                  </td>
                  <td>
                    {record.githubUrl ? (
                      <a href={record.githubUrl} target="_blank" rel="noreferrer">
                        {record.githubLabel}
                      </a>
                    ) : (
                      <span className="note-text">{record.githubLabel}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Research;
