---
title: Genesys

permalink: platform/instructions/ja/latest/Agent Transfer/genesys

---
Kore.ai XO Platform now supports integration with Genesys Agent System to handover the conversations without having to use the BotKit.

<container>

**Step 1: Retrieve an Organization ID:**

1. In order to retrieve your organization ID, please follow the steps mentioned at https://developer.mypurecloud.com/api/webchat/widget-version2.html#obtain_your_genesys_cloud_organization_id
  
2. Paste this Organization ID under the Organization ID field in the configuration tab.

</container>

<container>

**Step 2: Create a Deployment ID**

1. To create a Deployment ID, please login to Genesys Pure Cloud and navigate to Admin-> Contact center-> Widgets. 
  
2. Under widgets, Click on Create Widget with Widget Type selected as Third Party.
  
3. Paste this Deployment ID under the Deployment ID field in configuration tab.

</container>

<container>
 
**Step 3: Create a Queue**
 
1. Please login to Genesys Pure Cloud and go to Admin-> Contact Center-> Queues and Create queue.
  
2. Paste this Queue name under the Queue Name field in configuration tab.

3. Enable Genesys by clicking on the ‘Save’ button on Kore.ai XO Platform.

</container>


