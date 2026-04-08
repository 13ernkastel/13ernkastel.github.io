export const profile = {
  name: "Lennon Chia",
  role: "Upstream security researcher and OSS contributor",
  summary:
    "I land upstream fixes across auth, SSRF, retrieval, runtime hardening, harness engineering, docs CI, and maintainer-facing follow-through. This portfolio now uses a React portfolio template structure, but the content is driven by live GitHub work that has actually merged into external repositories.",
  avatarUrl: "https://avatars.githubusercontent.com/13ernkastel",
  githubUrl: "https://github.com/13ernkastel",
  githubReadmeUrl: "https://github.com/13ernkastel/13ernkastel",
  githubSearchUrl:
    "https://github.com/search?q=is%3Apr+author%3A13ernkastel+is%3Amerged+-user%3A13ernkastel&type=pullrequests",
  siteRepoUrl: "https://github.com/13ernkastel/13ernkastel.github.io",
  snapshotDate: "2026-04-08",
};

export const stats = [
  { value: "13", label: "External merged PRs" },
  { value: "4", label: "Upstream organizations" },
  { value: "4", label: "External repositories" },
  { value: "11", label: "Public CVEs in appendix" },
];

export const focusAreas = [
  {
    title: "Security and trust boundaries",
    description:
      "Auth bypasses, SSRF routes, shell escape paths, file-tool scope breaks, stored XSS, unsafe import paths, and agentic workflow trust boundaries.",
    chips: ["Auth", "SSRF", "Shell Escape", "Stored XSS", "Access Control", "File Handling", "Agent Security"],
  },
  {
    title: "Mergeable patch shape",
    description:
      "Narrow fixes with tests, explicit reviewer rationale, and conflict resolution that keeps the maintainer blast radius low while making the system safer.",
    chips: ["Tests", "Scoped Diffs", "Reviewer Follow-through", "Conflict Resolution", "Docs Cleanup"],
  },
  {
    title: "Harness engineering and guardrails",
    description:
      "Harness engineering, docs CI, runtime status visibility, deployment guidance, and compatibility notes that stop the issue from drifting back in.",
    chips: ["Harness Engineering", "GitHub Actions", "Docs CI", "Runtime Hardening", "Deployment Docs", "Compatibility Guidance"],
  },
];

export const timelineEntries = [
  {
    date: "2026-04-08",
    repo: "bytedance/deer-flow",
    title: "#1963 deployment sizing guidance",
    description:
      "Grouped repeated deployment-sizing questions into a single upstream docs PR with practical host guidance for dev, Docker, and production runs.",
    url: "https://github.com/bytedance/deer-flow/pull/1963",
  },
  {
    date: "2026-04-07",
    repo: "NVIDIA/NemoClaw",
    title: "#1263 lifecycle guidance cleanup",
    description:
      "Reworked OpenShell lifecycle guidance around maintainable, version-agnostic language after maintainer review.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1263",
  },
  {
    date: "2026-04-06",
    repo: "NVIDIA/NemoClaw",
    title: "#1499 immutable symlink hardening visibility",
    description:
      "Made security hardening status visible in a way reviewers and operators can evaluate quickly.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1499",
  },
  {
    date: "2026-04-05",
    repo: "HKUDS/OpenHarness",
    title: "#32 path-rule enforcement for file tools",
    description:
      "Closed a file-tool repository-scope bypass path through a narrow upstream patch.",
    url: "https://github.com/HKUDS/OpenHarness/pull/32",
  },
  {
    date: "2026-04-05",
    repo: "volcengine/OpenViking",
    title: "#1133 private-network SSRF hardening",
    description:
      "Prevented resource-ingestion requests from reaching internal network targets.",
    url: "https://github.com/volcengine/OpenViking/pull/1133",
  },
  {
    date: "2026-03-29",
    repo: "bytedance/deer-flow",
    title: "#1547 host shell escape remediation",
    description:
      "Landed the upstream patch for a LocalSandboxProvider host shell escape issue.",
    url: "https://github.com/bytedance/deer-flow/pull/1547",
  },
];

export const selectedWork = [
  {
    repo: "bytedance/deer-flow",
    title: "#1963 deployment sizing guidance",
    description:
      "Clarified minimum and recommended deployment sizing for practical server operation.",
    url: "https://github.com/bytedance/deer-flow/pull/1963",
  },
  {
    repo: "NVIDIA/NemoClaw",
    title: "#1499 immutable symlink hardening status",
    description:
      "Surfaced immutable symlink hardening state in a way maintainers can track.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1499",
  },
  {
    repo: "NVIDIA/NemoClaw",
    title: "#1139 docs link validation",
    description:
      "Added PR-time markdown link validation to keep broken references out of main.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1139",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#1182 task ownership enforcement",
    description:
      "Fixed task polling ownership leakage so access stays tied to the owning identity.",
    url: "https://github.com/volcengine/OpenViking/pull/1182",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#1162 tags metadata retrieval",
    description:
      "Added tags metadata support for cross-subtree retrieval behavior.",
    url: "https://github.com/volcengine/OpenViking/pull/1162",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#996 bot proxy auth enforcement",
    description:
      "Removed unauthenticated access to bot proxy chat endpoints.",
    url: "https://github.com/volcengine/OpenViking/pull/996",
  },
  {
    repo: "bytedance/deer-flow",
    title: "#1389 stored XSS mitigation",
    description:
      "Forced safe download handling for active artifact MIME types to mitigate stored XSS.",
    url: "https://github.com/bytedance/deer-flow/pull/1389",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#344 ZIP path validation",
    description:
      "Rejected unsafe .ovpack ZIP member paths during import.",
    url: "https://github.com/volcengine/OpenViking/pull/344",
  },
];

export const coverageByOrg = [
  {
    label: "volcengine",
    count: "6",
    highlights: "Auth, SSRF, retrieval, import validation, task ownership, plugin stability",
  },
  {
    label: "NVIDIA",
    count: "3",
    highlights: "Docs CI, lifecycle guidance, runtime hardening visibility",
  },
  {
    label: "bytedance",
    count: "3",
    highlights: "Shell escape, stored XSS, deployment guidance",
  },
  {
    label: "HKUDS",
    count: "1",
    highlights: "File-tool path rule enforcement",
  },
];

export const coverageByRepo = [
  {
    label: "volcengine/OpenViking",
    count: "6",
    highlights: "Auth, SSRF, retrieval, task ownership, import validation, plugin stability",
  },
  {
    label: "NVIDIA/NemoClaw",
    count: "3",
    highlights: "Runtime hardening visibility, docs CI, compatibility guidance",
  },
  {
    label: "bytedance/deer-flow",
    count: "3",
    highlights: "Shell escape, stored XSS, deployment sizing docs",
  },
  {
    label: "HKUDS/OpenHarness",
    count: "1",
    highlights: "File-tool path rule enforcement",
  },
];

export const coverageFocus =
  "My current focus is agentic AI security and harness engineering: reviewing agent workflows, identifying unsafe trust assumptions, and patching issues through collaborative maintainer review so systems get safer while I keep learning through the process.";

export const researchRecords = [
  {
    cve: "CVE-2026-22207",
    project: "volcengine/OpenViking",
    severity: "Critical",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22207",
    githubLabel: "Closed hardening PR #1132",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/1132",
  },
  {
    cve: "CVE-2026-22680",
    project: "volcengine/OpenViking",
    severity: "Medium",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22680",
    githubLabel: "Fix PR #1182",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/1182",
  },
  {
    cve: "CVE-2026-22682",
    project: "HKUDS/OpenHarness",
    severity: "High",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22682",
    githubLabel: "Fix PR #32",
    githubUrl: "https://github.com/HKUDS/OpenHarness/pull/32",
  },
  {
    cve: "CVE-2026-25858",
    project: "macrozheng/mall",
    severity: "Critical",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-25858",
    githubLabel: "Deleted GitHub issue #946 is cited by the public CVE record. No public fix PR found.",
  },
  {
    cve: "CVE-2026-25870",
    project: "doramart/DoraCMS",
    severity: "Medium",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-25870",
    githubLabel: "Public issue #268",
    githubUrl: "https://github.com/doramart/DoraCMS/issues/268",
  },
  {
    cve: "CVE-2026-26218",
    project: "newbee-ltd/newbee-mall",
    severity: "Critical",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-26218",
    githubLabel: "Public issue #119",
    githubUrl: "https://github.com/newbee-ltd/newbee-mall/issues/119",
  },
  {
    cve: "CVE-2026-26219",
    project: "newbee-ltd/newbee-mall",
    severity: "Critical",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-26219",
    githubLabel: "Public issue #119",
    githubUrl: "https://github.com/newbee-ltd/newbee-mall/issues/119",
  },
  {
    cve: "CVE-2026-28518",
    project: "volcengine/OpenViking",
    severity: "High",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-28518",
    githubLabel: "Fix PR #344",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/344",
  },
  {
    cve: "CVE-2026-32859",
    project: "bytedance/deer-flow",
    severity: "Medium",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-32859",
    githubLabel: "Fix PR #1389",
    githubUrl: "https://github.com/bytedance/deer-flow/pull/1389",
  },
  {
    cve: "CVE-2026-34430",
    project: "bytedance/deer-flow",
    severity: "High",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-34430",
    githubLabel: "Fix PR #1547",
    githubUrl: "https://github.com/bytedance/deer-flow/pull/1547",
  },
  {
    cve: "CVE-2026-34999",
    project: "volcengine/OpenViking",
    severity: "Medium",
    nvdUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-34999",
    githubLabel: "Fix PR #996",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/996",
  },
];

export const linkCards = [
  {
    title: "GitHub Profile",
    description: "Current profile, repositories, and contribution history.",
    url: profile.githubUrl,
  },
  {
    title: "Merged PR Search",
    description: "Live merged external pull-request search on GitHub.",
    url: profile.githubSearchUrl,
  },
  {
    title: "Profile README",
    description: "The profile repo that mirrors the merged-work-first summary.",
    url: profile.githubReadmeUrl,
  },
  {
    title: "Site Repository",
    description: "Source for this GitHub Pages portfolio implementation.",
    url: profile.siteRepoUrl,
  },
];
