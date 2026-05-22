# Automated Asset Lifecycle Engine (AALE)
*A Custom ServiceNow Scoped Application Bridging ITOM, ITAM, and ITSM*

## 📌 Overview
The **Automated Asset Lifecycle Engine (AALE)** is a custom scoped application designed to act as an automated bridge between network visibility and asset compliance. 

## 🎯 The Business Problem
Enterprise organizations frequently struggle with the disconnect between network visibility (ITOM) and asset compliance (ITAM):
* **ITOM** detects what is physically running on the network.
* **ITAM** tracks what the organization has actually paid for, licensed, and authorized.

When these two disciplines are siloed, it results in unrecorded software deployments, expired hardware operating without warranties, and significant financial audit risks.

## 💡 The Solution
AALE listens for simulated machine alerts via custom APIs, checks the affected Configuration Item (CI) against custom financial and compliance data models, and automatically triggers zero-touch ITSM workflows.

### Core Automation Scenarios
1. **Unauthorized Software Harvesting:** If an ITOM payload detects unlicensed software on a `cmdb_ci_computer`, the engine triggers an automated workflow to seek managerial approval or assign a software removal task.
2. **Automated Hardware Refresh:** If an infrastructure alert fires on a `cmdb_ci_server` that has passed its lease or warranty expiration, the system programmatically generates a Service Catalog request to the procurement team.

## 🛠️ Repository Contents & Technical Highlights
This repository contains the architecture and codebase for the application, highlighting proficiency in the following areas:

* **Scoped Application Architecture:** Strict namespace isolation and upgrade-safe development.
* **Custom CMDB Data Modeling:** Custom tables with complex reference fields tied directly to CMDB core classes (`cmdb_ci_server`, `cmdb_ci_computer`) extending CI capabilities.
* **Scripted REST APIs:** Inbound endpoints engineered to accept and parse JSON payloads mimicking ITOM discovery events.
* **Identification & Reconciliation Engine (IRE):** Programmatic routing of inbound data through ServiceNow's native identification rules to ensure database integrity and prevent duplicate CI creation.
* **Flow Designer Orchestration:** Automated complex logic, approvals, and programmatic Service Catalog item generation (RITMs/Tasks) without human intervention.
