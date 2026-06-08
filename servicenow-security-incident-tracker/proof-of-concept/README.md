# 🛡️ ServiceNow SecOps & Automated Intelligence Response Framework

**Status:** 🧪 Active Testing & Optimization Phase

A comprehensive, scoped ServiceNow application designed to bridge the gap between **Security Operations (SecOps)** and **IT Service Management (ITSM)**. This framework transforms raw security data into **Actionable Intelligence** through automated workflows, integrated Configuration Item (CI) tracking, and advanced analytics.

---

## 💡 Overview

Security teams often face alert fatigue and delayed response times due to manual data aggregation. This custom application automates the initial triage and response phases. By integrating the Gemini API directly into the incident lifecycle, the framework automatically enriches security alerts, categorizes threats, and generates actionable response strategies without manual intervention.

## ✨ Key Features

* **Automated Threat Triage:** Ingests and categorizes security incidents in real-time.
* **AI-Powered Context:** Utilizes the Gemini API to analyze alert payloads and suggest remediation steps.
* **Seamless ITSM Integration:** Automatically cross-references affected CIs to assess business impact.
* **Scoped Architecture:** Safely contained custom application ensuring zero interference with global platform processes.

---

## 🎥 Demonstrations & Proof of Concept

*(Note: Click the videos below to see the automated workflows in action.)*

### 1. Automated Incident Creation & AI Enrichment
> **Scenario:** A raw security alert is ingested. Watch how the framework automatically triggers the AI integration to populate the remediation notes.
<video src="demos/incident_enrichment.mp4" controls="controls" muted="muted" width="100%"></video>

### 2. CI Impact Analysis Workflow
> **Scenario:** Demonstrating the cross-referencing capabilities when a critical server is flagged in an incident. 
<video src="demos/ci_impact_workflow.mp4" controls="controls" muted="muted" width="100%"></video>

---

## ⚙️ Technical Stack

* **Platform:** ServiceNow (Personal Developer Instance)
* **Integrations:** REST API, Gemini API
* **Core Modules:** SecOps, ITSM, CMDB

---

## 🛠️ Installation / PDI Setup

1. Fork or clone this repository to your local machine.
2. Link your ServiceNow Personal Developer Instance (PDI) to this GitHub repository via Studio.
3. Import the scoped application from source control.
4. Configure the REST messages and insert your API keys in the designated system properties.
