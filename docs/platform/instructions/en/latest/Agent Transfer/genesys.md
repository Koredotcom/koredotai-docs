---
title: Genesys

permalink: platform/instructions/en/latest/Agent Transfer/genesys

---
Kore.ai XO Platform now supports integration with Genesys Agent System to handover the conversations without having to use the BotKit.

<base target="_blank">
<container>

**Step 1: Add the Genesys Cloud login URL:**
The Genesys Cloud Login URL ensures that your app connects to the correct regional Genesys instance for seamless agent handoff using the WebMessaging APIs.

1.Log into your Genesys Cloud account. The login URL will be visible in your browser’s address bar (e.g.https://login.mypurecloud.com)
  
2. Copy the URL and paste it into the “Genesys Cloud login URL” field in the Configurations tab.

3. Alternatively, you can also get your region-specific “Genesys Cloud login URL” by referring to this [Genesys Cloud region URL's info](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/#tab2)


</container>

<container>

**Step 2: Retrieve the Organization ID**

1. To retrieve your organization ID, please follow the steps mentioned in [Find your Organization ID](https://help.mypurecloud.com/faqs/how-do-i-find-my-organization-id/)
  
2. Copy the ID and paste it into the “Organization ID” field in the Configurations tab.  

</container>

<container>
 
**Step 3: Create a Deployment Key**
 
1. Log in to Genesys Cloud and go to Admin > Contact Center > Widgets.
  
2. Click Create Widget, select the widget type as Third Party, and save it.

3. Once saved, the system will display a Deployment Key.

4. Copy this key and paste it into the Deployment ID field on the Configurations tab.

</container>

<container>
 
**Step 4: Create a Queue**
 
1. Please login to Genesys Pure Cloud and go to Admin-> Contact Center-> Queues and Create queue.
  
2. Copy the Queue name and paste it into the Queue Name field in the Configurations tab.

</container>

<container>
 
**Step 5: Add the WebSocket URL**
The Genesys WebSocket URL connects your app to the appropriate regional Genesys instance to enable real-time communication via WebMessaging APIs.
 
1. Go to the following link to find your region's Genesys WebSocket URL: [Genesys WebSocket Region Info](https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#connecting)
   
2. Locate the WebSocket address that matches your Genesys Cloud region.

3. Copy the WebSocket URL (e.g., wss://streaming.mypurecloud.com/v2/websocket).

4. Paste the copied WebSocket address into the WebSocket URL field in the Configurations tab.

</container>



