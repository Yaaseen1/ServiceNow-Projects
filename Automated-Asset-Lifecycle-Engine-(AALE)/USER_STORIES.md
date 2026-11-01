# User Stories and Acceptance Criteria

Automated Asset Lifecycle Engine (AALE) — **Status: In progress**

These stories describe the requirements the application is being built to meet. See the [README](README.md) for the overview.

---

## 1. Lifecycle state management

**As an** asset manager, **I want** hardware records to move through defined lifecycle states (for example In Stock, Reviewed/Recycle) through a flow, **so that** asset data stays accurate without manual tracking.

**Acceptance criteria**
- A valid state change updates the asset record.
- An invalid transition is blocked and logged.

---

## 2. Staging and validation

**As an** asset manager, **I want** new hardware loaded into a staging table before it reaches the main record, **so that** bad or duplicate data stays out of the CMDB.

**Acceptance criteria**
- Staged records are validated before they are promoted.
- Records that fail validation are flagged for review.

---

## 3. Discovery and CMDB accuracy

**As an** IT operations lead, **I want** hardware data kept current through Discovery and the MID Server, **so that** incident and change decisions rely on accurate CMDB data.

**Acceptance criteria**
- Discovered hardware is reconciled without creating duplicates.
- Stale records are flagged for review.

---

## 4. Lifecycle visibility for support

**As a** support analyst, **I want** to see an asset's lifecycle state on an incident, **so that** I can decide quickly between a repair and a replacement.

**Acceptance criteria**
- The lifecycle state is visible on the incident form.
- The state updates when the asset record changes.
