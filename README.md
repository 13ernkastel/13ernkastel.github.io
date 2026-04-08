# 13ernkastel.github.io

React portfolio site for `13ernkastel`, adapted from [`yujisatojr/react-portfolio-template`](https://github.com/yujisatojr/react-portfolio-template).

## What it shows

- merged pull requests into external upstream repositories
- organization and repository coverage across current GitHub work
- current focus areas including agentic AI security, harness engineering, code review, and collaborative patching
- a secondary public research appendix linked through NVD and GitHub

## Stack

- React
- TypeScript
- SCSS
- Material UI
- GitHub Pages with the production build committed at the repository root

## Local development

```bash
npm ci
npm start
```

## Build

```bash
npm run build
```

## Publish

`npm run build` writes the production site into `build/`. For GitHub Pages on this repo, the
built assets are copied to the repository root and pushed on `main`, so the user site stays
public without requiring a workflow-based deployment path.

Published URL:

- https://13ernkastel.github.io/

## Data sources

- public GitHub pull request metadata
- public CVE records from NVD
- private local notes and working archives
