# Automated Asset Lifecycle Engine (AALE)

*A custom ServiceNow scoped application bridging ITOM, ITAM, and ITSM.*

**Status: 🚧 In progress.** The ITOM-to-ITAM ingestion and lifecycle automation are working end to end. Real device discovery (MID Server) and the ITSM workflow layer (requests and approvals) are next.

## 📌 Overview

AALE is a scoped application that acts as an automated bridge between network visibility and asset compliance. It accepts device events, stores them, evaluates them against lease and warranty data, and sets each asset's lifecycle state automatically.

## 🎯 The Business Problem

Enterprises struggle with the gap between network visibility (ITOM) and asset compliance (ITAM):

- **ITOM** detects what is physically running on the network.
- **ITAM** tracks what the organization has paid for, licensed, and authorized.

When these are siloed, you get unrecorded software, hardware running past its lease or warranty, and audit risk.

## ✅ What's Built

| Component | Details |
|---|---|
| **Scripted REST API** | `POST /api/x_1839598_automa_0/aale_inbound_events/events` validates `hostname` and `event_type` (`hardware_status` or `software_detected`), then writes the event to Hardware Stage. Returns `201` with the new record's sys_id, or `400` on bad input. |
| **Hardware Stage table** | Staging table for inbound events (hostname, event type, CI class, serial number, lease/warranty expiration, detected software JSON, etc.). |
| **Asset Lifecycle table** | The record of each asset and its lifecycle state. |
| **Flow Designer flow** | "Process Inbound Hardware Data" triggers when a Hardware Stage record is created, creates an Asset Lifecycle record, and sets its state (rules below). |
| **Business Rule** | Defaults Lifecycle State to *In Stock* if it is ever empty. |
| **MID Server** | Installed, connected and validated on the instance, ready for Discovery. |

### Lifecycle rules

| Condition | Resulting state |
|---|---|
| Hardware event, lease or warranty expires within 30 days (empty dates ignored) | **Pending Refresh** |
| Hardware event, dates not expiring soon or empty | **In Stock** |
| Software-detected event | **Pending Review** |

### Sample payload

```json
{
  "hostname": "API-TEST-001",
  "event_type": "hardware_status",
  "ci_class": "cmdb_ci_computer",
  "serial_number": "SN-API-TEST-001",
  "lease_expiration": "2026-11-05"
}
```

Expected response: `201 Created` with `"status": "accepted"`. The new asset appears in Asset Lifecycles as **Pending Refresh**.

## 🗺️ Roadmap (next)

**Up next**
- **ITOM: MID Server + Discovery** feeding real device data into Hardware Stage (events are currently simulated through the REST API; the MID Server is already installed, connected and validated)
- **ITSM layer:** auto-create a Service Catalog request to procurement for *Pending Refresh* assets, and an approval and software-removal workflow for *Pending Review* assets

**Further out**
- Identification & Reconciliation (IRE) for duplicate-safe CI handling
- Reference fields linking lifecycle records to CMDB CIs
- Scheduled sweep and notifications for expiring assets

## 🛠️ Technical Highlights

- Scoped application architecture with namespace isolation
- Scripted REST API with input validation and proper HTTP status codes
- Flow Designer logic with date-based branching
- Staging-table pattern separating raw inbound data from managed asset records
- Business Rule data safeguards
