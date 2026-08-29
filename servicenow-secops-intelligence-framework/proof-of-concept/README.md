# ServiceNow SecOps & Automated Intelligence Response Framework — Proof of Concept

**Status:** Complete

This folder houses video demonstrations of the custom scoped application, showing how the framework operates in real time. Shorter clips are uploaded directly below; longer walkthroughs are hosted as unlisted videos on YouTube and linked here.

## Proof of Concept Videos

### 1. Security Incident Form Functionality (Walkthrough)
**Overview:** A quick look at the core functionality of the custom form, demonstrating how it currently works and handles data.
**Watch:** [Security Incident Form Functionality](Security%20Incident%20Form%20Functionality(Walkthrough).mp4)

### 2. Zero-Touch AI Triage & MITRE Mapping (Walkthrough)
**Overview:** An end-to-end demonstration of a custom Generative AI integration that automates Level 1 SOC triage by mapping raw threat descriptions to the MITRE ATT&CK framework.
**Watch:** [Zero-Touch AI Triage & MITRE Mapping](Zero-Touch%20AI%20Triage%20%26%20MITRE%20Mapping%20(Walkthrough).mp4)

### More Walkthroughs (hosted on YouTube, unlisted)
*Longer demos too large for direct upload — hosted unlisted on the At Your Service Now YouTube channel.*

- **SecOps Application Finale — Validating Intent Detection** — Final walkthrough validating intent detection across test scenarios, including a malicious URL case. [Watch](https://youtu.be/9X2_If6b-FI)
- **Securing Custom AI — Part 2** — Continuation of the custom AI security hardening walkthrough. [Watch](https://youtu.be/W8k8ZqyxyMU)
- **Securing the AI Workflow — Vulnerability Assessment** — Vulnerability assessment walkthrough, including an unescaped double-quotes injection scenario. [Watch](https://youtu.be/8mQg__wuzi4)

## Key Architecture & Business Impact
- **Frictionless UX** — end-users report threats via a minimal Service Portal Record Producer without needing to decipher complex ITIL terminology
- **Asynchronous Processing** — a background Flow passes the payload via REST API to Google's Gemini LLM, ensuring zero front-end lag for the submitter
- **Strict AI Parsing** — custom prompt engineering forces a structured JSON response, preventing chatty markdown or formatting errors
- **Automated Data Mapping** — by the time the SOC team opens the incident queue, the MITRE ID (e.g., T1486 – Data Encrypted for Impact), incident title, and a technical summary are
