---
title: Genesys

permalink: platform/instructions/en/latest/Agent Transfer/genesys

---
Kore.ai XO Platform now supports integration with the Genesys Agent System to hand over the conversations to an agent without using the BotKit.

<base target="_blank">
<container>

**Step 1: Add the Genesys Cloud login URL:**

1. Log in to your Genesys Cloud account. The login URL will be visible in your browser’s address bar (e.g.https://login.mypurecloud.com)
  
2. Copy and paste the URL into the “Genesys Cloud login URL” field in the Configurations tab.

3. Alternatively, you can also get your region-specific “Genesys Cloud login URL” by referring to this [Genesys Cloud region URL's info](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/#tab2)

</container>

<container>

**Step 2: Retrieve the Organization ID**

1. To retrieve your organization ID, please follow the steps mentioned in [Find your Organization ID](https://help.mypurecloud.com/faqs/how-do-i-find-my-organization-id/)
  
2. Copy the ID and paste it into the “Organization ID” field in the Configurations tab.  

</container> 

<container>
 
**Step 3: Create a Queue**
 
1. Navigate to Admin → Contact Center → Queues.
  
2. Click Create Queue.

3. Enter the Queue name, and select the appropriate division.

4. Click Save and navigate to the Queue settings screen.

5. Assign agents or groups as queue members.

6. Configure routing methods and other queue settings as needed.

7. Click Save and copy the Queue name.

8. Paste the Queue name into the Queue Name field in your Configurations tab.

</container>

<container>
 
**Step 4: Create an Inbound Message Flow**
 
1. Navigate to Admin → Architect.
  
2. Hover over the Flows menu and select Inbound Message Flow.

3. Click Add to create a new Inbound Message Flow.

4. Enter a unique name and (optionally) a description for the flow.

5. Select the appropriate division for the flow.

6. Click Create Flow to open the flow configuration page.

7. In the flow editor, add a Transfer to ACD action and select the target queue for agent transfer.

8. Configure any additional logic or error handling as needed.

9. Validate and Publish the flow to make it available for routing.

</container>

<container>
 
**Step 5: Create a Deployment Key**

For WebChat
 
1. Navigate to Admin > Contact Center > Widgets.
  
2. Click Create Widget, select the widget type as Third Party, and save it.

3. In the widget settings, select Route to Flow.

4. Choose the Inbound Message flow you have created in Architect for routing.

5. Once saved, the system will display a Deployment Key.

6. Copy this key and paste it into the Deployment Key field on the Configurations tab.

For WebMessaging

1. Navigate to Admin → Message → Messenger Configurations and click New Configuration.

2. Enter a name and description, then under Labels & Languages Support, choose the supported languages and set the default language.

3. In the Apps tab, set Conversation Disconnect to "Display conversation status and disconnect session" and click Save.

4. Navigate to Admin → Message → Messenger Deployments and click Create New Deployment.

5. Enter a deployment name, select the Messenger configuration you have created, and choose WebMessaging Legacy Default for the Supported Content Profile.

6. Set domain restrictions as needed.

7. In Select your Architect Flow, choose the Inbound Message Flow you have created.

8. Click Save to generate the Deployment Key, then copy the same and paste it into the Deployment Key field on the Configurations tab.

</container>

<container>
 
**Step 6: Add the WebSocket URL(This is applicable only for WebMessaging)**
 
1. Go to the following link to find your region's Genesys WebSocket URL:[Genesys WebSocket Region Info](https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#connecting)
  
2. Locate the WebSocket address that matches your Genesys Cloud region.

3. Copy the WebSocket URL (e.g., wss://streaming.mypurecloud.com/v2/websocket).

4. Paste the copied WebSocket address into the WebSocket URL field in the Configurations tab.

</container>


