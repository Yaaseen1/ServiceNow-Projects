# 🛡️ ServiceNow Security Incident Tracker

A custom ServiceNow application built to simulate **SOC (Security Operations Center)** workflows and reinforce **CSA (Certified System Administrator)** concepts.

This app extends **ITSM principles** into a cybersecurity-oriented use case — tracking, analyzing, and resolving security incidents.

---

## 🚀 Features Implemented

### 🧩 Custom Security Incident Table
Designed to support core SOC workflows with specialized fields:
- **Attack type** (Phishing, Malware, Ransomware, etc.)
- **MITRE Technique ID**
- **Suspicious URL** and **IOC tracking**
- **Priority**, **Impact**, and **State**

### ⚙️ UI Policies
Dynamic behavior to improve data accuracy:
- When **Attack type = Phishing**, the **Email Header (raw)** field becomes **visible and mandatory**
- When **State = Resolved**, the **Resolution Notes** field becomes **required**
- When **Attack type = Other**, the **Other details** field is **shown**

### 📂 Application Menu
Organized for efficient navigation:
- **Security Incidents** → List all incidents
- **My Incidents** → View incidents assigned to the logged-in user
- **New Security Incident** → Quickly create a new record

### 🧭 Form Layout
Structured into intuitive sections:
- **Incident Details** – Core ITSM fields
- **Threat Information** – Cybersecurity enrichment fields
- **Resolution Details** – Appears when the incident is resolved
- **Tracking** – For internal notes or related indicators

### 🧑‍💻 Role-Based Structure
Includes roles for realistic SOC access control:
- **SOC Analyst**
- **SOC Manager**
- **Security Incident User**

### 📊 Dashboard & Reporting
Created a custom SOC dashboard to visualize:
- Incident detection trends
- Attack type distribution
- Severity breakdown
- Incident lifecycle status
- Resolved incidents by SOC team
- Open critical incidents

---

## 📸 Screenshots

| Screenshot | Description |
|-------------|--------------|
| ![Form Design](./screenshots/01_Security_Incident_Form(blank).png) | Custom form with Incident, Threat, and Resolution sections |
| ![UI Policies](./screenshots/02_Security_Incident_UI_Policies.png) | UI Policies controlling visibility and mandatory logic |
| ![Form Not Resolved](./screenshots/03_Security_Incident_Form(State_Not_Resolved).png) | Incident form in “New” state |
| ![Form Resolved](./screenshots/04_Security_Incident_Form(State_Resolved_Displays_Resolution_Notes).png) | Resolution Notes field visible after resolving |
| ![Filled Form](./screenshots/05_Security_Incident_Form(Filled).png) | Fully populated example record |
| ![Impersonation](./screenshots/06_Security_Incident_Form(Filled_Impersonating_TestUser).png) | Impersonation showing Test User view |
| ![List View](./screenshots/07_Security_Incident_List_View.png) | List view summarizing all security incidents |
| ![SOC Incident Overview Dashboard](./screenshots/08_SOC_Incident_Overview_Dashboard.png) | Custom dashboard showing trends, attack types, severity, lifecycle status, team resolution metrics, and open critical incidents |

---

## 🚧 Planned Enhancements

Future improvements may include:
- Flow Designer automation for notifications, escalations, or task handling
- Additional incident workflows and automation logic
- Access controls (ACLs) for more granular role-based permissions
- Expanded SOC-style reporting and response functionality

---

## 🛠 Next Steps

Planned enhancements to continue expanding the application:
- 🔒 **Access Controls (ACLs)** → SOC Analyst vs SOC Manager permissions
- ⚡ **Flow Designer Automation** → notifications, escalations, and task routing
- 🎛 **List Layout Optimization** → cleaner columns such as *Number*, *Short Description*, *Priority*, *State*, and *Attack Type*
- ➕ **Additional UI Policies** → for example, *MITRE Technique ID required for certain attack types*
- 📈 **More Advanced Reporting** → deeper operational and SOC-style analytics

---

## 🎯 Why This Project Matters

This project demonstrates how **ServiceNow** can be customized for **cybersecurity use cases** beyond ITSM — bridging IT operations with security operations.

It highlights hands-on experience with:
- Scoped application creation
- Custom tables, fields, and roles
- UI policy design and dynamic field logic
- Form and menu structuring
- Role-based visibility and impersonation testing

---

## 📂 Project Structure
