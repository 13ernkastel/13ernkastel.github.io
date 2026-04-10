import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { timelineEntries } from "../data/site";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Security timeline</h1>
        <p className="section-copy">
          Recent merged security milestones across upstream repositories. This is the fastest
          way to understand the kind of work landing now, with each item linking straight to
          the public pull request for context.
        </p>
        <VerticalTimeline lineColor="var(--line-strong)">
          {timelineEntries.map((entry) => (
            <VerticalTimelineElement
              key={`${entry.repo}-${entry.title}`}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--panel)",
                color: "var(--surface-text)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--line-soft)",
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--panel)" }}
              date={entry.date}
              iconStyle={{ background: "var(--accent-strong)", color: "var(--bg)" }}
              icon={<FontAwesomeIcon icon={faShieldHalved} />}
            >
              <h3 className="vertical-timeline-element-title">
                <a href={entry.url} target="_blank" rel="noreferrer">
                  {entry.title}
                </a>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.repo}</h4>
              <p>{entry.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
