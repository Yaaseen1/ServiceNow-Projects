# 🛡️ ServiceNow SecOps & Automated Intelligence Response Framework

**Status:** ⚙️ Optimization & Tuning Phase

A comprehensive, scoped ServiceNow application designed to bridge the gap between Security Operations (SecOps) and IT Service Management. This framework transforms raw security data into Actionable Intelligence through automated workflows, advanced AI threat analysis, and secure audit logging.

---

## 🚀 Core Features & Architecture

*   **⚡ Automated Response & Escalation Workflows:** Developed advanced **Flow Designer workflows** and **Automated Test Framework (ATF)** sequences. The system automatically triggers and validates Priority 1 (P1) escalations, instantly routing critical tickets and notifying the appropriate security teams without manual intervention.
*   **🤖 Generative AI & Threat Mapping:** Integrated a Generative AI API (Gemini) to analyze incoming threat data against the CMDB. It maps vulnerabilities to specific Configuration Items (CIs) and their ITAM-assigned end-users, automatically generating actionable mitigation and isolation steps aligned with the **MITRE ATT&CK framework**.
*   **⚙️ Dynamic Logic & Data Security:** Utilizes UI policies and Client Scripts to enforce dynamic form logic, isolate sensitive data, and ensure absolute confidentiality across the incident lifecycle.
*   **🛡️ Audit Logging & Compliance:** Implemented server-side Business Rules and GlideSystem (`gs`) API logging to maintain a secure, high-fidelity audit trail, ensuring the entire automated response process meets strict enterprise compliance standards.
*   **🧩 Custom Security Incident Table:** Designed for core SOC workflows. Tracks Attack Type (Phishing, Malware, etc.), MITRE Technique IDs, Suspicious URLs, and Priority/Impact. 
*   **🧑‍💻 Role-Based Access Control (RBAC):** Simulates an enterprise environment with custom roles for SOC Analysts, SOC Managers, and restricted stakeholders to ensure data governance.

---

## ⚙️ Current Project Status: Optimization Phase

The foundational architecture is deployed, and the current focus is entirely on optimization and workflow refinement:

*   **Workflow QA & Tuning:** Stress-testing Flow Designer triggers and ATF sequences to ensure P1 escalations route perfectly under concurrent loads without causing alert fatigue.
*   **Logging Fidelity:** Refining the `gs` API logs within the Business Rules to ensure all automated actions, especially those triggered by the AI API, are captured flawlessly for compliance audits.
*   **Form Performance:** Optimizing Client Scripts and UI Policies to ensure form logic triggers instantaneously without impacting platform performance.

---

## 📸 Repository Structure & Visuals

For a complete visual walkthrough and technical validation of this framework, please explore the directories in this repository (as referenced in `image_f2373e.png`):

*   **`screenshots/`**: Contains visual documentation of the application, including custom forms, UI policy logic, RBAC impersonation views, and analytics dashboards.
*   **`proof-of-concept/`**: Houses the foundational files and configurations demonstrating the underlying application logic and workflow triggers. 

---

## 🗺️ Immediate Roadmap

*   **Malicious Actor Escalation:** Designing immediate workflow triggers to automatically identify and escalate incidents involving users attempting targeted injections or malicious lateral movement. This will include automated actions to instantly isolate the user's access and lock down the compromised CIs.
*   **Update Set Packaging:** Preparing a clean, optimized Update Set for seamless deployment to higher environments (Test/Prod).

---

## 🎯 Business Value & Technical Expertise

### 💼 Business Value
*   **SecOps & ITSM Convergence:** Proves the platform's ability to extend beyond standard ITIL into specialized, high-security cybersecurity use cases.
*   **Automation for Scale:** Reduces Mean Time to Respond (MTTR) by utilizing Flow Designer to immediately escalate P1 threats and notify stakeholders.
*   **Actionable Intelligence:** Leverages Generative AI to map vulnerabilities directly to business assets and users, providing security teams with instant, MITRE-aligned mitigation steps.

### 🛠 Technical Proficiency Demonstrated
*   **Advanced Logic & Automation:** Hands-on functional expertise with Flow Designer orchestration, ATF validation, UI Policies, and Client Scripts.
*   **Secure Application Governance:** Ensuring strict isolation from global system processes through scoped application architecture and RBAC.
*   **Enterprise Compliance:** Utilizing server-side Business Rules and system logging to maintain unassailable audit trails.
