# 🛡️ ServiceNow Security Incident Tracker

A custom ServiceNow application built to simulate **SOC (Security Operations Center)** workflows and practice **CSA (Certified System Administrator)** concepts.

This app extends **ITSM principles** into a cybersecurity-oriented use case — tracking, analyzing, and resolving security incidents.

---

## 🚀 Features Implemented

### 🧩 Custom Security Incident Table
Designed to support core SOC workflows with specialized fields:
- **Attack type** (Phishing, Malware, Ransomware, etc.)
- **MITRE Technique ID**
- **Suspicious URL** & **IOC tracking**
- **Priority**, **Impact**, and **State**

### ⚙️ UI Policies
Dynamic behavior to improve data accuracy:
- When **Attack type = Phishing**, the **Email Header (raw)** field becomes **visible and mandatory**.
- When **State = Resolved**, the **Resolution Notes** field becomes **required**.
- When **Attack type = Other**, the **Other details** field is **shown**.

### 📂 Application Menu
Organized for efficient navigation:
- **Security Incidents** → List all incidents  
- **My Incidents** → View incidents assigned to the logged-in user  
- **New Security Incident** → Quickly create a new record  

### 🧭 Form Layout
Structured into intuitive sections:
1. **Incident Details** – Core ITSM fields  
2. **Threat Information** – Cybersecurity enrichment fields  
3. **Resolution Details** – Appears when the incident is resolved  
4. **Tracking** – For internal notes or related indicators  

### 🧑‍💻 Role-Based Structure
Includes roles for realistic SOC access control:
- **SOC Analyst**
- **SOC Manager**
- **Security Incident User**

---

## 📸 Screenshots (Current)

| Screenshot | Description |
|-------------|--------------|
| ![Form Design](./screenshots/01_Security_Incident_Form(blank).png) | Custom form with Incident, Threat, and Resolution sections |
| ![UI Policies](./screenshots/02_Security_Incident_UI_Policies.png) | UI Policies controlling visibility and mandatory logic |
| ![Form Not Resolved](./screenshots/03_Security_Incident_Form(State_Not_Resolved).png) | Incident form in “New” state |
| ![Form Resolved](./screenshots/04_Security_Incident_Form(State_Resolved_Displays_Resolution_Notes).png) | Resolution Notes field visible after resolving |
| ![Filled Form](./screenshots/05_Security_Incident_Form(Filled).png) | Fully populated example record |
| ![Impersonation](./screenshots/06_Security_Incident_Form(Filled_Impersonating_Test_User).png) | Impersonation showing Test User view |
| ![List View](./screenshots/07_Security_Incident_List_View.png) | List view summarizing all security incidents |

*(More screenshots such as dashboards or reports to be added later.)*

---

## 🛠 Next Steps (Work in Progress)

Planned enhancements to make the app more realistic and practical:

- 🔒 **Access Controls (ACLs)** → SOC Analyst vs SOC Manager permissions  
- 📊 **Reports & Dashboards** → e.g., *Incidents by Attack Type*, *Incidents by Priority*  
- 🎛 **List Layout Optimization** → Cleaner columns (*Number*, *Short Description*, *Priority*, *State*, *Attack Type*)  
- ➕ **Additional UI Policies** → e.g., *MITRE ID required for Malware cases*  

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

