# ServiceNow SecOps & Automated Intelligence Response Framework

**Status:** Complete ✅

A scoped ServiceNow application that bridges Security Operations (SecOps) and IT Service Management. Raw security data is converted into actionable intelligence through automated workflows, AI-driven threat analysis, and a secure audit trail.

## Demo

[▶ Watch the finale](https://youtu.be/8mQg__wuzi4) — the full walkthrough, tying together intake, AI triage, MITRE mapping, escalation, and the SOC dashboard.

Want more detail?
- [Deep dive: Securing Custom AI](https://youtu.be/W8k8ZqyxyMU) — a closer look under the hood
- [Overview: Vulnerability Assessment Workflow](https://youtu.be/9X2_If6b-FI) — a shorter look at the AI vulnerability scenarios

## Core Features & Architecture

**Automated Response & Escalation Workflows**
Flow Designer workflows and Automated Test Framework (ATF) sequences automatically trigger and validate Priority 1 (P1) escalations, routing critical tickets and notifying the appropriate security teams without manual intervention.

**Generative AI & Threat Mapping**
A Generative AI API (Gemini) analyzes incoming threat data, maps it to MITRE ATT&CK techniques, and generates mitigation and isolation steps automatically.

**Dynamic Logic & Data Security**
UI Policies and Client Scripts enforce dynamic form logic, isolate sensitive data, and maintain confidentiality across the incident lifecycle.

**Audit Logging & Compliance**
Server-side Business Rules and GlideSystem (`gs`) API logging maintain a high-fidelity audit trail across the automated response process.

**Custom Security Incident Table**
Purpose-built for core SOC workflows — tracks Attack Type (Phishing, Malware, etc.), MITRE Technique IDs, Suspicious URLs, and Priority/Impact.

**Role-Based Access Control (RBAC)**
Custom roles for SOC Analysts, SOC Managers, and restricted stakeholders simulate enterprise-grade data governance.

**SOC Dashboard**
"SOC Incident Overview" dashboard with widgets for Incident Detection Trend (90 days), Incidents by Attack Type, Incidents by Severity, Incident Lifecycle Status, Resolved Incidents by SOC Team, and Critical Incidents in Open State.

## What's Included

- Fully deployed scoped application with a custom Security Incident table and Record Producer intake form
- Gemini-powered AI triage flow that classifies incidents, maps them to MITRE ATT&CK, and flags prompt-injection/jailbreak attempts against the AI itself
- VirusTotal URL analysis integration for suspicious link scanning
- P1 escalation and notification workflows validated with ATF
- SOC Incident Overview dashboard for reporting
- Full audit trail via server-side Business Rules and `gs` API logging

## Repository Structure

- `screenshots/` — visual documentation: custom forms, UI policy logic, RBAC impersonation views, analytics dashboards
- `proof-of-concept/` — walkthrough videos and supporting files demonstrating the application in action

## Roadmap

- **Malicious Actor Escalation** — workflow triggers to detect and escalate incidents involving injection attempts or lateral movement, with automated isolation of the user's access and lockdown of compromised CIs
- **Update Set Packaging** — a clean, deployment-ready Update Set for Test/Prod environments

## Business Value

- **SecOps & ITSM Convergence** — extends the platform beyond standard ITIL into specialized cybersecurity use cases
- **Automation for Scale** — reduces Mean Time to Respond (MTTR) via Flow Designer-driven P1 escalation and notification
- **Actionable Intelligence** — maps vulnerabilities to business assets and users via Generative AI, giving security teams instant, MITRE-aligned mitigation steps

## Technical Proficiency Demonstrated

- Flow Designer orchestration, ATF validation, UI Policies, and Client Scripts
- Scoped application architecture and RBAC for secure application governance
- Server-side Business Rules and system logging for enterprise compliance

---

Portfolio: [github.com/Yaaseen1](https://github.com/Yaaseen1)
