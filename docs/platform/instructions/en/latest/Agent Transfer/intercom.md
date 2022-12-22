---
title: Intercom

permalink: platform/instructions/en/latest/Agent Transfer/intercom

---
For XO Platform to integrate with Intercom, you’ll need to follow the steps below:

<container>

**Step 1: Creating an App**

To set up Intercom to receive messages, you will first need to create an app in Intercom. You can set up a new app by visiting https://app.intercom.com/a/apps/_/developer-hub.

</container>

<container>

**Step 2: Retrieve Access Token**

1. Once you create the App, click on authentication and copy (or generate, if it’s not available) an access token. This token will be used to access your Intercom data via API.
2. Copy this access token, navigate back to SmartAssist and paste the Access Token into the Access Token field under Outgoing Setup → Outgoing Chat Agent Transfer → Intercom → Configuration
</container>

<container>
 
**Step 3: Configuring a Webhook**
 
1. To set up the webhook, click on the app → Webhooks.
 
2. Navigate back to SmartAssist, and
 
   i.   Copy the webhook URL listed under Outgoing Setup → Outgoing Chat Agent Transfer → Intercom → Configuration.
 
   ii.   Navigate back to Intercom and paste the copied Webhook URL in the webhook field
 
3. Under Webhook topics, navigate to ‘Select a Topic’ and select the following topics:
 
   i.   conversation.admin.closed
 
   ii.   conversation.admin.replied
 
   iii.   conversation.admin.assigned
 
   iv.   conversation.admin.single.created
 
4. Click on Save to preserve these settings

Save your settings by clicking on the ‘Done’ button

</container>
