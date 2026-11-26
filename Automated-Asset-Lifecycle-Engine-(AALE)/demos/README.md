# AALE Demos

Short walkthroughs of AALE running in a ServiceNow developer instance. Each one has the exact payload I sent, so you can reproduce it.

| Demo | What it shows | Video | Payload |
|---|---|---|---|
| 1. REST event to automatic refresh request | An inbound hardware event creates an Asset Lifecycle record and raises a hardware refresh request automatically | [Watch on LinkedIn](https://lnkd.in/p/gWYinaqN) | [demo1-payload.json](demo1-payload.json) |
| 2. Approval flow | A software-detected event puts the asset in Pending Review, goes to an approver, and moves to In Stock once approved | [Watch on LinkedIn](https://lnkd.in/p/ggx_s484) | [demo2-payload.json](demo2-payload.json) |

## How to reproduce

1. In ServiceNow, open **REST API Explorer** and choose the `aale_inbound_events` API.
2. Select `POST /events`.
3. Paste the payload from the demo's JSON file into the request body.
4. Use a new hostname and serial number each time, so you create a new asset instead of updating an old one.
5. Send the request, then check the **Asset Lifecycle** table (and **Requested Items** for Demo 1, or the approval for Demo 2).

Demo 1 depends on the lease expiration date. Set it to a date close enough to fall inside the refresh window.

## Not covered yet

Discovery and the MID Server work in my instance, but they don't feed AALE yet. Connecting them is the next build. See Known Limitations in the main README.
