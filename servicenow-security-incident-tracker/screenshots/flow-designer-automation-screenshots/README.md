📂 flow-designer-automation
This module automates the initial response and triage logic for reported Phishing incidents.

01_Security_Triage_Workflow_Logic.png

This screenshot shows the visual backend logic developed in ServiceNow Flow Designer. I configured a conditional branching system that automatically assigns new Phishing incidents to the SOC Tier 1 group. It also includes an "If" condition to scan the record for suspicious URLs, ensuring high-risk threats are immediately identified.

02_Flow_Execution_Testing_Success.png

This represents the Unit Testing phase. I utilized the Flow Designer test suite to validate the logic against real data. The "green path" confirms that the system correctly evaluated a record containing a URL, successfully triggering the escalation path and auditing the record without manual intervention.

03_Incident_Record_Automated_Updates.png

The final result on the Cyber Security Incident form. This image showcases the "Proof of Automation": the system automatically updated the Impact and Urgency to High, resulting in a Critical priority. It also highlights the Activity Stream, where the flow logged automated Work Notes to provide immediate context to the security analysts.

Business Impact:

MTTR Reduction: Automating triage ensures incidents are assigned in seconds, not hours.

Data Integrity: Standardizes how high-risk phishing attempts are prioritized, removing human error.
