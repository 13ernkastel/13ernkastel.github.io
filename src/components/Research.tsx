import React from "react";
import "../assets/styles/Research.scss";
import { profile, researchRecords } from "../data/site";
import ResearchTable from "./ResearchTable";

interface ResearchProps {
  onNavigateHome: () => void;
}

function Research({ onNavigateHome }: ResearchProps) {
  const publicGithubRefs = researchRecords.filter((record) => Boolean(record.githubUrl)).length;
  const criticalOrHighCount = researchRecords.filter((record) =>
    ["Critical", "High"].includes(record.severity),
  ).length;
  const reservedCount = researchRecords.filter((record) => record.severity === "Reserved").length;

  return (
    <div className="container research-container" id="cve">
      <div className="items-container">
        <div className="research-page-hero">
          <p className="eyebrow">Public disclosure archive</p>
          <h1>CVE</h1>
          <p className="section-copy">
            This page keeps the public CVE record separate from the landing page, so the main site stays
            easier to read while the disclosure details remain one click away. Every row links back to a
            public record and, when available, a public GitHub fix, issue, or commit.
          </p>
          <div className="research-page-actions">
            <button type="button" className="secondary-button button-reset" onClick={onNavigateHome}>
              Back to home
            </button>
            <a className="secondary-button" href={profile.githubSearchUrl} target="_blank" rel="noreferrer">
              Browse merged PRs
            </a>
          </div>
        </div>

        <div className="research-summary-grid">
          <div className="research-summary-card">
            <span className="summary-label">Public records</span>
            <strong>{researchRecords.length}</strong>
            <p>Traceable entries currently listed in the public appendix.</p>
          </div>
          <div className="research-summary-card">
            <span className="summary-label">Critical or High</span>
            <strong>{criticalOrHighCount}</strong>
            <p>Higher-severity records that deserve the fastest review.</p>
          </div>
          <div className="research-summary-card">
            <span className="summary-label">GitHub-linked</span>
            <strong>{publicGithubRefs}</strong>
            <p>Rows that already point to a public fix PR, issue, or commit.</p>
          </div>
        </div>

        <div className="research-note">
          <p>
            Reserved IDs stay marked as reserved until the disclosure is public. Right now
            that applies to {reservedCount} record{reservedCount === 1 ? "" : "s"} in this list.
          </p>
        </div>
        <ResearchTable />
      </div>
    </div>
  );
}

export default Research;
