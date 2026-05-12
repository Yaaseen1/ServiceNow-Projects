Technical Implementation and Verification
The following implementation details demonstrate the architecture of the SecOps and Automated Response Framework. The integration has been successfully tested end-to-end, confirming a seamless connection between ServiceNow and the Gemini API, with further polishing planned for advanced remediation logic.


Integration Architecture

01-gemini-api-config.png | Secure Credentialing: Demonstrates secure management by using gs.getProperty to retrieve the Gemini API key, ensuring high security standards for the integration.

02-api-request-headers.png | REST Architecture: Details the REST step configuration, including the specific model endpoint and the structured JSON payload used to prompt the AI for SOC-level analysis.

03-gemini-response-mapping.png | Dynamic Parsing: Showcases the custom parsing script used to navigate the JSON response body and isolate the threat analysis text for use within the ServiceNow environment.


Automation Engine

04-automated-triage-flow.png | Flow Orchestration: Provides a comprehensive view of the Workflow Studio logic. This flow acts as the orchestrator, managing everything from the initial trigger to final infrastructure updates in the CMDB.
   

05-scoped-app-structure.png | Scoped Management: Confirms the project's organization as a Scoped Application. This ensures that all custom logic, tables, and scripts remain modular and follow ServiceNow best practices for platform health.

Successful Testing and Results

06-ai-incident-results.png | Integration Success Verified: This view shows a live security incident where the framework successfully processed a threat. The Work Notes display real-time AI analysis and recommended MITRE D3FEND countermeasures, proving the automation's immediate impact on response times.
