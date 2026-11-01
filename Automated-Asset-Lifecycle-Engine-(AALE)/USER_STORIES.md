# User Stories and Acceptance Criteria

Automated Asset Lifecycle Engine (AALE) — **Status: In progress**

These stories describe the requirements for the application. The first three are built; the rest are planned. See the [README](README.md) for the overview and roadmap.

---

## Built

### 1. Inbound device events

**As an** IT operations analyst, **I want** device events sent to a REST API that validates them, **so that** only clean data enters the system.

**Acceptance criteria**
- A valid hardware or software event returns 201 and is written to the Hardware Stage table.
- A missing hostname or an invalid event type returns 400.

### 2. Automatic lifecycle state

**As an** asset manager, **I want** each device's lifecycle state set automatically from lease and warranty data, **so that** I don't track expirations by hand.

**Acceptance criteria**
- A hardware event with a lease or warranty expiring within 30 days sets the asset to Pending Refresh.
- A hardware event with later or empty dates sets the asset to In Stock.
- A software-detected event sets the asset to Pending Review.

### 3. Data safeguards

**As an** asset manager, **I want** every asset record to have a lifecycle state, **so that** no asset is left untracked.

**Acceptance criteria**
- If the lifecycle state is empty, it defaults to In Stock.

---

## Planned

### 4. Real device discovery

**As an** IT operations lead, **I want** the MID Server and Discovery to feed real device data into Hardware Stage, **so that** the system runs on actual network data and not simulated events.

### 5. Procurement and approval workflow

**As an** asset manager, **I want** a Service Catalog request created automatically for assets in Pending Refresh, and an approval workflow for assets in Pending Review, **so that** refreshes and software removals are handled without manual follow-up.

### 6. Duplicate-safe CI handling

**As a** CMDB owner, **I want** the Identification and Reconciliation Engine to prevent duplicate configuration items, **so that** the CMDB stays accurate.
