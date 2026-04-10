import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import "../assets/styles/Main.scss";
import { heroPoints, profile, stats } from "../data/site";

interface MainProps {
  onNavigateToCve: () => void;
}

function Main({ onNavigateToCve }: MainProps) {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile.avatarUrl} alt="Lennon Chia avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
            <a href={profile.githubReadmeUrl} target="_blank" rel="noreferrer" aria-label="Profile README">
              <DescriptionOutlinedIcon />
            </a>
            <a href={profile.siteRepoUrl} target="_blank" rel="noreferrer" aria-label="Site repository">
              <CodeOutlinedIcon />
            </a>
          </div>

          <p className="eyebrow">AI systems security, harness engineering, and safer agent systems</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="summary">{profile.summary}</p>
          <p className="summary-support">{profile.supportingSummary}</p>

          <ul className="hero-points" aria-label="Primary workflow">
            {heroPoints.map((point) => (
              <li key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.description}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="primary-button" href={profile.githubUrl} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <a className="secondary-button" href={profile.githubSearchUrl} target="_blank" rel="noreferrer">
              Browse merged PRs
            </a>
            <button type="button" className="secondary-button button-reset" onClick={onNavigateToCve}>
              CVE
            </button>
          </div>

          <div className="mobile_social_icons">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GitHubIcon />
            </a>
            <a href={profile.githubReadmeUrl} target="_blank" rel="noreferrer" aria-label="Profile README">
              <DescriptionOutlinedIcon />
            </a>
            <a href={profile.siteRepoUrl} target="_blank" rel="noreferrer" aria-label="Site repository">
              <CodeOutlinedIcon />
            </a>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat-tile" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
