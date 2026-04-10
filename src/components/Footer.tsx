import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "../assets/styles/Footer.scss";
import { profile } from "../data/site";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GitHubIcon />
        </a>
        <a href={profile.siteRepoUrl} target="_blank" rel="noreferrer" aria-label="Site repository">
          <DescriptionOutlinedIcon />
        </a>
      </div>
      <p>
        Adapted from the{" "}
        <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">
          react-portfolio-template
        </a>{" "}
        and rebuilt around public security research, merged upstream fixes, and traceable GitHub history.
      </p>
    </footer>
  );
}

export default Footer;
