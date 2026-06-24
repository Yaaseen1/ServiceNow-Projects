# 🛡️ ServiceNow SecOps & Automated Intelligence Response Framework

**Status:** 🚧 Work in Progress

This is a new, in-progress repository designed to house video demonstrations of this custom scoped application. The purpose of this repo is simply to show how the framework operates in real-time. 

*More walkthrough videos will be added as development continues.*

---

## 🎥 Proof of Concept Videos

### 1. Security Incident Form Functionality (Walkthrough)
> **Overview:** A quick look at the core functionality of the custom form, demonstrating how it currently works and handles data.
<video src="demos/security_incident_form_functionality.mp4" controls="controls" muted="muted" width="100%"></video>

**2. Zero-Touch AI Triage & MITRE Mapping (Walkthrough)**

> **Overview:** An end-to-end demonstration of a custom Generative AI integration that automates Level 1 SOC triage by seamlessly mapping raw threat descriptions to the MITRE ATT&CK framework.

**Key Architecture & Business Impact:**
* **Frictionless UX:** End-users report threats via a minimal Service Portal Record Producer without needing to decipher complex ITIL terminology.
* **Asynchronous Processing:** A background Flow passes the payload via REST API to Google's Gemini LLM, ensuring zero front-end lag for the submitter.
* **Strict AI Parsing:** Custom prompt engineering forces a structured JSON response, completely preventing chatty markdown or formatting errors.
* **Automated Data Mapping:** By the time the SOC team opens the incident queue, the exact descriptive MITRE ID (e.g., *T1486 - Data Encrypted for Impact*), the Incident title, and a deep-dive technical summary are already populated, bypassing manual administrative triage.
