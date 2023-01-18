---
title: Intercom

permalink:platform/instructions/ko//latest/Agent Transfer/intercom

---
Kore.ai XO Platform now supports integration with Intercom Agent System to handover the conversations without having to use the BotKit.

<container>

**Step 1: Creating an App**

1. To set up Intercom to receive messages, you will first need to create an app in Intercom. 
 
2. You can set up a new app by visiting https://app.intercom.com/a/apps/_/developer-hub.

</container>

<container>

**Step 2: Retrieve Access Token**

1. Once you create the App, click on authentication and copy (or generate, if it’s not available) the access token. This token will be used to access your Intercom data via API.
 
2. Copy this access token, navigate back to Kore.ai XO Platform and paste the Access Token into the Access Token field.
 
</container>

<container>
 
**Step 3: Configuring a Webhook**
 
1. To set up the webhook, Log in to your Intercom account.

2. From the main menu on the left, navigate to Settings > Webhooks.
 
3. Navigate back to Kore.ai XO Platform, and
 
   i.   To add a new webhook, click on the "Add Webhook" button.
 
   ii.  In the "New Webhook" form, you can enter the details for the new webhook.
 
   iii. Copy the webhook URL listed under Integrations → Agent Transfer → Intercom → Configuration.
 
    iv. Navigate back to Intercom and paste the copied Webhook URL in the webhook field.
 
4. Under Webhook topics, navigate to ‘Select a Topic’ and select the following topics:
 
   i.   conversation.admin.closed
 
   ii.  conversation.admin.replied
 
   iii. conversation.admin.assigned
 
   iv.  conversation.admin.single.created
 
5. Click on Save to preserve these settings

6. Enable Intercom by clicking on the ‘Save’ button on Kore.ai XO Platform.

</container>
