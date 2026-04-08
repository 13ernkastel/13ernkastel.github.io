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
                <th scope="col" className="col-cve">CVE</th>
                <th scope="col" className="col-project">Project</th>
                <th scope="col" className="col-severity">Severity</th>
                <th scope="col" className="col-record">Public record</th>
                <th scope="col" className="col-reference">GitHub reference</th>
              </tr>
            </thead>
            <tbody>
              {researchRecords.map((record) => (
                <tr key={record.cve}>
                  <td className="research-cve">
                    <a href={record.recordUrl} target="_blank" rel="noreferrer">
                      {record.cve}
                    </a>
                  </td>
                  <td className="research-project">{record.project}</td>
                  <td className="research-severity">
                    <span className={`severity-pill ${record.severity.toLowerCase()}`}>
                      {record.severity}
                    </span>
                  </td>
                  <td className="research-record">
                    <a href={record.recordUrl} target="_blank" rel="noreferrer">
                      {record.recordLabel}
                    </a>
                  </td>
                  <td className="research-reference">
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
