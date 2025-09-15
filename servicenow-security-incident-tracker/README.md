
# ServiceNow Security Incident Tracker  

A custom ServiceNow application built to simulate **SOC (Security Operations Center) workflows** and practice **CSA (Certified System Administrator)** concepts.  
This app extends ITSM principles into a **cybersecurity-oriented use case** — tracking, analyzing, and resolving security incidents.  

---

## 🚀 Features Implemented
- **Custom Security Incident table** with fields for SOC workflows:
  - Attack type (Phishing, Malware, Ransomware, etc.)  
  - MITRE Technique ID  
  - Suspicious URL & IOC tracking  
  - Priority, Impact, State  
- **UI Policy**  
  - When `Attack type = Phishing`, the **Email Header (raw)** field is shown & required.  
- **Application Menu**  
  - **Security Incidents** → List all incidents  
  - **My Incidents** → Incidents assigned to the logged-in user  
  - **New Security Incident** → Create new records quickly  
- **Form Layout** organized into sections:  
  - *Incident Details* (core ITSM fields)  
  - *Threat Information* (cybersecurity enrichment)  
- **Role-based structure** (SOC Analyst, SOC Manager, Security Incident User)  

---

## 📸 Screenshots (Current)
- **Form Design** (custom sections and fields)  
  ![Form Design](screenshots/form-design.png)  

- **New Incident Form** (sample record creation)  
  ![New Incident Form](screenshots/new-incident-form.png)  

- **Application Menu** (modules: All, My, New)  
  ![Application Menu](screenshots/application-menu.png)  

*(You can add more screenshots later — e.g., reports, dashboards, list layouts.)*  

---

## 🛠 Next Steps (Work in Progress)
Planned enhancements to make the app more realistic and recruiter-ready:  
- 🔒 **Access Controls (ACLs)** → SOC Analyst vs SOC Manager permissions  
- 📊 **Reports & Dashboards** → e.g., “Incidents by Attack Type”, “Incidents by Priority”  
- 🎛 **List Layout Optimization** → cleaner columns (Number, Short Description, Priority, State, Attack Type)  
- ➕ **More UI Policies** → e.g., MITRE ID required for Malware cases  

---

## 🎯 Why This Project Matters
This project shows how **ServiceNow can be customized for cybersecurity use cases** beyond ITSM, bridging IT operations with security operations.  
It also demonstrates hands-on ability to:  
- Create scoped applications  
- Build custom tables, fields, and roles  
- Apply UI policies  
- Structure forms and application menus  

---

## 📂 Project Structure
