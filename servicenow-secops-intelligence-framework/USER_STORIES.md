# User Stories and Acceptance Criteria

ServiceNow SecOps & Automated Intelligence Response Framework

These stories describe the requirements the application was built to meet. See the [README](README.md) for the demo and architecture.

---

## 1. AI-assisted triage

**As a** SOC analyst, **I want** incoming security requests summarized and classified automatically, **so that** I can triage them faster and spend my time on investigation.

**Acceptance criteria**
- A submitted description is summarized into a short description.
- The threat is classified and mapped to MITRE ATT&CK techniques.
- Suggested mitigation steps are generated.
- An analyst can review and edit all AI output before acting on it.

---

## 2. Suspicious URL analysis

**As a** SOC analyst, **I want** suspicious URLs checked against VirusTotal automatically, **so that** I don't have to look them up by hand.

**Acceptance criteria**
- The VirusTotal result is saved on the security incident record.
- A failed or timed-out call is logged and does not stop the workflow.

---

## 3. Automated P1 escalation

**As a** security lead, **I want** critical (P1) incidents escalated automatically, **so that** high-severity threats are not missed.

**Acceptance criteria**
- A P1 incident triggers the escalation workflow.
- The correct roles are notified.
- The escalation is logged for audit.

---

## 4. Securing the AI

**As a** security lead, **I want** attempts to inject instructions into the AI flagged, **so that** sensitive information is not exposed and AI output is not trusted blindly.

**Acceptance criteria**
- A test injection attempt is flagged and logged.
- AI output is shown for analyst review
