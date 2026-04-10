export const profile = {
  name: "Lennon Chia",
  role: "AI systems security researcher",
  summary:
    "I review agent systems, harnesses, and AI runtimes for security flaws, validate impact, and work with maintainers to get fixes merged upstream.",
  supportingSummary:
    "Most of the work clusters around trust boundaries, access control, sandbox escape paths, SSRF, stored XSS, and the operational hardening needed to keep the same bug from returning.",
  avatarUrl: "https://avatars.githubusercontent.com/13ernkastel",
  githubUrl: "https://github.com/13ernkastel",
  githubReadmeUrl: "https://github.com/13ernkastel/13ernkastel",
  githubSearchUrl:
    "https://github.com/search?q=is%3Apr+author%3A13ernkastel+is%3Amerged+-user%3A13ernkastel&type=pullrequests",
  siteRepoUrl: "https://github.com/13ernkastel/13ernkastel.github.io",
  snapshotDate: "2026-04-08",
};

export const heroPoints = [
  {
    title: "Find the risk",
    description: "Trace trust boundaries, auth checks, network reachability, and tool exposure in AI-facing systems.",
  },
  {
    title: "Prove the impact",
    description: "Turn suspicious code paths into reproducible cases that maintainers can verify quickly.",
  },
  {
    title: "Land the fix",
    description: "Ship narrowly scoped patches, regression tests, and safer defaults through public pull requests.",
  },
];

export const stats = [
  { value: "13", label: "External merged PRs" },
  { value: "4", label: "Upstream organizations" },
  { value: "4", label: "External repositories" },
  { value: "12", label: "Public security records" },
];

export const focusAreas = [
  {
    title: "AI agent and trust-boundary security",
    description:
      "Agent workflows, access-control boundaries, SSRF paths, unsafe tool exposure, sandbox escape routes, retrieval abuse, and cross-user leakage in AI-facing systems.",
    chips: ["Agent Security", "Access Control", "SSRF", "Sandbox Escape", "Stored XSS", "Trust Boundaries"],
  },
  {
    title: "Security review and patch engineering",
    description:
      "Security-oriented code review, proof-of-impact reproduction, narrow remediation patches, regression tests, and maintainer-facing rationale that gets fixes merged cleanly.",
    chips: ["Code Review", "Repro Cases", "Regression Tests", "Scoped Fixes", "Maintainer Collaboration", "Security Triage"],
  },
  {
    title: "Harness engineering for safer AI systems",
    description:
      "Harness engineering, safer defaults, runtime guardrails, docs and CI checks, and deployment guidance that reduce the chance insecure AI behavior drifts back into production.",
    chips: ["Harness Engineering", "Safer Defaults", "Guardrails", "Runtime Hardening", "Docs CI", "Deployment Safety"],
  },
];

export const timelineEntries = [
  {
    date: "2026-04-06",
    repo: "NVIDIA/NemoClaw",
    title: "#1499 immutable symlink hardening visibility",
    description:
      "Surfaced filesystem hardening state so maintainers and operators can verify security posture quickly.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1499",
  },
  {
    date: "2026-04-05",
    repo: "HKUDS/OpenHarness",
    title: "#32 path-rule enforcement for file tools",
    description:
      "Closed a file-tool repository-scope bypass path so agent-triggered file access stays inside policy.",
    url: "https://github.com/HKUDS/OpenHarness/pull/32",
  },
  {
    date: "2026-04-05",
    repo: "volcengine/OpenViking",
    title: "#1133 private-network SSRF hardening",
    description:
      "Blocked resource-ingestion requests from reaching internal network targets.",
    url: "https://github.com/volcengine/OpenViking/pull/1133",
  },
  {
    date: "2026-04-03",
    repo: "volcengine/OpenViking",
    title: "#1182 task ownership enforcement",
    description:
      "Stopped cross-user task metadata exposure by tying task reads and deduplication to the authenticated owner.",
    url: "https://github.com/volcengine/OpenViking/pull/1182",
  },
  {
    date: "2026-03-29",
    repo: "bytedance/deer-flow",
    title: "#1547 host shell escape remediation",
    description:
      "Removed a dangerous default that let local sandbox bash escape onto the host.",
    url: "https://github.com/bytedance/deer-flow/pull/1547",
  },
  {
    date: "2026-03-26",
    repo: "bytedance/deer-flow",
    title: "#1389 stored XSS mitigation",
    description:
      "Forced download handling for active artifact content to cut off a stored XSS execution path.",
    url: "https://github.com/bytedance/deer-flow/pull/1389",
  },
];

export const selectedWork = [
  {
    repo: "bytedance/deer-flow",
    title: "#1547 host shell escape remediation",
    description:
      "Removed a dangerous host-bash default so local AI sandbox execution cannot silently escape onto the host.",
    url: "https://github.com/bytedance/deer-flow/pull/1547",
  },
  {
    repo: "HKUDS/OpenHarness",
    title: "#32 path-rule enforcement for file tools",
    description:
      "Fixed a file-tool permission gap so agent-influenced reads and writes respect configured path rules.",
    url: "https://github.com/HKUDS/OpenHarness/pull/32",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#1182 task ownership enforcement",
    description:
      "Closed task metadata leakage so background task state stays scoped to the authenticated owner.",
    url: "https://github.com/volcengine/OpenViking/pull/1182",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#1133 private-network SSRF hardening",
    description:
      "Blocked ingestion-time requests from reaching internal network destinations.",
    url: "https://github.com/volcengine/OpenViking/pull/1133",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#996 bot proxy auth enforcement",
    description:
      "Required authentication on bot proxy routes that previously allowed unauthenticated access.",
    url: "https://github.com/volcengine/OpenViking/pull/996",
  },
  {
    repo: "bytedance/deer-flow",
    title: "#1389 stored XSS mitigation",
    description:
      "Prevented inline execution of active artifact content served back to users.",
    url: "https://github.com/bytedance/deer-flow/pull/1389",
  },
  {
    repo: "volcengine/OpenViking",
    title: "#344 ZIP path validation",
    description:
      "Rejected malicious ZIP member paths during import to stop path traversal through package ingestion.",
    url: "https://github.com/volcengine/OpenViking/pull/344",
  },
  {
    repo: "NVIDIA/NemoClaw",
    title: "#1499 immutable symlink hardening status",
    description:
      "Made symlink hardening state visible so filesystem protections are easier to audit and keep in place.",
    url: "https://github.com/NVIDIA/NemoClaw/pull/1499",
  },
];

export const coverageByOrg = [
  {
    label: "volcengine",
    count: "6",
    highlights: "Access control, SSRF, retrieval isolation, import validation, task ownership, bot proxy auth",
  },
  {
    label: "NVIDIA",
    count: "3",
    highlights: "Hardening visibility, safer lifecycle guidance, docs CI guardrails",
  },
  {
    label: "bytedance",
    count: "3",
    highlights: "Sandbox escape remediation, stored XSS mitigation, safer AI runtime defaults",
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
    highlights: "Auth, SSRF, retrieval isolation, task ownership, import validation, bot proxy hardening",
  },
  {
    label: "NVIDIA/NemoClaw",
    count: "3",
    highlights: "Runtime hardening visibility, lifecycle risk reduction, docs CI guardrails",
  },
  {
    label: "bytedance/deer-flow",
    count: "3",
    highlights: "Host shell escape, stored XSS, safer AI runtime posture",
  },
  {
    label: "HKUDS/OpenHarness",
    count: "1",
    highlights: "File-tool path rule enforcement",
  },
];

export const coverageFocus =
  "My current work centers on AI systems security research: identifying unsafe trust assumptions in agent systems, harnesses, and tool runtimes, then collaborating with maintainers to ship patches, tests, and guardrails that make AI systems safer.";

export const researchRecords = [
  {
    cve: "CVE-2026-39411",
    project: "Undisclosed",
    severity: "Reserved",
    recordUrl: "https://www.cve.org/CVERecord?id=CVE-2026-39411",
    recordLabel: "CVE.org reserved ID",
    githubLabel: "No public project, fix PR, or GitHub issue is available yet.",
  },
  {
    cve: "CVE-2026-22207",
    project: "volcengine/OpenViking",
    severity: "Critical",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22207",
    recordLabel: "NVD",
    githubLabel: "Fix PR #310",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/310",
  },
  {
    cve: "CVE-2026-22680",
    project: "volcengine/OpenViking",
    severity: "Medium",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22680",
    recordLabel: "NVD",
    githubLabel: "Fix PR #1182",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/1182",
  },
  {
    cve: "CVE-2026-22682",
    project: "HKUDS/OpenHarness",
    severity: "High",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-22682",
    recordLabel: "NVD",
    githubLabel: "Fix PR #32",
    githubUrl: "https://github.com/HKUDS/OpenHarness/pull/32",
  },
  {
    cve: "CVE-2026-25858",
    project: "macrozheng/mall",
    severity: "Critical",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-25858",
    recordLabel: "NVD",
    githubLabel: "Deleted GitHub issue #946 is cited by the public CVE record. No public fix PR found.",
  },
  {
    cve: "CVE-2026-25870",
    project: "doramart/DoraCMS",
    severity: "Medium",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-25870",
    recordLabel: "NVD",
    githubLabel: "Public issue #268",
    githubUrl: "https://github.com/doramart/DoraCMS/issues/268",
  },
  {
    cve: "CVE-2026-26218",
    project: "newbee-ltd/newbee-mall",
    severity: "Critical",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-26218",
    recordLabel: "NVD",
    githubLabel: "Public issue #119",
    githubUrl: "https://github.com/newbee-ltd/newbee-mall/issues/119",
  },
  {
    cve: "CVE-2026-26219",
    project: "newbee-ltd/newbee-mall",
    severity: "Critical",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-26219",
    recordLabel: "NVD",
    githubLabel: "Public issue #119",
    githubUrl: "https://github.com/newbee-ltd/newbee-mall/issues/119",
  },
  {
    cve: "CVE-2026-28518",
    project: "volcengine/OpenViking",
    severity: "High",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-28518",
    recordLabel: "NVD",
    githubLabel: "Fix commit 46b3e76",
    githubUrl: "https://github.com/volcengine/OpenViking/commit/46b3e76e28b9b3eee73693720c9ec48820228b72",
  },
  {
    cve: "CVE-2026-32859",
    project: "bytedance/deer-flow",
    severity: "Medium",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-32859",
    recordLabel: "NVD",
    githubLabel: "Fix PR #1389",
    githubUrl: "https://github.com/bytedance/deer-flow/pull/1389",
  },
  {
    cve: "CVE-2026-34430",
    project: "bytedance/deer-flow",
    severity: "High",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-34430",
    recordLabel: "NVD",
    githubLabel: "Fix PR #1547",
    githubUrl: "https://github.com/bytedance/deer-flow/pull/1547",
  },
  {
    cve: "CVE-2026-34999",
    project: "volcengine/OpenViking",
    severity: "Medium",
    recordUrl: "https://nvd.nist.gov/vuln/detail/CVE-2026-34999",
    recordLabel: "NVD",
    githubLabel: "Fix PR #996",
    githubUrl: "https://github.com/volcengine/OpenViking/pull/996",
  },
];

export const linkCards = [
  {
    title: "GitHub Profile",
    description: "Primary profile, repositories, and contribution history.",
    url: profile.githubUrl,
  },
  {
    title: "Merged PR Search",
    description: "Live search for merged pull requests across external repositories.",
    url: profile.githubSearchUrl,
  },
  {
    title: "Profile README",
    description: "The profile repository with the short merged-work-first summary.",
    url: profile.githubReadmeUrl,
  },
  {
    title: "Site Repository",
    description: "Source for this GitHub Pages site and its current presentation.",
    url: profile.siteRepoUrl,
  },
];
