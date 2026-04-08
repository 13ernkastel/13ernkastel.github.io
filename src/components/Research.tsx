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
          public records tied back to CVE.org or NVD plus a public GitHub reference when one
          exists. Reserved IDs stay labeled as reserved until a full public disclosure is
          published.
        </p>

        <div className="research-table-wrap">
          <table className="research-table">
            <thead>
              <tr>
                <th>CVE</th>
                <th>Project</th>
                <th>Severity</th>
                <th>Public record</th>
                <th>GitHub reference</th>
              </tr>
            </thead>
            <tbody>
              {researchRecords.map((record) => (
                <tr key={record.cve}>
                  <td>
                    <a href={record.recordUrl} target="_blank" rel="noreferrer">
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
                    <a href={record.recordUrl} target="_blank" rel="noreferrer">
                      {record.recordLabel}
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
